import { create } from 'zustand'

interface BoardData {
  board: []
  setBoard: (board: []) => void
}

export const boardData = create<BoardData>((set) => ({
  board: [],
  setBoard: (board) => { set({ board }) }
}))
