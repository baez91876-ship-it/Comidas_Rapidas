import { createRouter, createWebHistory } from 'vue-router'
import Bebidas from '../../../view/Bebidas.vue'
import Hamburguesas from '../../../view/Hamburguesas.vue'
import Nosotros from '../../../view/Nosotros.vue'
import Perros from '../../../view/Perros.vue'
import Pizzas from '../../../view/Pizzas.vue'
import Postres from '../../../view/Postres.vue'
import Promociones from '../../../view/Promociones.vue'

const routes = [
  {
    path: '/',
    redirect: { name: 'hamburguesas' }
  },
  {
    path: '/hamburguesas',
    name: 'hamburguesas',
    component: Hamburguesas
  },
  {
    path: '/perros',
    name: 'perros',
    component: Perros
  },
  {
    path: '/pizzas',
    name: 'pizzas',
    component: Pizzas
  },
  {
    path: '/bebidas',
    name: 'bebidas',
    component: Bebidas
  },
  {
    path: '/postres',
    name: 'postres',
    component: Postres
  },
  {
    path: '/promociones',
    name: 'promociones',
    component: Promociones
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: Nosotros
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'hamburguesas' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
