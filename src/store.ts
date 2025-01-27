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
              id: 144,
              title: 'Сходить в магазин'
            }
          ]
        },
      ]
    }
  ])

  function createBoard(title: string) {
    boards.value.push({
      id: generateId(),
      title: title,
      lists: []
    })
  }

  function onDeleteBoard(boardId: IBoard['id']) {
    boards.value = boards.value.filter(b => b.id !== boardId)
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

  function changeListTitle(boardId: IBoard['id'], listId: IList['id'], title: string) {
    const currentBoard = boards.value.find(b => b.id === boardId)
    if (!currentBoard) { return }

    const currentList = currentBoard.lists.find(l => l.id === listId)
    if (!currentList) { return }

    currentList.title = title
  }

  function removeList(boardId: IBoard['id'], listId: IList['id']) {
    const currentBoard = boards.value.find(b => b.id === boardId)
    if (!currentBoard) { return }

    currentBoard.lists = currentBoard.lists.filter(l => l.id !== listId)
  }

  return {
    boards,
    createBoard,
    onDeleteBoard,
    createList,
    createTask,
    removeTask,
    changeListTitle,
    removeList
  }
})
