import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import type { IBoard, IList, ITask } from '@/types.ts'
import { generateId } from '@/libs/generateId.ts'

export const useStore = defineStore('mainStore', () => {
  const boards = useLocalStorage<IBoard[]>('boards', [
    {
      id: 1,
      title: 'Общее',
      lists: [
        {
          id: 1,
          title: 'Все задачи',
          tasks: [
            {
              id: 33,
              title: 'Прочитать книгу'
            }
          ]
        },
        {
          id: 2,
          title: 'В работе',
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

  function createBoard(title: string) {
    console.log(title)
  }

  function createList(boardId: IBoard['id'], title: string) {
    const currentBoard = boards.value.find(b => b.id === boardId)
    if (!currentBoard) { return }

    currentBoard.lists.push({id: generateId(), title, tasks: []})
  }

  function createTask(boardId: IBoard['id'], listId: IList['id'], title: string) {
    const currentBoard = boards.value.find(b => b.id === boardId)
    if (!currentBoard) { return }

    const currentList = currentBoard.lists.find(l => l.id === listId)
    if (!currentList) { return }

    currentList.tasks.push({id: generateId(), title: title})
  }

  function removeTask(boardId: IBoard['id'], listId: IList['id'], taskId: ITask['id']) {
    const currentBoard = boards.value.find(b => b.id === boardId)
    if (!currentBoard) { return }

    const currentList = currentBoard.lists.find(l => l.id === listId)
    if (!currentList) { return }

    currentList.tasks = currentList.tasks.filter(t => t.id !== taskId)
  }

  return {
    boards,
    createBoard,
    createList,
    createTask,
    removeTask
  }
})
