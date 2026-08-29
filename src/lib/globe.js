/* historya-globe / historya-outline / historya-map
   Portado del diseño «Atlas Nocturno» del cliente (design/globe.js).

   Cambios respecto al original, y solo estos: d3 y topojson se importan del
   bundle en vez de leerse de `window`; el atlas Natural Earth 110m viaja en el
   paquete en vez de venir de un CDN (la app es una PWA y debe funcionar sin
   red); y los avisos al exterior son CustomEvent sobre el propio elemento en
   vez de callbacks globales, para que convivan con el ciclo de vida de Vue.
   La geometría, la paleta nocturna y los gestos son los del diseño. */
import * as d3 from 'd3-geo'
import * as topojson from 'topojson-client'
import atlas from 'world-atlas/countries-110m.json'
import { ES_NAMES } from './country-names'

/** Aviso al exterior. El diseño usaba window.HISTORYA_ON_*; aquí es un evento. */
function emit(el, type, detail) {
  el.dispatchEvent(new CustomEvent(type, { detail, bubbles: false }))
}

;(function () {
  'use strict';
  var worldP = null;

  function world() {
    if (!worldP) {
      worldP = Promise.resolve().then(function () {
        var fc = topojson.feature(atlas, atlas.objects.countries);
        var feats = fc.features.filter(function (f) { return f.properties.name !== 'Antarctica'; });
        feats.forEach(function (f) {
          f.__b = d3.geoBounds(f);
          f.__c = d3.geoCentroid(f);
          f.__wrap = f.__b[0][0] > f.__b[1][0];
          f.__area = d3.geoArea(f);
          f.__es = esName(f);
        });
        return feats;
      });
    }
    return worldP;
  }

  function esName(f) {
    return ES_NAMES[f.properties.name] || f.properties.name;
  }

  function tok(el, name, fallback) {
    var v = getComputedStyle(el).getPropertyValue(name);
    return (v && v.trim()) || fallback;
  }

  /* Paleta cartográfica: tonos OKLCH armónicos con el acento #ec3013,
     a la misma lightness perceptual que los pasos 200-300 del sistema. */
  var LAND = [
    'oklch(0.87 0.055 78)',   // arena
    'oklch(0.83 0.075 48)',   // arcilla
    'oklch(0.86 0.050 148)',  // salvia
    'oklch(0.85 0.055 232)',  // cielo
    'oklch(0.84 0.045 300)',  // malva
    'oklch(0.88 0.075 98)'    // ocre
  ];
  var OCEAN = 'oklch(0.845 0.045 228)';

  /* Paleta nocturna: tierra en tonos joya oscuros, océano abisal, brasa para lo que tiene lección */
  var NIGHT = [
    'oklch(0.36 0.045 250)', 'oklch(0.33 0.05 205)', 'oklch(0.375 0.05 158)',
    'oklch(0.35 0.055 82)', 'oklch(0.325 0.05 305)', 'oklch(0.37 0.06 42)'
  ];
  var EMBER = '#ff4a1c';

  function hash(s) {
    var h = 0;
    for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
    return h;
  }

  function easeInOut(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }

  function shortLon(a, b) {
    var d = ((b - a) % 360 + 540) % 360 - 180;
    return a + d;
  }

  /* ---------------------------------------------------------------- globo */
  class HistoryaGlobe extends HTMLElement {
    static get observedAttributes() { return ['mode', 'spin', 'selected', 'covered']; }

    connectedCallback() {
      if (this.__up) return;
      this.__up = true;
      this.style.display = 'block';
      if (!this.style.position) this.style.position = 'relative';
      if (!this.style.height) this.style.height = '100%';
      if (!this.style.width) this.style.width = '100%';
      this.canvas = document.createElement('canvas');
      this.canvas.style.cssText = 'display:block;width:100%;height:100%;touch-action:none;cursor:grab';
      this.appendChild(this.canvas);
      this.ctx = this.canvas.getContext('2d');

      this.rot = [12, -14];
      this.zoom = 1;
      this.vel = 0;
      this.hover = null;
      this.sel = null;
      this.visible = true;
      this.dragging = false;
      this.flying = null;

      this.ro = new ResizeObserver(this.resize.bind(this));
      this.ro.observe(this);
      this.io = new IntersectionObserver(function (es) {
        this.visible = es[0].isIntersecting;
        this.loop();
      }.bind(this));
      this.io.observe(this);
      this.onVis = this.loop.bind(this);
      document.addEventListener('visibilitychange', this.onVis);

      this.bind();
      world().then(function (f) {
        this.feats = f;
        this.resize();
        emit(this, 'hy-ready', { count: f.length });
      }.bind(this));
    }

    disconnectedCallback() {
      this.ro && this.ro.disconnect();
      this.io && this.io.disconnect();
      document.removeEventListener('visibilitychange', this.onVis);
      cancelAnimationFrame(this.raf);
      this.raf = null;
    }

    attributeChangedCallback(n, o, v) {
      if (!this.__up) return;
      if (n === 'selected' && this.feats) {
        var f = v ? this.find(v) : null;
        if (!f) { this.zoomOut(); }
        else if (f !== this.sel) { this.sel = f; this.flyTo(f, true); }
      }
      this.draw();
    }

    get spinRate() {
      if (this.getAttribute('spin') === 'off') return 0;
      return 0.055;
    }

    covered() {
      var raw = this.getAttribute('covered') || '';
      if (raw !== this.__covRaw) {
        this.__covRaw = raw;
        this.__cov = {};
        raw.split(',').forEach(function (s) { s = s.trim(); if (s) this.__cov[s.toLowerCase()] = 1; }, this);
      }
      return this.__cov || {};
    }

    find(name) {
      if (!this.feats || !name) return null;
      var k = String(name).toLowerCase();
      return this.feats.find(function (f) {
        return f.__es.toLowerCase() === k || f.properties.name.toLowerCase() === k || String(f.id) === k;
      }) || null;
    }

    resize() {
      if (!this.ctx) return;
      var w = this.clientWidth || 320, h = this.clientHeight || 320;
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.w = w; this.h = h;
      this.canvas.width = Math.round(w * dpr);
      this.canvas.height = Math.round(h * dpr);
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      this.r0 = Math.min(w, h) / 2 - 6;
      this.proj = d3.geoOrthographic().clipAngle(90).translate([w / 2, h / 2]);
      this.path = d3.geoPath(this.proj, this.ctx);
      this.grat = d3.geoGraticule10();
      this.draw();
      this.loop();
    }

    /* un solo rAF, sólo cuando hay algo que mover y el globo está a la vista */
    loop() {
      if (this.raf) return;
      var step = function () {
        this.raf = null;
        if (!this.visible || document.hidden || !this.proj) return;
        var moving = false;
        if (this.flying) {
          var f = this.flying, t = Math.min(1, (performance.now() - f.t0) / f.dur), e = easeInOut(t);
          this.rot = [f.a[0] + (f.b[0] - f.a[0]) * e, f.a[1] + (f.b[1] - f.a[1]) * e];
          this.zoom = f.z0 + (f.z1 - f.z0) * e;
          if (t >= 1) { this.flying = null; f.done && f.done(); } else moving = true;
        } else if (this.dragging) {
          moving = true;
        } else {
          if (Math.abs(this.vel) > 0.004) { this.rot[0] += this.vel; this.vel *= 0.94; moving = true; }
          else { this.vel = 0; }
          if (!this.sel && this.spinRate) { this.rot[0] += this.spinRate; moving = true; }
        }
        this.draw();
        if (moving) { this.raf = requestAnimationFrame(step); }
      }.bind(this);
      this.raf = requestAnimationFrame(step);
    }

    draw() {
      if (!this.proj || !this.ctx) return;
      var c = this.ctx, w = this.w, h = this.h;
      var ink = tok(this, '--color-text', '#201e1d');
      var accent = tok(this, '--color-accent', '#ec3013');
      var land = tok(this, '--color-neutral-300', '#d7d3d3');
      var line = tok(this, '--color-neutral-400', '#bab6b6');
      var mode = this.getAttribute('mode') || 'night';
      var cov = this.covered();
      this.proj.rotate(this.rot).scale(this.r0 * this.zoom);
      c.clearRect(0, 0, w, h);
      var tr = this.proj.translate(), R = this.r0 * this.zoom;

      // atmósfera
      if (mode === 'night') {
        var hg = c.createRadialGradient(tr[0], tr[1], R * 0.94, tr[0], tr[1], R * 1.32);
        hg.addColorStop(0, 'rgba(126,196,255,.34)');
        hg.addColorStop(.38, 'rgba(96,140,255,.12)');
        hg.addColorStop(1, 'rgba(96,140,255,0)');
        c.fillStyle = hg;
        c.beginPath(); c.arc(tr[0], tr[1], R * 1.32, 0, Math.PI * 2); c.fill();
      }

      // esfera
      c.beginPath(); this.path({ type: 'Sphere' });
      if (mode === 'night') {
        var og = c.createRadialGradient(tr[0] - R * .34, tr[1] - R * .4, R * .08, tr[0], tr[1], R * 1.06);
        og.addColorStop(0, '#14415a'); og.addColorStop(.55, '#0b2334'); og.addColorStop(1, '#04101c');
        c.fillStyle = og; c.fill();
      } else if (mode === 'color') { c.fillStyle = OCEAN; c.fill(); }
      else if (mode !== 'grid') { c.fillStyle = tok(this, '--color-neutral-100', '#f8f4f4'); c.fill(); }

      // retícula
      c.beginPath(); this.path(this.grat);
      c.strokeStyle = mode === 'night' ? 'rgba(180,215,255,.95)' : mode === 'color' ? '#fff' : line;
      c.globalAlpha = mode === 'grid' ? 0.9 : mode === 'night' ? 0.13 : mode === 'color' ? 0.45 : 0.5;
      c.lineWidth = 1; c.stroke();
      c.globalAlpha = 1;

      // países
      if (this.feats) {
        for (var i = 0; i < this.feats.length; i++) {
          var f = this.feats[i];
          var isSel = f === this.sel, isHov = f === this.hover;
          c.beginPath(); this.path(f);
          if (mode === 'outline') {
            c.fillStyle = isSel || isHov ? accent : 'transparent';
            if (isSel || isHov) c.fill();
            c.lineWidth = isSel ? 2 : 1; c.strokeStyle = ink; c.stroke();
          } else if (mode === 'grid') {
            c.lineWidth = isSel || isHov ? 2 : 1;
            c.strokeStyle = isSel || isHov ? accent : ink;
            c.globalAlpha = isSel || isHov ? 1 : 0.55; c.stroke(); c.globalAlpha = 1;
          } else if (mode === 'night') {
            var lit = cov[f.__es.toLowerCase()];
            if (isSel || isHov || lit) {
              c.shadowColor = 'rgba(255,102,48,.9)';
              c.shadowBlur = isSel ? 30 : isHov ? 20 : 13;
            }
            c.fillStyle = isSel ? '#ff8256' : isHov ? '#ff5f2d' : lit ? EMBER : NIGHT[hash(f.properties.name) % NIGHT.length];
            c.fill();
            c.shadowBlur = 0;
            c.lineWidth = isSel || isHov ? 1.4 : 0.7;
            c.strokeStyle = (lit || isSel || isHov) ? 'rgba(255,196,160,.75)' : 'rgba(186,214,255,.24)';
            c.stroke();
          } else if (mode === 'color') {
            var isCov = cov[f.__es.toLowerCase()];
            c.fillStyle = isSel ? tok(this, '--color-accent-700', '#8f1a06')
              : isHov ? tok(this, '--color-accent-400', '#f5765f')
              : isCov ? accent
              : LAND[hash(f.properties.name) % LAND.length];
            c.fill();
            c.lineWidth = isSel || isHov ? 1.8 : 0.8;
            c.strokeStyle = ink;
            c.globalAlpha = isSel || isHov ? 1 : 0.4; c.stroke(); c.globalAlpha = 1;
          } else {
            c.fillStyle = isSel ? accent : isHov ? tok(this, '--color-accent-300', '#ffc4b8') : land;
            c.fill();
            c.lineWidth = 0.9; c.strokeStyle = ink; c.globalAlpha = 0.55; c.stroke(); c.globalAlpha = 1;
          }
        }
      }
      // sombra del terminador + borde luminoso
      if (mode === 'night') {
        c.save();
        c.beginPath(); this.path({ type: 'Sphere' }); c.clip();
        var sg = c.createRadialGradient(tr[0] - R * .3, tr[1] - R * .34, R * .12, tr[0] + R * .28, tr[1] + R * .32, R * 1.55);
        sg.addColorStop(0, 'rgba(255,238,214,.11)');
        sg.addColorStop(.48, 'rgba(0,0,0,0)');
        sg.addColorStop(1, 'rgba(1,4,12,.6)');
        c.fillStyle = sg; c.fillRect(0, 0, w, h);
        c.restore();
        c.beginPath(); this.path({ type: 'Sphere' });
        c.lineWidth = 1.4; c.strokeStyle = 'rgba(168,208,255,.6)'; c.stroke();
        return;
      }
      // borde de la esfera: 2px, como todas las reglas del sistema
      c.beginPath(); this.path({ type: 'Sphere' });
      c.lineWidth = 2; c.strokeStyle = ink; c.stroke();
    }

    at(x, y) {
      if (!this.feats || !this.proj) return null;
      var t = this.proj.translate(), r = this.r0 * this.zoom;
      if (Math.hypot(x - t[0], y - t[1]) > r) return null;
      var p = this.proj.invert([x, y]);
      if (!p || isNaN(p[0])) return null;
      var best = null;
      for (var i = 0; i < this.feats.length; i++) {
        var f = this.feats[i], b = f.__b;
        if (!f.__wrap && (p[0] < b[0][0] - 0.4 || p[0] > b[1][0] + 0.4 || p[1] < b[0][1] - 0.4 || p[1] > b[1][1] + 0.4)) continue;
        if (d3.geoContains(f, p)) { if (!best || f.__area < best.__area) best = f; }
      }
      return best;
    }

    bind() {
      var el = this.canvas, self = this, down = null, moved = 0, last = 0, pend = false;

      el.addEventListener('pointerdown', function (e) {
        el.setPointerCapture(e.pointerId);
        down = { x: e.offsetX, y: e.offsetY, rot: self.rot.slice(), t: performance.now(), lx: e.offsetX };
        moved = 0; self.dragging = true; self.vel = 0; self.flying = null;
        el.style.cursor = 'grabbing';
        self.loop();
      });

      el.addEventListener('pointermove', function (e) {
        var x = e.offsetX, y = e.offsetY;
        if (down) {
          var k = 0.32 / self.zoom;
          moved = Math.max(moved, Math.hypot(x - down.x, y - down.y));
          self.rot[0] = down.rot[0] + (x - down.x) * k * 0.9;
          self.rot[1] = Math.max(-78, Math.min(78, down.rot[1] - (y - down.y) * k * 0.9));
          self.vel = (x - down.lx) * k * 0.22; down.lx = x;
          return;
        }
        if (pend) return;
        pend = true;
        requestAnimationFrame(function () {
          pend = false;
          var f = self.at(x, y);
          el.style.cursor = f ? 'pointer' : 'grab';
          if (f !== self.hover) {
            self.hover = f;
            emit(self, 'hy-hover', f ? { name: f.__es, en: f.properties.name, id: String(f.id) } : null);
            self.loop(); self.draw();
          }
        });
      });

      var up = function (e) {
        if (!down) return;
        var wasQuick = performance.now() - down.t < 500;
        self.dragging = false;
        el.style.cursor = 'grab';
        if (moved < 6 && wasQuick) {
          self.vel = 0;
          var f = self.at(down.x, down.y);
          if (f) self.pick(f);
        }
        down = null;
        self.loop();
      };
      el.addEventListener('pointerup', up);
      el.addEventListener('pointercancel', up);
      el.addEventListener('pointerleave', function () {
        if (down) return;
        if (self.hover) { self.hover = null; emit(self, 'hy-hover', null); self.draw(); }
      });
      el.addEventListener('wheel', function (e) {
        e.preventDefault();
        self.zoom = Math.max(0.85, Math.min(2.6, self.zoom * (e.deltaY < 0 ? 1.08 : 0.93)));
        self.draw();
      }, { passive: false });
    }

    /* vuelo cinematográfico hasta el país y sólo entonces se cambia de pantalla */
    pick(f) {
      this.sel = f;
      this.hover = null;
      emit(this, 'hy-focus', { name: f.__es, en: f.properties.name, id: String(f.id) });
      this.flyTo(f, false);
    }

    flyTo(f, silent) {
      var self = this;
      var target = [shortLon(this.rot[0], -f.__c[0]), -f.__c[1]];
      var z = Math.max(1.35, Math.min(2.4, 0.36 / Math.sqrt(f.__area + 0.004)));
      this.flying = {
        a: this.rot.slice(), b: target, z0: this.zoom, z1: z,
        t0: performance.now(), dur: silent ? 480 : 760,
        done: silent ? null : function () {
          emit(self, 'hy-select', { name: f.__es, en: f.properties.name, id: String(f.id) });
        }
      };
      this.loop();
    }

    focus(name) { var f = this.find(name); if (f) this.pick(f); return !!f; }

    zoomOut() {
      this.sel = null; this.hover = null;
      this.flying = { a: this.rot.slice(), b: this.rot.slice(), z0: this.zoom, z1: 1, t0: performance.now(), dur: 420 };
      this.loop();
    }
  }

  /* ------------------------------------------------- silueta de un país */
  class HistoryaOutline extends HTMLElement {
    static get observedAttributes() { return ['country', 'tone']; }
    connectedCallback() {
      if (this.__up) return;
      this.__up = true;
      this.style.display = 'block';
      this.canvas = document.createElement('canvas');
      this.canvas.style.cssText = 'display:block;width:100%;height:100%';
      this.appendChild(this.canvas);
      this.ro = new ResizeObserver(this.render.bind(this));
      this.ro.observe(this);
      world().then(function (f) { this.feats = f; this.render(); }.bind(this));
    }
    disconnectedCallback() { this.ro && this.ro.disconnect(); }
    attributeChangedCallback() { this.__up && this.render(); }
    render() {
      if (!this.feats || !this.canvas) return;
      var name = this.getAttribute('country');
      var w = this.clientWidth || 120, h = this.clientHeight || 120;
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.canvas.width = Math.round(w * dpr); this.canvas.height = Math.round(h * dpr);
      var c = this.canvas.getContext('2d');
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      c.clearRect(0, 0, w, h);
      var k = String(name || '').toLowerCase();
      var f = this.feats.find(function (x) { return x.__es.toLowerCase() === k || x.properties.name.toLowerCase() === k; });
      if (!f) return;
      var proj = d3.geoMercator().fitExtent([[2, 2], [w - 2, h - 2]], f);
      var path = d3.geoPath(proj, c);
      c.beginPath(); path(f);
      var tone = this.getAttribute('tone') || 'accent';
      c.fillStyle = tone === 'ink' ? tok(this, '--color-text', '#201e1d')
        : tone === 'light' ? 'rgba(244,241,236,.92)'
        : tone === 'ember' ? EMBER
        : tok(this, '--color-accent', '#ec3013');
      c.fill();
    }
  }

  /* ------------------------------------------------- mapa histórico plano */
  class HistoryaMap extends HTMLElement {
    static get observedAttributes() { return ['highlight', 'pins', 'pin-active', 'tone']; }
    connectedCallback() {
      if (this.__up) return;
      this.__up = true;
      this.style.display = 'block';
      this.canvas = document.createElement('canvas');
      this.canvas.style.cssText = 'display:block;width:100%;height:100%';
      this.appendChild(this.canvas);
      this.ro = new ResizeObserver(this.render.bind(this));
      this.ro.observe(this);
      world().then(function (f) { this.feats = f; this.render(); }.bind(this));
    }
    disconnectedCallback() { this.ro && this.ro.disconnect(); }
    attributeChangedCallback() { this.__up && this.render(); }
    render() {
      if (!this.feats || !this.canvas) return;
      var w = this.clientWidth || 320, h = this.clientHeight || 200;
      if (!w || !h) return;
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.canvas.width = Math.round(w * dpr); this.canvas.height = Math.round(h * dpr);
      var c = this.canvas.getContext('2d');
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      c.clearRect(0, 0, w, h);

      var set = {};
      (this.getAttribute('highlight') || '').split(',').forEach(function (s) {
        s = s.trim(); if (s) set[s.toLowerCase()] = 1;
      });
      var hi = this.feats.filter(function (f) { return set[f.__es.toLowerCase()]; });
      if (!hi.length) return;

      var proj = d3.geoMercator().fitExtent([[14, 14], [w - 14, h - 14]], { type: 'FeatureCollection', features: hi });
      var path = d3.geoPath(proj, c);
      var ink = tok(this, '--color-text', '#201e1d');
      var accent = tok(this, '--color-accent', '#ec3013');
      var night = this.getAttribute('tone') !== 'day';

      if (night) {
        var bg = c.createLinearGradient(0, 0, w, h);
        bg.addColorStop(0, '#0d2a3c'); bg.addColorStop(1, '#061420');
        c.fillStyle = bg; c.fillRect(0, 0, w, h);
      } else {
        c.fillStyle = OCEAN; c.fillRect(0, 0, w, h);
      }
      for (var i = 0; i < this.feats.length; i++) {
        var f = this.feats[i], on = set[f.__es.toLowerCase()];
        c.beginPath(); path(f);
        if (night) {
          if (on) { c.shadowColor = 'rgba(255,102,48,.85)'; c.shadowBlur = 14; }
          c.fillStyle = on ? EMBER : NIGHT[hash(f.properties.name) % NIGHT.length];
          c.fill(); c.shadowBlur = 0;
          c.lineWidth = on ? 1.2 : 0.6;
          c.strokeStyle = on ? 'rgba(255,196,160,.8)' : 'rgba(186,214,255,.2)';
          c.stroke();
        } else {
          c.fillStyle = on ? accent : LAND[hash(f.properties.name) % LAND.length];
          c.globalAlpha = on ? 0.92 : 0.5; c.fill();
          c.globalAlpha = on ? 1 : 0.35; c.lineWidth = on ? 1.4 : 0.7; c.strokeStyle = ink; c.stroke();
          c.globalAlpha = 1;
        }
      }

      var active = this.getAttribute('pin-active');
      (this.getAttribute('pins') || '').split(';').forEach(function (p) {
        var bits = p.split(',');
        if (bits.length < 2) return;
        var xy = proj([parseFloat(bits[1]), parseFloat(bits[0])]);
        if (!xy) return;
        var label = (bits[2] || '').trim();
        var on = label && label === active;
        c.beginPath();
        c.arc(xy[0], xy[1], on ? 9 : 6, 0, Math.PI * 2);
        if (on) { c.shadowColor = 'rgba(255,102,48,.9)'; c.shadowBlur = 16; }
        c.fillStyle = on ? accent : (night ? '#0b2334' : tok(this, '--color-neutral-100', '#fff'));
        c.fill(); c.shadowBlur = 0;
        c.lineWidth = 2; c.strokeStyle = night ? 'rgba(220,236,255,.85)' : ink; c.stroke();
        if (label) {
          c.font = '700 10px Archivo, sans-serif';
          c.fillStyle = night ? 'rgba(236,244,255,.9)' : ink;
          c.fillText(label, xy[0] + 12, xy[1] + 3.5);
        }
      });
    }
  }

  if (!customElements.get('historya-globe')) customElements.define('historya-globe', HistoryaGlobe);
  if (!customElements.get('historya-outline')) customElements.define('historya-outline', HistoryaOutline);
  if (!customElements.get('historya-map')) customElements.define('historya-map', HistoryaMap);
})();
