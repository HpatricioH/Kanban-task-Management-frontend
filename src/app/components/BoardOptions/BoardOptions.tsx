
interface BoardSettings {
  setBoardSettingsModal: (value: boolean) => void
  setEditBoardModal: (value: boolean) => void
  setDeleteBoardModal: (value: boolean) => void
  editBoardModal: boolean
}

const boardSettings = [
  {
    name: 'Edit Board'
  },
  {
    name: 'Delete Board'
  }
]

export default function BoardOptions ({ setBoardSettingsModal, setEditBoardModal, editBoardModal, setDeleteBoardModal }: BoardSettings) {
  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement
    if (target.id === 'modal') {
      setBoardSettingsModal(false)
    }
  }

  const handleEditBoard = () => {
    !editBoardModal ? setEditBoardModal(true) : setEditBoardModal(false)
    setBoardSettingsModal(false)
  }

  const handleDeleteBoard = () => {
    !editBoardModal ? setDeleteBoardModal(true) : setDeleteBoardModal(false)
    setBoardSettingsModal(false)
  }

  return (
    <section
      className='bg-[#20212C] p-4 z-20 fixed inset-0 bg-opacity-60 flex justify-center items-center transition duration-700 ease-in-out'
      id='modal'
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => { handleClose(e) }}
    >

      <div className='bg-[#FFF] dark:bg-[#20212C] rounded-md flex flex-col gap-4 shadow-lg shadow-[#364e7e40]/25 absolute w-[18rem] top-[4.7rem] md:top-[4.5rem] md:right-[0.5rem] md:w-[12rem]'>
        <div
          className='w-[15rem] rounded-r-3xl  font-semibold  text-[0.938rem] leading-[1.188rem]'>
          <div className='flex flex-col pl-4 gap-5 py-4 text-[#828FA3] cursor-pointer'>
            {
              boardSettings.map((setting, i) => {
                return (
                  <div
                    key={i}
                    className={`flex gap-3 pl-4 font-semibold text-[0.938rem] leading-[1.188rem] dark:hover:text-[#FFFFFF] hover:text-[#2B2C37] ${setting.name === 'Delete Board' ? 'text-[#EA5555]' : ''}`}>
                    <p onClick={setting.name === 'Edit Board' ? handleEditBoard : handleDeleteBoard}>{setting.name}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}
