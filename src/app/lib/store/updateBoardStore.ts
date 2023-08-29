import type React from 'react'
import { type SetStateAction } from 'react'
import { create } from 'zustand'

interface BoardUpdated {
  boardUpdated: SetStateAction<boolean>
  setBoardUpdated: React.Dispatch<React.SetStateAction<boolean>>
}

export const updateBoardStore = create<BoardUpdated>((set) => ({
  boardUpdated: false,
  setBoardUpdated: (boardUpdated) => { set({ boardUpdated }) }
}))
