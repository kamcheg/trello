export interface ITask {
  id: number
  title: string
}

export interface IList {
  id: number
  title: string
  tasks: ITask[]
}

export interface IBoard {
  id: number
  title: string
  lists: IList[]
}
