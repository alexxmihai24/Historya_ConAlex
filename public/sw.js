/* Historya con Alex PWA: cachea la aplicación después de la primera visita. */
const CACHE_NAME = 'historya-con-alex-v2'
const APP_SHELL = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.webmanifest',
  '/pwa-icon.svg',
  '/pwa-192.png',
  '/pwa-512.png',
  '/pwa-maskable-512.png',
  '/apple-touch-icon.png',
]

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()))
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) => Promise.all(names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name)))).then(() => self.clients.claim()),
  )
})

function cacheResponse(event, request, response) {
  if (response && response.status === 200 && response.type === 'basic') {
    event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.put(request, response.clone())))
  }
  return response
}

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => cacheResponse(event, request, response))
        .catch(async () => (await caches.match(request)) || (await caches.match('/index.html')) || caches.match('/offline.html')),
    )
    return
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request).then((response) => cacheResponse(event, request, response)).catch(() => cached)
      return cached || network
    }),
  )
})
