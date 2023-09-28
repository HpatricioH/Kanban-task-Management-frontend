import { create } from 'zustand'

export const createBoardStateModal = create((set) => ({
  showAddNewBoardModal: false,
  setShowAddNewBoardModal: (showAddNewBoardModal: boolean) => {
    set({ showAddNewBoardModal })
  }
}))
