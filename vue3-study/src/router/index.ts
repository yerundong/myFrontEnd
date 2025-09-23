import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      menuName: 'home',
      component: () => import('@/views/home'),
    },
    {
      path: '/base',
      menuName: 'Base',
      component: () => import('@/views/Base'),
    },
    {
      path: '/setup-option',
      menuName: 'setup-选项式',
      component: () => import('@/views/setup-选项式'),
    },
    {
      path: '/compted',
      menuName: 'computed',
      component: () => import('@/views/computed'),
    },
    {
      path: '/watch',
      menuName: 'watch',
      component: () => import('@/views/watch'),
    },
    {
      path: '/模板引用',
      menuName: '模板引用',
      component: () => import('@/views/模板引用'),
    },
    {
      path: '/component',
      menuName: '组件',
      component: () => import('@/views/组件'),
    },
    {
      path: '/component-option',
      menuName: '组件-选项式',
      component: () => import('@/views/组件-选项式'),
    },
    {
      path: '/composables',
      menuName: '组合式函数',
      component: () => import('@/views/组合式函数'),
    },
    {
      path: '/createVNode',
      menuName: 'createVNode',
      component: () => import('@/views/createVNode'),
    },
    {
      path: '/createVNode-option',
      menuName: 'createVNode-选项式',
      component: () => import('@/views/createVNode-选项式'),
    },
    {
      path: '/defineComponent',
      menuName: 'defineComponent',
      component: () => import('@/views/defineComponent'),
    },
  ],
});

export default router;
