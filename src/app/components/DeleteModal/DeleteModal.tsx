import { deleteBoard } from '@/app/core/services/deleteBoard'
import { deleteTasks } from '@/app/core/services/deleteTaks'
import { Button } from '@/app/core/utils/Button'
import { taskUpdatedStore } from '@/app/lib/store/taskUpdatedStore'
import { usePathname, useRouter } from 'next/navigation'
interface DeleteBoardProps {
  setDeleteBoardModal?: (value: boolean) => void
  setDeleteTaskModal?: (value: boolean) => void
  taskId?: string
  typeOfForm?: string
  boardName?: string
  taskName?: string
}

export default function DeleteModal ({ setDeleteBoardModal, taskId, typeOfForm, setDeleteTaskModal, boardName, taskName }: DeleteBoardProps) {
  const { setTaskUpdated } = taskUpdatedStore()
  const id = usePathname().slice(1)
  const router = useRouter()

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement
    if (target.id === 'deleteModal') {
      setDeleteBoardModal?.(false)
      setDeleteTaskModal?.(false)
    }
  }

  const handleDelete = () => {
    if (typeOfForm !== 'Delete Task') {
      deleteBoard(id)
      router.push('/')
      setDeleteBoardModal?.(false)
    } else {
      deleteTasks(taskId ?? '')
      setDeleteTaskModal?.(false)
      setTaskUpdated(true)
    }
  }

  return (
    <section id="deleteModal" className='bg-[#20212C] p-4 z-20 fixed inset-0 bg-opacity-60 flex justify-center items-center transition duration-700 ease-in-out'
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => { handleClose(e) }}>
      <div className='bg-[#FFF] dark:bg-[#2B2C37] rounded-md flex flex-col gap-4 shadow-lg shadow-[#364e7e40]/25 absolute w-[18rem] top-[4.7rem] p-4'>
        <h1 className='uppercase text-[#EA5555] font-bold text-xs tracking-[0.15rem] leading-[0.938rem]'>
          {typeOfForm === 'Delete Task' ? 'Delete this task?' : 'Delete this board?'}
        </h1>
        <div className="text-[#828FA3] text-[0.8125rem] leading-[1.4375rem]">
          <p>
            {typeOfForm === 'Delete Task'
              ? `Are you sure you want to delete the '${taskName ?? ''}' task and its subtasks? This action cannot be reversed.`
              : `Are you sure you want to delete the '${boardName ?? ''}' board? This action will remove all columns and tasks and cannot be reversed.`}
          </p>
          <Button
            icon='./icons/icon-add-task-mobile.svg'
            buttonStyle={'bg-[#EA5555] w-[100%] h-[2.5rem] flex justify-center items-center rounded-xl text-[#fff] font-bold text-[0.8125rem] leading-[1.4375rem] capitalize mt-3 hover:bg-[#FF9898]'}
            imageClassName='hidden'
            type='submit'
            onClick={handleDelete}
          >
            Delete
          </Button>
          <Button
            icon='./icons/icon-add-task-mobile.svg'
            buttonStyle={'dark:bg-[#FFF] bg-[#635FC71A] hover:bg-[#635FC740] w-[100%] h-[2.5rem] flex justify-center items-center rounded-xl text-[#635FC7] font-bold text-[0.8125rem] leading-[1.4375rem] capitalize mt-3'}
            imageClassName='hidden'
            type='submit'
            onClick={() => setDeleteBoardModal?.(false) ?? setDeleteTaskModal?.(false)}
          >
            Cancel
          </Button>
        </div>
      </div>
    </section>
  )
}
