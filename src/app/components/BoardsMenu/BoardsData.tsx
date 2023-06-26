import React, { useState } from 'react'
import { useGetBoards, type Board } from '@/app/lib/hooks/useGetBoards'
import IconBoard from '@/app/core/utils/svgIcons'
import { Spinner } from '@/app/core/utils/Spinner'
import { boardData } from '@/app/lib/store/boardData'

export function BoardsData () {
  const { setBoard } = boardData()
  const boardsData = useGetBoards()
  const loading = boardsData?.loading
  const [boardSelected, setBoardSelected] = useState<number | null>(null)

  const handleClick = (index: number, board: Board) => {
    const column = board.columns
    setBoardSelected(index)
    localStorage.setItem('selectedBoardIndex', index.toString())
    localStorage.setItem('selectedBoardColumn', JSON.stringify(column))
    setBoard(board as any)

    // remove selected board
    if (boardSelected === index) {
      setBoardSelected(null)
      localStorage.removeItem('selectedBoardIndex')
      localStorage.removeItem('selectedBoardColumn')
      setBoard([])
    }
  }

  // get selected board from localStorage
  if (boardSelected === null) {
    const index = localStorage.getItem('selectedBoardIndex')
    if (index) {
      setBoardSelected(parseInt(index))
    }
  }

  return (
    <>
      <h1 className='uppercase px-4 pt-4 text-[#828FA3] font-bold text-xs tracking-[0.15rem] leading-[0.938rem]'>
        All Boards {!loading ? `(${boardsData?.boards?.length ?? 0})` : '(0)' }
      </h1>
      {loading
        ? <div className='flex justify-center items-center pt-3'>
          <Spinner />
        </div>
        : boardsData?.boards?.map((board, index) => (
          <div
            key={board.id}
            className={`w-[15rem] rounded-r-3xl  font-semibold  text-[0.938rem] leading-[1.188rem] 
        ${boardSelected === index ? 'text-[#FFFFFF] bg-[#635FC7]' : 'text-[#828FA3]'}`}
            onClick={() => { handleClick(index, board) }}
          >
            <div className='flex pl-4 gap-3 py-4'>
              <IconBoard fill={`${boardSelected === index ? '#FFF' : '#828FA3'}`} />
              <p>{board.name}</p>
            </div>
          </div>
        ))}
    </>
  )
}
