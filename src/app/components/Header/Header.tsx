'use client'

import { Button } from '@/app/core/utils/Button'
import Image from 'next/image'
import React, { useState } from 'react'
import BoardsMenu from '../BoardsMenu/BoardsMenu'

export default function Header () {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    !showModal ? setShowModal(true) : setShowModal(false)
  }

  return (
    <header>
      <nav className='bg-[#FFF] dark:bg-[#2B2C37] p-4 flex justify-between'>
        <div className='flex items-center gap-2'>
        <Image
          src='./logos/logo-mobile.svg'
          alt='kanban logo'
          width={0}
          height={0}
          className='h-[1.60rem] w-[1.25rem]'
        />
          <Button
            icon={`${showModal ? './icons/icon-chevron-up.svg' : './icons/icon-chevron-down.svg'}`}
            onClick={handleClick}
            buttonStyle='flex justify-center items-center gap-2 font-bold capitalize'>platform launch</Button>
        </div>
        <div className='flex justify-center items-center gap-4'>
        {/* TODO: remove opacity-25 when we have a board active. */}
          <Button
            icon='./icons/icon-add-task-mobile.svg'
            buttonStyle='bg-[#635FC7] opacity-25 w-10 h-7 flex justify-center items-center rounded-xl'/>
          <Image
            src='./icons/icon-vertical-ellipsis.svg'
            alt='ellipsis icon'
            width={0}
            height={0}
            className='h-[1.1rem] w-[0.22rem]'
          />
        </div>
      </nav>
      {showModal ? <BoardsMenu setShowModal={setShowModal} /> : null}
    </header>
  )
}
