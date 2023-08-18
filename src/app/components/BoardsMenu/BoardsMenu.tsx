'use client'

import React from 'react'
import IconBoard from '@/app/core/utils/svgIcons'
import { ThemeToggle } from './ThemeToggle'
import { BoardsData } from './BoardsData'

interface ShowModal {
  setShowModal: (value: boolean) => void
  showAddNewBoardModal?: boolean
  setShowAddNewBoardModal?: (value: boolean) => void
}

export default function BoardsMenu ({ setShowModal, setShowAddNewBoardModal, showAddNewBoardModal }: ShowModal) {
  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement
    if (target.id === 'modal') {
      setShowModal(false)
    }
  }

  const handleAddNewBoard = () => {
    if (setShowAddNewBoardModal) {
      !showAddNewBoardModal ? setShowAddNewBoardModal(true) : setShowAddNewBoardModal(false)
    }
    setShowModal(false)
  }

  return (
    <section
      className='bg-[#20212C] p-4 z-20 fixed inset-0 bg-opacity-60 flex justify-center items-center transition duration-700 ease-in-out'
      id='modal'
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => { handleClose(e) }}>

      <div className='bg-[#FFF] dark:bg-[#2B2C37] rounded-md flex flex-col gap-4 shadow-lg shadow-[#364e7e40]/25 absolute w-[18rem] top-[4.7rem]'>

       <BoardsData/>

        <div className='flex gap-3 pl-4 text-[#635FC7] font-semibold text-[0.938rem] leading-[1.188rem]'>
          <div className='pt-[0.20rem]'>
            <IconBoard fill='#635FC7' />
          </div>
          <p className='cursor-pointer' onClick={handleAddNewBoard}>+ Create New Board</p>
        </div>

        <ThemeToggle />
      </div>
    </section>
  )
}
