import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/biblioteca', name: 'library', component: () => import('../views/LibraryView.vue') },
    { path: '/estudiar/:topicId', name: 'study', component: () => import('../views/StudyView.vue') },
    { path: '/quiz', name: 'quiz', component: () => import('../views/QuizView.vue') },
    { path: '/perfil', name: 'profile', component: () => import('../views/ProfileView.vue') },
    { path: '/acceso', name: 'login', component: () => import('../views/LoginView.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

export default router
