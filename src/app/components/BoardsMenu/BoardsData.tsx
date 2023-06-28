import React, { useEffect, useState } from 'react'
import { useGetBoards } from '@/app/lib/hooks/useGetBoards'
import IconBoard from '@/app/core/utils/svgIcons'
import { Spinner } from '@/app/core/utils/Spinner'
import { boardData } from '@/app/lib/store/boardData'

export function BoardsData () {
  const { setBoard } = boardData()
  const boardsData = useGetBoards()
  const loading = boardsData?.loading
  const [boardSelected, setBoardSelected] = useState<string | null>(localStorage.getItem('selectedBoardId') ?? null)

  const handleClick = (boardId: string) => {
    if (boardSelected === boardId) {
      setBoardSelected(null)
      localStorage.removeItem('selectedBoardId')
      setBoard([])
    } else {
      setBoardSelected(boardId)
      localStorage.setItem('selectedBoardId', boardId)
    }
  }

  useEffect(() => {
    if (boardSelected) {
      const selectedBoard = boardsData.boards?.find((board) => board.id === boardSelected)
      setBoard(selectedBoard ? [selectedBoard] : [])
    }
  }, [boardSelected, setBoard, boardsData.boards])

  return (
    <>
      <h1 className='uppercase px-4 pt-4 text-[#828FA3] font-bold text-xs tracking-[0.15rem] leading-[0.938rem]'>
        All Boards {!loading ? `(${boardsData.boards?.length ?? 0})` : '(0)'}
      </h1>
      {loading
        ? (
        <div className='flex justify-center items-center pt-3'>
          <Spinner />
        </div>
          )
        : (
            boardsData.boards?.map((board) => (
          <div
            key={board.id}
            className={`w-[15rem] rounded-r-3xl  font-semibold  text-[0.938rem] leading-[1.188rem] 
        ${boardSelected === board.id ? 'text-[#FFFFFF] bg-[#635FC7]' : 'text-[#828FA3]'}`}
            onClick={() => { handleClick(board.id) }}
          >
            <div className='flex pl-4 gap-3 py-4'>
              <IconBoard fill={boardSelected === board.id ? '#FFF' : '#828FA3'} />
              <p>{board.name}</p>
            </div>
          </div>
            ))
          )}
    </>
  )
}
