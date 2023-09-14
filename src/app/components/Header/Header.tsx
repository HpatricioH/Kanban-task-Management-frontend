'use client'

import { Button } from '@/app/core/utils/Button'
import Image from 'next/image'
import React, { useState } from 'react'
import BoardsMenu from '../BoardsMenu/BoardsMenu'
import AddNewTask from '../AddNewTask/AddNewTask'
import AddNewBoardModal from '../AddNewBoard/AddNewBoard'
import { usePathname } from 'next/navigation'
import { boardData } from '@/app/lib/store/boardData'
import BoardOptions from '../BoardOptions/BoardOptions'
import EditBoard from '../EditBoard/EditBoard'
import DeleteModal from '../DeleteModal/DeleteModal'
import { useTheme } from 'next-themes'

export default function Header () {
  const { theme } = useTheme()
  const board = boardData()
  const [showBoardModal, setShowBoardModal] = useState(false)
  const [showAddTaskModal, setShowAddTaskModal] = useState(false)
  const [showAddNewBoardModal, setShowAddNewBoardModal] = useState(false)
  const [boardSettingsModal, setBoardSettingsModal] = useState(false)
  const [editBoardModal, setEditBoardModal] = useState(false)
  const [deleteBoardModal, setDeleteBoardModal] = useState(false)
  const column = board?.board[0]?.columns
  const name = board?.board[0]?.name
  const boardName = board?.board[0]?.name
  const id = usePathname().slice(1)
  const getSelectedBoardId = id

  const handleClick = () => {
    !showBoardModal ? setShowBoardModal(true) : setShowBoardModal(false)
  }

  const handleAddTask = () => {
    !showAddTaskModal ? setShowAddTaskModal(true) : setShowAddTaskModal(false)
  }

  const handleShowBoardMenu = () => {
    !boardSettingsModal ? setBoardSettingsModal(true) : setBoardSettingsModal(false)
  }

  return (
    <header>
      <nav className='bg-[#FFF] dark:bg-[#2B2C37] p-4 flex justify-between static md:h-[5rem] md:p-0 md:px-4 md:border-b md:border-[#3E3F4E]'>
        <div className='max-[767px]:hidden border-r border-[#3E3F4E] flex justify-center items-center pr-4'>
            <Image
             src={theme === 'light' || theme === undefined ? './logos/logo-dark.svg' : './logos/logo-light.svg'}
             alt='kanban logo'
             width={0}
              height={0}
              className='w-[9.533rem] h-[1.25rem]'
            />
        </div>
        <div className='flex items-center gap-2 md:flex-[1] md:pl-4'>
          <Image
            src='./logos/logo-mobile.svg'
            alt='kanban logo'
            width={0}
            height={0}
            className='h-[1.60rem] w-[1.25rem] md:hidden'
          />

          <Button
            icon={`${showBoardModal ? './icons/icon-chevron-up.svg' : './icons/icon-chevron-down.svg'}`}
            onClick={handleClick}
            imageClassName='md:hidden'
            buttonStyle='flex justify-center items-center gap-2 font-bold capitalize'>{getSelectedBoardId ? name : 'Select a Board'}
            </Button>
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
            className={`h-[1.1rem] w-[0.22rem] cursor-pointer ${!getSelectedBoardId || column?.length === 0 ? 'opacity-25' : 'opacity-100'}`}
            onClick={!getSelectedBoardId || column?.length === 0 ? undefined : handleShowBoardMenu}
          />
        </div>
      </nav>
      {showBoardModal && (
        <BoardsMenu
          setShowModal={setShowBoardModal}
          setShowAddNewBoardModal={setShowAddNewBoardModal}
          showAddNewBoardModal={showAddNewBoardModal} />
      )}
      {showAddTaskModal && (
        <AddNewTask
          setAddTaskModal={setShowAddTaskModal}
          column={column} />
      )}
      {showAddNewBoardModal && (
        <AddNewBoardModal
          setAddTaskModal={setShowAddNewBoardModal} />
      )}
      {boardSettingsModal && (
        <BoardOptions
          setBoardSettingsModal={setBoardSettingsModal}
          setEditBoardModal={setEditBoardModal}
          editBoardModal={editBoardModal}
          setDeleteBoardModal={setDeleteBoardModal} />
      )}
      {editBoardModal && (
        <EditBoard
          setEditBoardModal={setEditBoardModal} />
      )}
      {deleteBoardModal && (
        <DeleteModal
          setDeleteBoardModal={setDeleteBoardModal}
          boardName={boardName} />
      )}
    </header>
  )
}
