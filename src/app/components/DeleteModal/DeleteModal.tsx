import { Button } from '@/app/core/utils/Button'

interface DeleteBoardProps {
  setDeleteBoardModal: (value: boolean) => void
}

export default function DeleteModal ({ setDeleteBoardModal }: DeleteBoardProps) {
  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement
    if (target.id === 'deleteModal') {
      setDeleteBoardModal(false)
    }
  }
  return (
    <section id="deleteModal" className='bg-[#20212C] p-4 z-20 fixed inset-0 bg-opacity-60 flex justify-center items-center transition duration-700 ease-in-out'
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => { handleClose(e) }}>
      <div className='bg-[#FFF] dark:bg-[#2B2C37] rounded-md flex flex-col gap-4 shadow-lg shadow-[#364e7e40]/25 absolute w-[18rem] top-[4.7rem] p-4'>
        <h1 className='uppercase text-[#EA5555] font-bold text-xs tracking-[0.15rem] leading-[0.938rem]'>
          Delete this board?
        </h1>
        <div className="text-[#828FA3] text-[0.8125rem] leading-[1.4375rem]">
          <p>Are you sure you want to delete the `Name of the board` board? This action will remove all columns and tasks and cannot be reversed.</p>
          <Button
            icon='./icons/icon-add-task-mobile.svg'
            buttonStyle={'bg-[#EA5555] w-[100%] h-[2.5rem] flex justify-center items-center rounded-xl text-[#fff] font-bold text-[0.8125rem] leading-[1.4375rem] capitalize mt-3 hover:bg-[#FF9898]'}
            imageClassName='hidden'
            type='submit'
          >
            Delete
          </Button>
          <Button
            icon='./icons/icon-add-task-mobile.svg'
            buttonStyle={'dark:bg-[#FFF] bg-[#635FC71A] hover:bg-[#635FC740] w-[100%] h-[2.5rem] flex justify-center items-center rounded-xl text-[#635FC7] font-bold text-[0.8125rem] leading-[1.4375rem] capitalize mt-3'}
            imageClassName='hidden'
            type='submit'
          >
            Cancel
          </Button>
        </div>
      </div>
    </section>
  )
}
