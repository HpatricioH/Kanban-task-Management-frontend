import { type Column, type Task } from '@/app/lib/hooks/useGetBoards'
import Image from 'next/image'

interface TaskDetailsProps {
  setTaskDetailsModal: (value: boolean) => void
  column: Column[]
  taskSelected?: Task
}

export default function TaskDetails ({ setTaskDetailsModal, column, taskSelected }: TaskDetailsProps) {
  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement

    if (target.id === 'task-details') {
      setTaskDetailsModal(false)
    }
  }

  // TODO: add onClick to edit subtask by marking is completed by clicking the checkbox and update the subtask status
  return (
    <section
      className='bg-[#20212C] p-4 z-20 fixed inset-0 bg-opacity-60 flex justify-center items-center transition duration-700 ease-in-out'
      id='task-details'
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => { handleClose(e) }} >

      <div className='bg-[#FFF] dark:bg-[#2B2C37] rounded-md flex flex-col gap-4 shadow-lg shadow-[#364e7e40]/25 absolute w-[18rem] top-[4.7rem] p-4'>
        <div className='flex justify-between items-center'>
          <h2 className='capitalize text-[1.125rem] font-bold leading-normal'>{taskSelected?.title}</h2>
          <Image
              src='./icons/icon-vertical-ellipsis.svg'
              alt='ellipsis icon'
              width={0}
              height={0}
              className={'h-[1.1rem] w-[0.22rem] cursor-pointer'}
              // onClick={!getSelectedBoardId || column?.length === 0 ? undefined : handleShowBoardMenu}
            />
        </div>
        <p className='text-[0.8125rem] leading-[1.4375rem] text-[#828FA3] font-medium'>
          {taskSelected?.description}
        </p>
        <p className='text-[0.75rem] font-bold leading-normal text-[#828FA3]'>
          Subtasks <span>
            ({taskSelected?.subTasks.flatMap((subtask: any) => subtask.isCompleted ? subtask : []).length}
          </span> of {taskSelected?.subTasks.length})
        </p>

        <form className='flex flex-col gap-3 text-[0.75rem]' >
          {taskSelected?.subTasks.map((subtask) => {
            return (
              <div
                key={subtask.id}
                className={`flex items-center gap-3 p-4 rounded h-[3.6875rem] bg-[#20212c] ${subtask.isCompleted ? '' : 'hover:bg-[#635FC7] font-bold'}`}>
                <input
                  type='checkbox'
                  className={`w-4 h-4 border rounded-[0.125rem] ${subtask.isCompleted ? 'checked:bg-[#635FC7]' : 'bg-[#2B2C37] border border-[#828fa340]'}`}
                  checked={subtask.isCompleted} />
                <label
                  className={`text-[0.75rem] font-bold leading-normal ${subtask.isCompleted ? 'text-[#fff] opacity-50 line-through font-bold ' : 'text-[#fff] font-bold'}`}>
                  {subtask.title}
                </label>
              </div>
            )
          })}
          <p className='text-[0.75rem] font-bold leading-normal text-[#828FA3]'> Current Status</p>
          <select name="status" id="status" className="capitalize rounded-[0.25rem] border bg-[#FFF] dark:bg-[#2B2C37] p-2 text-[0.8125rem] placeholder-[#000112] dark:placeholder-[#fff] placeholder-opacity-[0.25] focus:outline-none focus:ring-1 focus:ring-[#828fa340] focus:border-transparent">
            {
              column.map((column: Column) => {
                return (
                  <option value={`${column.name}`} key={column.id}>{column.name}</option>
                )
              })
            }
          </select>
        </form>

      </div>
    </section>
  )
}
