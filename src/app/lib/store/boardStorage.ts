import { create } from 'zustand'

interface BoardStoreState {
  selectedBoardId: string | null
  setSelectedBoardId: (boardId: string) => void
}

export const useBoardStore = create<BoardStoreState>((set) => ({
  selectedBoardId: null,

  setSelectedBoardId: (boardId) => {
    set({ selectedBoardId: boardId })
  }
}))
