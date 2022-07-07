import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Recommend from '@/views/Recommend.vue'
import Search from '@/views/Search.vue'
import TopList from '@/views/TopList.vue'
import Singer from '@/views/Singer.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/recommend',
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: Recommend,
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
  },
  {
    path: '/top-list',
    name: 'top-list',
    component: TopList,
  },
  {
    path: '/singer',
    name: 'singer',
    component: Singer,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
})

export default router
