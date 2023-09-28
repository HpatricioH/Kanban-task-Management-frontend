import { useState, useEffect } from 'react'
import { getBoards } from '../../core/services/getBoards'
import { newTask } from '../store/taskAdded'
import { updateBoardStore } from '../store/updateBoardStore'
import { subtaskUpdated } from '../store/subtaskUpdatedStore'
import { taskUpdatedStore } from '../store/taskUpdatedStore'
import { type BoardsData } from '../types/api'

export function useGetBoards (): BoardsData {
  const { taskAdded, setTaskAdded } = newTask()
  const { taskUpdated, setTaskUpdated } = taskUpdatedStore()
  const { subtaskUpdate, setSubtaskUpdate } = subtaskUpdated()
  const { boardUpdated, setBoardUpdated } = updateBoardStore()
  const [boardsData, setBoardsData] = useState<BoardsData>({ boards: null, loading: false })

  useEffect(() => {
    const fetchData = async () => {
      setBoardsData((prevData) => ({ ...prevData, loading: true }))
      try {
        const boards = await getBoards()
        setBoardsData({ boards, loading: false })

        // This makes the store to reset the taskAdded state to false
        if (taskAdded) {
          setTaskAdded(false)
        }

        if (boardUpdated) {
          setBoardUpdated(false)
        }

        if (subtaskUpdate) {
          setSubtaskUpdate(false)
        }
        if (taskUpdated) {
          setTaskUpdated(false)
        }
      } catch (error: any) {
        throw new Error(error.message)
      }
    }
    fetchData()
  }, [taskAdded, setTaskAdded, boardUpdated, setBoardUpdated, subtaskUpdate, setSubtaskUpdate, taskUpdated, setTaskUpdated])

  return { ...boardsData }
}
