import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Tracking from '../views/Tracking.vue'
import Integration from '../views/Integration.vue'
import Personalization from '../views/Personalization.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/Tracking-infos',
    name: 'Tracking',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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
  routes
})

export default router
