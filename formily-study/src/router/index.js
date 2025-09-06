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
      path: '/template',
      menuName: 'template',
      component: () => import('@/views/Template.vue')
    },
    {
      path: '/jsonSchema',
      menuName: 'JSON Schema',
      component: () => import('@/views/JsonSchema.vue')
    },
    {
      path: '/markupSchema',
      menuName: 'Markup Schema',
      component: () => import('@/views/MarkupSchema.vue')
    }
  ]
})

export default router
