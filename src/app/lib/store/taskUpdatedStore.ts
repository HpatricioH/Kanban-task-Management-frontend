import { create } from 'zustand'

interface TaskUpdatedProps {
  taskUpdated: boolean
  setTaskUpdated: (subtaskUpdated: boolean) => void
}

export const taskUpdatedStore = create<TaskUpdatedProps>((set) => ({
  taskUpdated: false,
  setTaskUpdated: (taskUpdated) => { set({ taskUpdated }) }
}))
