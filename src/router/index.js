import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/home',
    component: () => import('../views/home/index.vue'),
    children: [
      {
        path: '/',
        redirect: '/home/index'
      },
      {
        path: '/home/index',
        component: () => import('../views/index/index.vue'),
      },
      {
        path: '/home/deploy',
        component: () => import('../views/deploy/index.vue'),
        children: [
          { path: '/', redirect: 'settings' },
          { path: 'settings', name: 'Settings', component: () => import('../views/deploy/settings.vue') },
          { path: 'showpage', name: 'Showpage', component: () => import('../views/deploy/showpage.vue') },
        ]
      },
      {
        path: '/home/schedule',
        component: () => import('../views/schedule/index.vue'),
        children: [
          { path: '/', redirect: 'settings' },
          { path: 'settings', name: 'Settings', component: () => import('../views/schedule/settings.vue') },
          { path: 'verify1', name: 'Verify1', component: () => import('../views/schedule/verify1.vue') },
          { path: 'verify2', name: 'Verify2', component: () => import('../views/schedule/verify2.vue') },
          { path: 'verify3', name: 'Verify3', component: () => import('../views/schedule/verify3.vue') },
          { path: 'showpage', name: 'Showpage', component: () => import('../views/schedule/showpage.vue') },
        ]
      },
      {
        path: '/home/wireless',
        component: () => import('../views/wireless/index.vue'),
        children: [
          { path: '/', redirect: 'settings' },
          { path: 'settings', name: 'Settings', component: () => import('../views/wireless/settings.vue') },
          { path: 'showpage', name: 'Showpage', component: () => import('../views/wireless/showpage.vue') },
        ]
      },
      {
        path: '/home/optimize',
        component: () => import('../views/optimize/index.vue'),
        children: [
          { path: '/', redirect: 'settings' },
          { path: 'settings', name: 'Settings', component: () => import('../views/optimize/settings.vue') },
          { path: 'select', name: 'Select', component: () => import('../views/optimize/select.vue') },
          { path: 'simulation', name: 'Simulation', component: () => import('../views/optimize/simulation.vue') },
          { path: 'optimization', name: 'Optimization', component: () => import('../views/optimize/optimization.vue') },
          { path: 'showpage', name: 'Showpage', component: () => import('../views/optimize/showpage.vue') },
        ]
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
