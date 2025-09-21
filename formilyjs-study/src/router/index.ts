import { createRouter, createWebHistory, type RouterOptions } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      menuName: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/threeMode',
      menuName: '三种模式',
      children: [
        {
          path: 'template',
          menuName: 'template模式',
          component: () => import('@/views/threeMode/Template.vue'),
        },
        {
          path: 'jsonSchema',
          menuName: 'JSON Schema模式',
          component: () => import('@/views/threeMode/JsonSchema.vue'),
        },
        {
          path: 'markupSchema',
          menuName: 'Markup Schema模式',
          component: () => import('@/views/threeMode/MarkupSchema.vue'),
        },
      ],
    },
    {
      path: '/reactions',
      menuName: 'reactions',
      component: () => import('@/views/reactions.vue'),
    },
    {
      path: '/array类型',
      menuName: 'array类型',
      component: () => import('@/views/array类型.vue'),
    },
    {
      path: '/使用自定义组件',
      menuName: '使用自定义组件',
      component: () => import('@/views/使用自定义组件.vue'),
    },
    {
      path: '/demos',
      menuName: '案例',
      children: [
        {
          path: 'login-json',
          menuName: '登录-json',
          component: () => import('@/views/demos/login.vue'),
        },
        {
          path: 'login-temp',
          menuName: '登录-temp',
          component: () => import('@/views/demos/login-temp.vue'),
        },
        {
          path: 'login-markup',
          menuName: '登录-markup',
          component: () => import('@/views/demos/login-markup.vue'),
        },
        {
          path: 'edit-detail-markup',
          menuName: '编辑详情-markup',
          component: () => import('@/views/demos/edit-detail-markup.vue'),
        },
        {
          path: 'edit-detail-json',
          menuName: '编辑详情-json',
          component: () => import('@/views/demos/edit-detail.vue'),
        },
      ],
    },
  ],
} as unknown as RouterOptions);

export default router;
