import { createWebHistory, createRouter } from 'vue-router'

import Boards from '@/pages/Boards.vue'
import Board from '@/pages/Board.vue'

const routes = [
  { path: '/', component: Boards },
  { path: '/boards/:id', component: Board },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
