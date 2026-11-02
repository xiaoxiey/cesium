import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import IndexView from '../views/index.vue'

type RouteRecordRaw = typeof RouteRecordRaw
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: IndexView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
