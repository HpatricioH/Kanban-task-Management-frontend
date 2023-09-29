import { Button } from '@/app/core/utils/Button'
import ShowSideBarButton from '../../SideBar/ShowSideBarButton'
import { type showModalSideBarState, sideBarStateModal } from '@/app/lib/store/sideBarStateModal'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import EditBoard from '../../EditBoard/EditBoard'

export default function AddNewColumn () {
  const pathname = usePathname()
  const [editBoardModal, setEditBoardModal] = useState(false)
  const { showSidebar, setShowSidebar } = sideBarStateModal() as showModalSideBarState
  const id = pathname.slice(1)

  const handleAddNewColumn = () => {
    !editBoardModal ? setEditBoardModal(true) : setEditBoardModal(false)
  }

  return (
    <>
      <div className='absolute top-[-5rem] left-[0rem]'>
        <ShowSideBarButton setShowSidebar={setShowSidebar} showSidebar={showSidebar}/>
      </div>
      <div className='flex flex-col justify-evenly items-center gap-6'>
        <p className='text-center font-bold text-[#828FA3] text-[1.125rem] leading-[1.438rem]'>
          This board is empty. Create a new column to get started.
        </p>
        <Button
          icon='./icons/icon-add-task-mobile.svg'
          buttonStyle={`bg-[#635FC7] flex flex-row-reverse justify-center items-center gap-2 w-[10.875rem] h-[3rem] rounded-[5rem] text-[#FFF] font-bold cursor-pointer ${!id ? 'opacity-25' : 'opacity-100 hover:bg-[#A8A4FF]'}`}
          onClick={!id ? undefined : handleAddNewColumn}
        >
          Add New Column
        </Button>
        {editBoardModal && (
          <EditBoard
            setEditBoardModal={setEditBoardModal}
          />)}
      </div>
    </>
  )
}
