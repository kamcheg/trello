import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('mainStore', () => {
  const value = ref('hello')
  return { value }
})
