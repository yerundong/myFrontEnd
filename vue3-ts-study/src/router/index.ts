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
      path: '/basic',
      meta: { menuName: '基本用法' },
      component: () => import('@/views/基本用法.vue')
    },
    {
      path: '/any',
      meta: { menuName: 'any、unknown、never类型' },
      component: () => import('@/views/any、unknown、never类型.vue')
    },
    {
      path: '/types',
      meta: { menuName: '类型系统' },
      component: () => import('@/views/类型系统.vue')
    },
    {
      path: '/array',
      meta: { menuName: '数组' },
      component: () => import('@/views/数组.vue')
    },
    {
      path: '/tuple',
      meta: { menuName: '元组' },
      component: () => import('@/views/元组.vue')
    },
    {
      path: '/symbol',
      meta: { menuName: 'symbol类型' },
      component: () => import('@/views/symbol类型.vue')
    },
    {
      path: '/function',
      meta: { menuName: '函数' },
      component: () => import('@/views/函数.vue')
    },
    {
      path: '/object',
      meta: { menuName: '对象' },
      component: () => import('@/views/对象.vue')
    },
    {
      path: '/interface',
      meta: { menuName: '接口' },
      component: () => import('@/views/接口.vue')
    },
    {
      path: '/class',
      meta: { menuName: '类' },
      component: () => import('@/views/类.vue')
    },
  ]
})

export default router

