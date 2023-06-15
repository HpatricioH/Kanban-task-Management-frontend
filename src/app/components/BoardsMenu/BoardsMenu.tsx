import IconBoard from '@/app/core/utils/svgIcons'
import Image from 'next/image'
import React from 'react'

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
  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement
    if (target.id === 'modal') {
      setShowModal(false)
    }
  }

  return (
    <div
      className='bg-[#20212C] p-4 z-20 fixed inset-0 bg-opacity-60 flex justify-center items-center transition duration-700 ease-in-out'
      id='modal'
      onClick={(e) => { handleClose(e) }}>

      <div className='bg-[#2B2C37] rounded-md flex flex-col gap-4 shadow-lg shadow-[#364e7e40]/25 absolute w-[18rem] top-[4.7rem]'>

        <h1 className='uppercase px-4 pt-4 text-[#828FA3] font-bold text-xs tracking-[0.15rem] leading-[0.938rem]'>All Boards (3)</h1>

        {boards.map((board) => (
          <div key={board.id} className='bg-[#635FC7] w-[15rem] rounded-r-3xl text-[#FFFFFF] font-semibold  text-[0.938rem] leading-[1.188rem]'>
            <div className='flex pl-4 gap-2 py-4'>
              <Image
                src='./icons/icon-board.svg'
                alt='board icon'
                width={22}
                height={8}
              />
              <p>{board.name}</p>
            </div>
          </div>
        ))}

        <div className='flex gap-3 pl-4 text-[#635FC7] font-semibold text-[0.938rem] leading-[1.188rem]'>
          <Image
            src='./icons/icon-board-create.svg'
            alt='board icon'
            width={22}
            height={8}
          />
          <p>+ Create New Board</p>
        </div>
        <div className='flex bg-[#20212C] m-4 p-4 rounded-md justify-center items-center gap-6'>
          <Image
            src='./icons/icon-light-theme.svg'
            alt='board icon'
            width={18}
            height={18}
          />
          <label className="flex cursor-pointer select-none items-center">
            <div className="relative">
              <input type="checkbox" id="toggleFour" className="sr-only" />
              <div className="box bg-[#635FC7] block h-6 w-14 rounded-full"></div>
              <div
                className="dot absolute right-1 top-[0.25rem] flex h-[1.05rem] w-[1.05rem] items-center justify-center rounded-full bg-white transition"
              ></div>
            </div>
          </label>
          <Image
            src='./icons/icon-dark-theme.svg'
            alt='board icon'
            width={18}
            height={18}
          />
        </div>
      </div>
    </div>
  )
}
