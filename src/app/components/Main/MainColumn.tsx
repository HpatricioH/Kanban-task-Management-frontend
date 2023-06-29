'use client'

import { Button } from '@/app/core/utils/Button'
import { boardData } from '@/app/lib/store/boardData'
import { Columns } from './ccolumns/Columns'

export default function MainColumn () {
  const board = boardData() as any
  const column = board?.board[0]?.columns

  // TODO: add a button to create a new board if the board is not selected or the board is empty

  return (
    <section className='h-auto flex justify-around gap-6 w-full'>
      {column?.length === 0 || board.board.length === 0
        ? (
          <div className='flex flex-col justify-evenly items-center gap-6'>
            <p className='text-center font-bold text-[#828FA3] text-[1.125rem] leading-[1.438rem]'>
              This board is empty. Create a new column to get started.
            </p>
            <Button
              icon='./icons/icon-add-task-mobile.svg'
              buttonStyle='bg-[#635FC7] flex flex-row-reverse justify-center items-center gap-2 w-[10.875rem] h-[3rem] rounded-[5rem] text-[#FFF] font-bold'
            >
              Add New Column
            </Button>
          </div>
          )
        : <Columns column={column}/>}
    </section>
  )
}
