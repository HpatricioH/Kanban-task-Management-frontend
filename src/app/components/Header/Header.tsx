'use client'

import { Button } from '@/app/core/utils/Button'
import Image from 'next/image'
import React, { useState } from 'react'
import BoardsMenu from '../BoardsMenu/BoardsMenu'
import AddNewTask from '../AddNewTask/AddNewTask'
import { usePathname } from 'next/navigation'

export default function Header () {
  const [showBoardModal, setShowBoardModal] = useState(false)
  const [showAddTaskModal, setShowAddTaskModal] = useState(false)
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
            buttonStyle='flex justify-center items-center gap-2 font-bold capitalize'>platform launch</Button>
        </div>
        <div className='flex justify-center items-center gap-4'>
        {/* if selected board then show task modal */}
          <Button
            icon='./icons/icon-add-task-mobile.svg'
            buttonStyle={`bg-[#635FC7] w-10 h-7 flex justify-center items-center rounded-xl ${!getSelectedBoardId ? 'opacity-25' : 'opacity-100'}`}
            onClick={!getSelectedBoardId ? undefined : handleAddTask}
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
      {showBoardModal ? <BoardsMenu setShowModal={setShowBoardModal} /> : null}
      {showAddTaskModal ? <AddNewTask setAddTaskModal= {setShowAddTaskModal} /> : null}
    </header>
  )
}
