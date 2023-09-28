'use client'

import React from 'react'
import { ThemeToggle } from './ThemeToggle'
import { BoardsData } from './BoardsData'
import CreateNewBoard from './CreateNewBoard'
import { type ShowModal } from '@/app/lib/types/board'

export default function BoardsMenu ({ setShowModal, setShowAddNewBoardModal, showAddNewBoardModal }: ShowModal) {
  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement
    if (target.id === 'modal') {
      setShowModal?.(false)
    }
  }

  return (
    <section
      className='bg-[#20212C] p-4 z-20 fixed inset-0 bg-opacity-60 flex justify-center items-center transition duration-700 ease-in-out'
      id='modal'
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => { handleClose(e) }}>

      <div className='bg-[#FFF] dark:bg-[#2B2C37] rounded-md flex flex-col gap-4 shadow-lg shadow-[#364e7e40]/25 absolute w-[18rem] top-[4.7rem]'>

       <BoardsData/>

        <CreateNewBoard setShowModal={setShowModal} setShowAddNewBoardModal={setShowAddNewBoardModal} showAddNewBoardModal={showAddNewBoardModal}/>

        <ThemeToggle />
      </div>
    </section>
  )
}
