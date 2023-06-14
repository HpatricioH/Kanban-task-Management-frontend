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

      <div className='bg-[#2B2C37] rounded-md flex flex-col gap-4 w-full'>

        <h1 className='uppercase px-4 pt-4'>All Boards (3)</h1>
        {boards.map((board) => (
          <div key={board.id} className='bg-[#635FC7] w-[16rem] rounded-r-3xl text-[#FFFFFF] font-semibold'>
            <div className='flex pl-4 gap-2 py-4'>
              <Image
                src='./icons/icon-board.svg'
                alt='board icon'
                width={18}
                height={18}
              />
              <p>{board.name}</p>
            </div>
          </div>
        ))}
        <div className='flex gap-3 pl-4 text-[#635FC7] font-semibold'>
          <Image
            src='./icons/icon-board-create.svg'
            alt='board icon'
            width={18}
            height={18}
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
 <button
            id="theme-toggle"
            type="button"
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200  rounded-lg text-sm p-2.5"
          ></button>
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
