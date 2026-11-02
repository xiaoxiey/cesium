import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
type RouteRecordRaw = typeof RouteRecordRaw
const routes: Array<RouteRecordRaw> = [
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
