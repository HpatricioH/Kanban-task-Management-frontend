'use client'

import { Button } from '@/app/core/utils/Button'
import Image from 'next/image'
import React, { useState } from 'react'
import BoardsMenu from '../BoardsMenu/BoardsMenu'
import AddNewTask from '../AddNewTask/AddNewTask'
import AddNewBoardModal from '../AddNewBoard/AddNewBoard'
import { usePathname } from 'next/navigation'
import { boardData } from '@/app/lib/store/boardData'

export default function Header () {
  const board = boardData()
  const column = board?.board[0]?.columns
  const name = board?.board[0]?.name
  const [showBoardModal, setShowBoardModal] = useState(false)
  const [showAddTaskModal, setShowAddTaskModal] = useState(false)
  const [showAddNewBoardModal, setShowAddNewBoardModal] = useState(false)
  const id = usePathname().slice(1)
  const getSelectedBoardId = id

  const handleClick = () => {
    !showBoardModal ? setShowBoardModal(true) : setShowBoardModal(false)
  }

  const handleAddTask = () => {
    !showAddTaskModal ? setShowAddTaskModal(true) : setShowAddTaskModal(false)
  }

  return (
    <header>
      <nav className='bg-[#FFF] dark:bg-[#2B2C37] p-4 flex justify-between static'>
        <div className='flex items-center gap-2'>
        <Image
          src='./logos/logo-mobile.svg'
          alt='kanban logo'
          width={0}
          height={0}
          className='h-[1.60rem] w-[1.25rem]'
        />
          <Button
            icon={`${showBoardModal ? './icons/icon-chevron-up.svg' : './icons/icon-chevron-down.svg'}`}
            onClick={handleClick}
            buttonStyle='flex justify-center items-center gap-2 font-bold capitalize'>{getSelectedBoardId ? name : 'Select a Board'}</Button>
        </div>
        <div className='flex justify-center items-center gap-4'>
        {/* if selected board then show task modal */}
          <Button
            icon='./icons/icon-add-task-mobile.svg'
            buttonStyle={`bg-[#635FC7] w-10 h-7 flex justify-center items-center rounded-xl ${!getSelectedBoardId || column?.length === 0 ? 'opacity-25' : 'opacity-100'}`}
            onClick={!getSelectedBoardId || column?.length === 0 ? undefined : handleAddTask}
            />
          <Image
            src='./icons/icon-vertical-ellipsis.svg'
            alt='ellipsis icon'
            width={0}
            height={0}
            className='h-[1.1rem] w-[0.22rem]'
          />
        </div>
      </nav>
      {showBoardModal
        ? <BoardsMenu
        setShowModal={setShowBoardModal}
        setShowAddNewBoardModal={setShowAddNewBoardModal}
        showAddNewBoardModal={showAddNewBoardModal} />
        : null}
      {showAddTaskModal ? <AddNewTask setAddTaskModal= {setShowAddTaskModal} column={column}/> : null}
      {showAddNewBoardModal ? <AddNewBoardModal setAddTaskModal= {setShowAddNewBoardModal} /> : null}

    </header>
  )
}
