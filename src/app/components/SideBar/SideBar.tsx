import Image from 'next/image'
import { ThemeToggle } from '../BoardsMenu/ThemeToggle'
import { BoardsData } from '../BoardsMenu/BoardsData'
import CreateNewBoard from '../BoardsMenu/CreateNewBoard'
import { createBoardStateModal, type showModalBoardState } from '@/app/lib/store/createBoardStateModal'

interface SideBarProps {
  setShowSidebar: (showSidebar: boolean) => void
}

export default function SideBar ({ setShowSidebar }: SideBarProps) {
  const { showAddNewBoardModal, setShowAddNewBoardModal } = createBoardStateModal() as showModalBoardState

  const handleCloseSideBar = () => {
    setShowSidebar(false)
  }

  return (
    <aside className='max-[767px]:hidden sticky z-40'>
        <div className='w-[16.25rem] h-[100vh] dark:bg-[#2B2C37] bg-[#fff] pt-1 flex flex-col justify-between'>
          <div className='flex-[1]'>
            <BoardsData />
            <CreateNewBoard setShowAddNewBoardModal={setShowAddNewBoardModal} showAddNewBoardModal={showAddNewBoardModal} />
          </div>
          <div >
            <ThemeToggle />
          </div>
          <footer className='flex gap-2 cursor-pointer p-4 mb-[1rem]' onClick={handleCloseSideBar}>
            <Image
              src={'./icons/icon-hide-sidebar.svg'}
              alt='hide sidebar icon'
              width={0}
              height={0}
              className='h-[1rem] w-[1.25rem]'
            />
            <p>
              Hide Sidebar
            </p>
          </footer>
        </div>
      </aside>
  )
}
