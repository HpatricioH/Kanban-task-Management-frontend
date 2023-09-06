import { create } from 'zustand'

interface SubtaskUpdated {
  subtaskUpdate: boolean
  setSubtaskUpdate: (subtaskUpdated: boolean) => void
}

export const subtaskUpdated = create<SubtaskUpdated>((set) => ({
  subtaskUpdate: false,
  setSubtaskUpdate: (subtaskUpdate) => { set({ subtaskUpdate }) }
}))
