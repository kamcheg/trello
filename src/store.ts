import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import type { IBoard } from '@/types.ts'

export const useStore = defineStore('mainStore', () => {
  const boards = useLocalStorage<IBoard[]>('boards', [
    {
      id: 1,
      lists: [
        {
          id: 1,
          name: '',
          tasks: [
            {
              id: 1,
              title: ''
            }
          ]
        }
      ]
    }
  ])

  function createBoard(title) {}

  function createList(boardId, title) {}

  function createTask(boardId, listId, title) {}

  return { boards, createBoard, createList , createTask }
})
