export interface SubTask {
  id: string
  title: string
  isCompleted: boolean
  taskId: string
}

export interface Task {
  id: string
  title: string
  description: string
  status: string
  columnId: string
  subTasks: SubTask[]
}

export interface Column {
  id: string
  name: string
  boardId: string
  tasks: Task[]
}

export interface Board {
  id: string
  name: string
  columns?: Column[]
}

export interface BoardsData {
  boards: Board[] | null
  loading: boolean
}
