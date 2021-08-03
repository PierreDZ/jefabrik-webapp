import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Tracking from '../views/Tracking.vue'
import Integration from '../views/Integration.vue'
import Personalization from '../views/Personalization.vue'
import Login from '../views/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/Tracking-infos',
    name: 'Tracking',
    component: Tracking
  },
  {
    path: '/Integration',
    name: 'Integration',
    component: Integration
  },
  {
    path: '/Personalization',
    name: 'Personalization',
    component: Personalization
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
