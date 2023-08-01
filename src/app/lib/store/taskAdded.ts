import type React from 'react'
import { type SetStateAction } from 'react'
import { create } from 'zustand'

interface TaskAdded {
  taskAdded: SetStateAction<boolean>
  setTaskAdded: React.Dispatch<React.SetStateAction<boolean>>
}

export const newTask = create<TaskAdded>((set) => ({
  taskAdded: false,
  setTaskAdded: (taskAdded) => { set({ taskAdded }) }
}))
