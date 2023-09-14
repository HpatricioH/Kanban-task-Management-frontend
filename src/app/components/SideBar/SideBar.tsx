import Image from 'next/image'
import { ThemeToggle } from '../BoardsMenu/ThemeToggle'
import { BoardsData } from '../BoardsMenu/BoardsData'

interface SideBarProps {
  setShowSidebar: (showSidebar: boolean) => void
}

export default function SideBar ({ setShowSidebar }: SideBarProps) {
  const handleCloseSideBar = () => {
    setShowSidebar(false)
  }

  return (
    <aside className='max-[767px]:hidden'>
        <div className='w-[11.60rem] h-[100vh] dark:bg-[#2B2C37] bg-[#fff] pt-1'>
          <BoardsData />
          <ThemeToggle />
          <div className='flex gap-2 cursor-pointer' onClick={handleCloseSideBar}>
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
          </div>
        </div>
      </aside>
  )
}
