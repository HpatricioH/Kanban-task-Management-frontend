import { create } from 'zustand'

export interface showModalSideBarState {
  showSidebar: boolean
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

export const sideBarStateModal = create((set) => ({
  showSidebar: false,
  setShowSidebar: (showSidebar: boolean) => {
    set({ showSidebar })
  }
}))
