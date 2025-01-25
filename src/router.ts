import { createWebHistory, createRouter } from 'vue-router'

import PageBoards from '@/pages/PageBoards.vue'
import PageBoard from '@/pages/PageBoard.vue'

const routes = [
  { path: '/', component: PageBoards },
  { path: '/boards/:id', component: PageBoard },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
