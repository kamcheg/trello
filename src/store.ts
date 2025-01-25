import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import type { IBoard } from '@/types.ts'

export const useStore = defineStore('mainStore', () => {
  const boards = useLocalStorage<IBoard[]>('boards', [
    {
      id: 1,
      title: 'Общее',
      lists: [
        {
          id: 1,
          name: 'Все задачи',
          tasks: [
            {
              id: 33,
              title: 'Прочитать книгу'
            }
          ]
        },
        {
          id: 2,
          name: 'В работе',
          tasks: [
            {
              id: 44,
              title: 'Сделать уборку'
            },
            {
              id: 44,
              title: 'Сходить в магазин'
            }
          ]
        },
      ]
    }
  ])

  function createBoard(title) {}

  function createList(boardId, title) {}

  function createTask(boardId, listId, title) {}

  return { boards, createBoard, createList , createTask }
})
