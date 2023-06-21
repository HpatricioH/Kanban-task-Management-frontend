
import { useState, useEffect } from 'react'
import { getBoards } from '../../core/services/getBoards'

interface Board {
  id: string
  name: string
  columns: [
    {
      id: string
      name: string
      boardId: string
      tasks: [
        {
          id: string
          title: string
          description: string
          status: string
          columnId: string
          subTasks: [
            {
              id: string
              title: string
              isCompleted: boolean
              taskId: string
            }
          ]
        }
      ]
    }
  ]
}

export interface BoardsTypes {
  boardsData: Board[] | null
  loading: boolean
}

export function useGetBoards () {
  const [boardsData, setBoardsData] = useState<BoardsTypes | null>(null)
  const [loading, setLoading] = useState(false)

  // TODO: make the api call only once and when the the board menu is open dont make the call again
  const getData = async () => {
    try {
      setLoading(true)
      const boards = await getBoards()
      setBoardsData(boards)
    } catch (error: any) {
      throw new Error(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { boardsData, loading }
}
