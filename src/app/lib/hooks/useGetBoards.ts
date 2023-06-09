import { useState, useEffect } from 'react'
import { getBoards } from '../../core/services/getBoards'

export interface SubTask {
  id: string
  title: string
  isCompleted: boolean
  taskId: string
}

export interface Task {
  id: string
  title: string
  description: string
  status: string
  columnId: string
  subTasks: SubTask[]
}

export interface Column {
  id: string
  name: string
  boardId: string
  tasks: Task[]
}

export interface Board {
  id: string
  name: string
  columns?: Column[]
}

export interface BoardsData {
  boards: Board[] | null
  loading: boolean
}

export function useGetBoards (): BoardsData {
  const [boardsData, setBoardsData] = useState<BoardsData>({ boards: null, loading: false })

  // TODO: make the api call only once and when the board menu is open, don't make the call again
  useEffect(() => {
    const fetchData = async () => {
      setBoardsData((prevData) => ({ ...prevData, loading: true }))
      try {
        const boards = await getBoards()
        setBoardsData({ boards, loading: false })
      } catch (error: any) {
        throw new Error(error.message)
      }
    }

    fetchData()
  }, [])

  return boardsData
}
