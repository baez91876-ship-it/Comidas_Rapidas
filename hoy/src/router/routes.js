const routes = [
  {
    path: '/',
    component: () => import('@/pages/IndexPage.vue')
  },
  {
    path: '/categoria/:slug',
    component: () => import('@/pages/CategoryPage.vue')
  },
  {
    path: '/nosotros',
    component: () => import('@/pages/NosotrosPage.vue')
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue'),
  },
]

export default routes
