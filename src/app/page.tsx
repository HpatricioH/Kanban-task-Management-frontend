'use client'
import AddNewColumn from './components/Main/columns/AddNewColumn'
import ShowSideBarButton from './components/SideBar/ShowSideBarButton'
import SideBar from './components/SideBar/SideBar'
import { type showModalSideBarState, sideBarStateModal } from './lib/store/sideBarStateModal'

export default function Home () {
  const { showSidebar, setShowSidebar } = sideBarStateModal() as showModalSideBarState
  // TODO: add a button to create a new board if the board is not selected or the board is empty

  return (
    <>
      <main className={'min-h-screen bg-[#F4F7FD] dark:bg-[#20212C] overflow-x-scroll relative'}>
        <div className="z-10 text-sm flex justify-center min-h-screen gap-5 ">
          <div>{showSidebar && <SideBar setShowSidebar={setShowSidebar}/>}</div>
          <AddNewColumn />
        </div>
        <ShowSideBarButton setShowSidebar={setShowSidebar} showSidebar={showSidebar}/>
      </main>

    </>
  )
}
