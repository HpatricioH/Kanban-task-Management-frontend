'use client'

import { Button } from '@/app/core/utils/Button'
import { boardData } from '@/app/lib/store/boardData'
import { get } from 'http'

export default function MainColumn () {
  const { board } = boardData()
  const { columns, id } = board as any
  const boardEmpty = localStorage.getItem('selectedBoard')
  const getStorageIndex = localStorage.getItem('selectedBoardIndex')

  console.log(boardEmpty)
  console.log(id)
  console.log(boardEmpty === id)

  // if (getStorageIndex) {
  //   console.log(columns)
  // }

  // TODO: add a button to create a new board if the board is not selected or the board is empty

  return (
    <section className='h-auto flex flex-col justify-evenly items-center gap-6'>
      {columns?.length === 0 || getStorageIndex === null
        ? (
        <>
          <p className='text-center font-bold text-[#828FA3] text-[1.125rem] leading-[1.438rem]'>
            This board is empty. Create a new column to get started.
          </p>
          <Button
            icon='./icons/icon-add-task-mobile.svg'
            buttonStyle='bg-[#635FC7] flex flex-row-reverse justify-center items-center gap-2 w-[10.875rem] h-[3rem] rounded-[5rem] text-[#FFF] font-bold'
          >
            Add New Column
          </Button>
        </>
          )
        : null}
    </section>
  )
}
