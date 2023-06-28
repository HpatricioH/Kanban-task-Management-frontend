import { create } from 'zustand'

interface Board {
  id: string
  name: string
}

interface BoardDataStore {
  board: Board[]
  setBoard: (board: Board[]) => void
}

export const boardData = create<BoardDataStore>((set) => ({
  board: [],
  setBoard: (board) => { set({ board }) }
}))
