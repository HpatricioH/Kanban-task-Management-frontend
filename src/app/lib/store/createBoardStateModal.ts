import { create } from 'zustand'

export interface showModalBoardState {
  showAddNewBoardModal: boolean
  setShowAddNewBoardModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const createBoardStateModal = create((set) => ({
  showAddNewBoardModal: false,
  setShowAddNewBoardModal: (showAddNewBoardModal: boolean) => {
    set({ showAddNewBoardModal })
  }
}))
