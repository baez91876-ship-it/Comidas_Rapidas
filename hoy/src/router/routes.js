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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue'),
  },
]

export default routes
