'use client'
import { boardData } from '@/app/lib/store/boardData'
import { Columns } from '../components/Main/columns/Columns'
import { useGetBoards } from '../lib/hooks/useGetBoards'
import { useEffect } from 'react'
import AddNewColumn from '../components/Main/columns/AddNewColumn'
import ShowSideBarButton from '../components/SideBar/ShowSideBarButton'
import { type showModalSideBarState, sideBarStateModal } from '@/app/lib/store/sideBarStateModal'
import SideBar from '../components/SideBar/SideBar'

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
  const { showSidebar, setShowSidebar } = sideBarStateModal() as showModalSideBarState

  // TODO: fix this useEffect to maybe use a custom hook or make a single board API call to get the board data
  useEffect(() => {
    if (id) {
      const selectedBoard = boardsData.boards?.find((board) => board.id === id)
      setBoard(selectedBoard ? [selectedBoard] : [] as any)
    }
  }, [setBoard, boardsData.boards, id])

  return (
    <section className={'min-h-screen bg-[#F4F7FD] dark:bg-[#20212C] overflow-x-scroll'}>
      <ShowSideBarButton setShowSidebar={setShowSidebar} showSidebar={showSidebar}/>
      {column?.length === 0
        ? <div className="z-10 text-sm flex justify-center items-center min-h-screen">
          <AddNewColumn />
        </div>

        : <div className="z-10 text-sm ">
          <Columns column={column} />
        </div>
      }
    </section>
  )
}
