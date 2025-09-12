import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      menuName: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/option-api',
      menuName: '选项式API',
      children: [
        {
          path: 'setup',
          menuName: 'setup选项',
          component: () => import('@/views/选项式API/setup选项.vue')
        },
        {
          path: 'component',
          menuName: '组件',
          component: () => import('@/views/选项式API/组件.vue')
        },
        {
          path: 'createVNode',
          menuName: 'createVNode',
          component: () => import('@/views/选项式API/createVNode.vue')
        }
      ]
    },
    {
      path: '/com-api',
      menuName: '组合式API',
      children: [
        {
          path: 'base',
          menuName: 'Base',
          component: () => import('@/views/组合式API/Base.vue')
        },
        {
          path: 'compted',
          menuName: '计算属性',
          component: () => import('@/views/组合式API/计算属性.vue')
        },
        {
          path: 'watch',
          menuName: '侦听器',
          component: () => import('@/views/组合式API/侦听器.vue')
        },
        {
          path: 'temp-ref',
          menuName: '模板引用',
          component: () => import('@/views/组合式API/模板引用.vue')
        },
        {
          path: 'component',
          menuName: '组件',
          component: () => import('@/views/组合式API/组件.vue')
        },
        {
          path: 'composables',
          menuName: '组合式函数',
          component: () => import('@/views/组合式API/组合式函数.vue')
        },
        {
          path: 'createVNode',
          menuName: 'createVNode',
          component: () => import('@/views/组合式API/createVNode.vue')
        }
      ]
    }
  ]
})

export default router
