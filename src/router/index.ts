import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    // El globo arrastra d3-geo y el atlas Natural Earth. En su propio trozo,
    // quien entra por /biblioteca o /quiz no se los descarga.
    { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
    { path: '/biblioteca', name: 'library', component: () => import('../views/LibraryView.vue') },
    { path: '/pais/:country', name: 'country', component: () => import('../views/CountryView.vue') },
    { path: '/estudiar/:topicId', name: 'study', component: () => import('../views/StudyView.vue') },
    { path: '/quiz', name: 'quiz', component: () => import('../views/QuizView.vue') },
    { path: '/perfil', name: 'profile', component: () => import('../views/ProfileView.vue') },
    { path: '/acceso', name: 'login', component: () => import('../views/LoginView.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

export default router
