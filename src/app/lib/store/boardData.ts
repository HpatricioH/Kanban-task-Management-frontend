import { create } from 'zustand'
import { type Column } from '@/app/lib/types/api'

interface Board {
  id: string
  name: string
  columns: Column[]
}

interface BoardDataStore {
  board: Board[]
  setBoard: (board: Board[]) => void
  setTaskAdded?: React.Dispatch<React.SetStateAction<boolean>>
}

export const boardData = create<BoardDataStore>((set) => ({
  board: [],
  setBoard: (board) => { set({ board }) }
}))
