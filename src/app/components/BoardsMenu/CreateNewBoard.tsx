import IconBoard from '@/app/core/utils/svgIcons'
import { type ShowModal } from '@/app/lib/types/board'

export default function CreateNewBoard ({ setShowModal, setShowAddNewBoardModal, showAddNewBoardModal }: ShowModal) {
  const handleAddNewBoard = () => {
    if (setShowAddNewBoardModal) {
      !showAddNewBoardModal ? setShowAddNewBoardModal(true) : setShowAddNewBoardModal(false)
    }
    setShowModal?.(false)
  }

  return (
    <div className='flex gap-3 pl-4 text-[#635FC7] font-semibold text-[0.938rem] leading-[1.188rem] md:pt-4'>
      <div className='pt-[0.20rem]'>
        <IconBoard fill='#635FC7' />
      </div>
      <p className='cursor-pointer' onClick={handleAddNewBoard}>+ Create New Board</p>
    </div>
  )
}
