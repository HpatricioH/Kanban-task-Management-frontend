import { Button } from '@/app/core/utils/Button'
import Image from 'next/image'
import React from 'react'

export default function Header () {
  return (
    <header>
      <nav className='bg-[#2B2C37] p-4 flex justify-between'>
        <div className='flex items-center gap-2'>
        <Image
          src='./logos/logo-mobile.svg'
          alt='kanban logo'
          width={0}
          height={0}
          className='h-[1.60rem] w-[1.25rem]'
        />
          <p className='capitalize font-semibold'>platform launch</p>
          <Image
            src='./icons/icon-chevron-down.svg'
            alt='chevron down icon'
            width={0}
            height={0}
            className='h-[0.65rem] w-[0.65rem]'
          />
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
    </header>
  )
}
