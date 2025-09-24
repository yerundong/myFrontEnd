import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      meta: { menuName: 'Home' },
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/reactionBase',
      meta: { menuName: '响应式基础' },
      component: () => import('@/views/响应式基础.vue'),
    },
    {
      path: '/setup-option',
      meta: { menuName: 'setup-选项式' },
      component: () => import('@/views/Setup-选项式.vue'),
    },
    {
      path: '/compted',
      component: () => import('@/views/Computed.vue'),
    },
    {
      path: '/watch',
      meta: { menuName: 'watch' },
      component: () => import('@/views/Watch.vue'),
    },
    {
      path: '/模板引用',
      meta: { menuName: '模板引用' },
      component: () => import('@/views/模板引用.vue'),
    },
    {
      path: '/component',
      meta: { menuName: '组件' },
      component: () => import('@/views/组件.vue'),
    },
    {
      path: '/component-option',
      meta: { menuName: '组件-选项式' },
      component: () => import('@/views/组件-选项式.vue'),
    },
    {
      path: '/composables',
      meta: { menuName: '组合式函数' },
      component: () => import('@/views/组合式函数.vue'),
    },
    {
      path: '/createVNode',
      meta: { menuName: 'createVNode' },
      component: () => import('@/views/CreateVNode.vue'),
    },
    {
      path: '/createVNode-option',
      meta: { menuName: 'createVNode-选项式' },
      component: () => import('@/views/CreateVNode-选项式.vue'),
    },
    {
      path: '/defineComponent',
      meta: { menuName: 'defineComponent' },
      component: () => import('@/views/DefineComponent.vue'),
    },
    {
      path: '/PropType',
      meta: { menuName: 'PropType' },
      component: () => import('@/views/PropType.vue'),
    },
  ],
});

export default router;
