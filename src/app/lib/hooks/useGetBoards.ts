
import { useState, useEffect } from 'react'
import { getBoards } from '../../core/services/getBoards'

interface Board {
  id: string
  name: string
  columns: []
}

export interface BoardsTypes {
  boardsData: Board[]
  loading: boolean
}

export function useGetBoards () {
  const [boardsData, setBoardsData] = useState<BoardsTypes>()
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
