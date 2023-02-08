import { createRouter, createWebHashHistory } from 'vue-router'
import Yangzx from '../views/Yangzx.vue'

const routes = [
  {
    path: '/',
    name: 'yangzx',
    component: Yangzx
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
