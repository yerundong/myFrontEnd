import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      meta: { menuName: '首页' },
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/basic-use',
      meta: { menuName: '基本用法' },
      component: () => import('@/views/基本用法.vue')
    },
    {
      path: '/any-unknown-never',
      meta: { menuName: 'any、unknown、never类型' },
      component: () => import('@/views/any、unknown、never类型.vue')
    },
    {
      path: '/type-sym',
      meta: { menuName: '类型系统' },
      component: () => import('@/views/类型系统.vue')
    },
  ]
})

export default router

