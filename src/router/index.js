import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/newHome'
  },
  {
    path:'/newHome',
    name:'NewHome',
    component:()=>import('../views/NewHome.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/solution',
    name: 'solution',
    component: () => import('../views/Solution.vue')
  },
  {
    path: '/partner',
    name: 'partner',
    component: () => import('../views/Partner.vue')
  },
  {
    path: '/join',
    name: 'join',
    component: () => import('../views/Join.vue')
  },
  {
    path: '/protocol',
    name: 'protocol',
    component: () => import('../views/Protocol.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
