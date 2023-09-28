import { type Column, type Task } from './api'

export interface AddNewTaskProps {
  setAddTaskModal: (value: boolean) => void
  column: Column[]
}

export interface EditTaskProps {
  setAddTaskModal: (value: boolean) => void
  column: Column[]
  taskSelected?: Task
}

export interface TaskCardsProps {
  col: Column
  taskDetailsModal: boolean
  setTaskDetailsModal: (value: boolean) => void
  setTaskSelected: (value: any) => void
  boardColumn: Column[]
}

export interface TaskDetailsProps {
  setTaskDetailsModal: (value: boolean) => void
  column: Column[]
  taskSelected?: Task
  handleDeleteTask: () => void
  handleEditTask: () => void
}

export interface TaskDetailsMenuModalProps {
  setTaskMenuModal: (value: boolean) => void
  handleDeleteTask: () => void
  handleEditTask: () => void
}
