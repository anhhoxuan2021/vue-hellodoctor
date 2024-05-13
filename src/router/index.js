import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    { 
      path: '/login', 
      name:'Login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        layout: 'login-default'
      }       
   },
   {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/DashboardView.vue')
  },
  {
    path: '/tab',
    name: 'Tab',
    component: () => import('../views/TabsView.vue')
  },
  {
    path: '/modal',
    name: 'Modal',
    component: () => import('../views/ModalView.vue')
  },
  {
    path: '/select22',
    name: 'SELECT',
    component: () => import('../views/Select22.vue')
  }
  ]
})

export default router
