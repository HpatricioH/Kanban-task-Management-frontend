'use client'

import React, { useState } from 'react'
import IconBoard from '@/app/core/utils/svgIcons'
import { ThemeToggle } from './ThemeToggle'

interface ShowModal {
  setShowModal: (value: boolean) => void
}

const boards = [{
  id: 1,
  name: 'Platform Launch'
}, {
  id: 2,
  name: 'Marketing Plan'
}, {
  id: 3,
  name: 'Roadmap'
}]

export default function BoardsMenu ({ setShowModal }: ShowModal) {
  const [boardSelected, setBoardSelected] = useState<number>(boards.findIndex((board) => board.id === 1))

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement
    if (target.id === 'modal') {
      setShowModal(false)
    }
  }

  const handleClick = (index: number) => {
    setBoardSelected(index)
  }

  return (

    <div
      className='bg-[#20212C] p-4 z-20 fixed inset-0 bg-opacity-60 flex justify-center items-center transition duration-700 ease-in-out'
      id='modal'
      onClick={(e) => { handleClose(e) }}>

      <div className='bg-[#2B2C37] rounded-md flex flex-col gap-4 shadow-lg shadow-[#364e7e40]/25 absolute w-[18rem] top-[4.7rem]'>

        <h1 className='uppercase px-4 pt-4 text-[#828FA3] font-bold text-xs tracking-[0.15rem] leading-[0.938rem]'>
          All Boards {`(${boards.length})`}
        </h1>

        {boards.map((board, index) => (
          <div
            key={board.id}
            className={`w-[15rem] rounded-r-3xl  font-semibold  text-[0.938rem] leading-[1.188rem] 
            ${boardSelected === index ? 'text-[#FFFFFF] bg-[#635FC7]' : 'text-[#828FA3]'}`}
            onClick={() => { handleClick(index) }}
          >
            <div className='flex pl-4 gap-3 py-4'>
              <IconBoard fill={`${boardSelected === index ? '#FFF' : '#828FA3'}`} />
              <p>{board.name}</p>
            </div>
          </div>
        ))}

        <div className='flex gap-3 pl-4 text-[#635FC7] font-semibold text-[0.938rem] leading-[1.188rem]'>
          <div className='pt-[0.20rem]'>
            <IconBoard fill='#635FC7' />
          </div>
          <p>+ Create New Board</p>
        </div>

        <ThemeToggle/>
      </div>
    </div>
  )
}
