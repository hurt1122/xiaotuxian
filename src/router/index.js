import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', component: () => import('@/views/Layout/index.vue'),
      children: [
        { path: '', component: () => import('@/views/home/home.vue') },
        { path: '/catgory/:id', component: () => import('@/views/category/catgory.vue') },
        { path: '/catgory/sub/:id', component: () => import('@/views/subCategory/index.vue') }
      ]
    },
    { path: '/login', component: () => import('@/views/login/login.vue') },
    { path: '/test', component: () => import('@/views/test.vue') },

  ]
})

export default router
