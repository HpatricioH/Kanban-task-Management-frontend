'use client'
import { DndContext } from '@dnd-kit/core'
import { boardData } from '@/app/lib/store/boardData'
import { Columns } from '../components/Main/columns/Columns'
import { useGetBoards } from '../lib/hooks/useGetBoards'
import { useEffect } from 'react'
import AddNewColumn from '../components/Main/columns/AddNewColumn'

interface Props {
  params: {
    id: string
  }
}

export default function Page ({ params }: Props) {
  const { setBoard } = boardData()
  const boardsData = useGetBoards()
  const board = boardData()
  const column = board?.board[0]?.columns
  const { id } = params

  // TODO: fix this useEffect to maybe use a custom hook or make a single board API call to get the board data
  useEffect(() => {
    if (id) {
      const selectedBoard = boardsData.boards?.find((board) => board.id === id)
      setBoard(selectedBoard ? [selectedBoard] : [] as any)
    }
  }, [setBoard, boardsData.boards, id])

  return (
    <section className={'min-h-screen p-4 bg-[#F4F7FD] dark:bg-[#20212C] overflow-x-scroll'}>
      {column?.length === 0
        ? <div className="z-10 text-sm flex justify-center items-center min-h-screen">
          <AddNewColumn />
        </div>

        : <div className="z-10 text-sm ">
          <DndContext>
            <Columns column={column} />
          </DndContext>
        </div>
      }
    </section>
  )
}
