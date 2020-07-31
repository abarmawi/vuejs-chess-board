import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { routes as homeRoutes } from '@/modules/home/routes'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  ...homeRoutes,
  {
    path: '*',
    name: 'not-found',
    redirect: '/board',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
