import { create } from 'zustand'
import { type Column } from '../hooks/useGetBoards'

interface Board {
  id: string
  name: string
  columns: Column[]
}

interface BoardDataStore {
  board: Board[]
  setBoard: (board: Board[]) => void
}

export const boardData = create<BoardDataStore>((set) => ({
  board: [],
  setBoard: (board) => { set({ board }) }
}))
