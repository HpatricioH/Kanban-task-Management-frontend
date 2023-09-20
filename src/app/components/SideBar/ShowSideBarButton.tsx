import Image from 'next/image'

interface ShowSideBarButtonProps {
  setShowSidebar: (showSidebar: boolean) => void
  showSidebar: boolean
}

export default function ShowSideBarButton ({ setShowSidebar, showSidebar }: ShowSideBarButtonProps) {
  const handleShowSidebar = () => {
    !showSidebar ? setShowSidebar(true) : setShowSidebar(false)
  }

  return (
    <div className={`max-[767px]:hidden absolute top-[43rem] w-[3.5rem] h-[3rem] bg-[#635FC7] rounded-r-3xl flex justify-center items-center cursor-pointer ${showSidebar ? 'hidden' : ''}`} onClick={handleShowSidebar}>
      <Image
        src='./icons/icon-show-sidebar.svg'
        alt='show sidebar icon'
        width={0}
        height={0}
        className='h-[1rem] w-[1.25rem] '
      />
    </div>
  )
}
