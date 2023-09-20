import { type Column, type Task } from '@/app/lib/hooks/useGetBoards'
import Image from 'next/image'
import { Subtask } from './Subtask'
import { useState } from 'react'
import TaskDetailsMenuModal from './TaskDetailsMenuModal'

interface TaskDetailsProps {
  setTaskDetailsModal: (value: boolean) => void
  column: Column[]
  taskSelected?: Task
  handleDeleteTask: () => void
  handleEditTask: () => void
}

export default function TaskDetails ({ setTaskDetailsModal, column, taskSelected, handleDeleteTask, handleEditTask }: TaskDetailsProps) {
  const [taskMenuModal, setTaskMenuModal] = useState(false)

  const task = column?.map((column) => column.tasks).flat().find((task) => task.id === taskSelected?.id)
  const subtasks = task?.subTasks

  const handleTaskMenuModal = () => {
    !taskMenuModal ? setTaskMenuModal(true) : setTaskMenuModal(false)
  }

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement

    if (target.id === 'task-details') {
      setTaskDetailsModal(false)
    }
  }

  return (
    <section
      className='bg-[#20212C] p-4 z-10 fixed inset-0 bg-opacity-60 flex justify-center items-center transition duration-700 ease-in-out'
      id='task-details'
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        handleClose(e)
      }}
    >
      <div className='bg-[#FFF] dark:bg-[#2B2C37] rounded-md flex flex-col gap-4 shadow-lg shadow-[#364e7e40]/25 absolute w-[18rem] top-[4.7rem] p-4 md:w-[30rem] md:p-6'>
        <div className='flex justify-between items-center'>
          <h2 className='capitalize text-[1.125rem] font-bold leading-normal'>{taskSelected?.title}</h2>
          <Image
            src='./icons/icon-vertical-ellipsis.svg'
            alt='ellipsis icon'
            width={0}
            height={0}
            className={'h-[1.1rem] w-[0.22rem] cursor-pointer'}
            onClick={() => { handleTaskMenuModal() }}
          />
        </div>
        <p className='text-[0.8125rem] leading-[1.4375rem] text-[#828FA3] font-medium'>
          {taskSelected?.description}
        </p>
        <p className='text-[0.75rem] font-bold leading-normal text-[#828FA3]'>
          Subtasks{' '}
          <span>
            ({subtasks?.filter((subtask) => subtask.isCompleted).length} of {taskSelected?.subTasks.length})
          </span>
        </p>

        <form className='flex flex-col gap-3 text-[0.75rem]'>
          {taskSelected?.subTasks.map((subtask) => (
            <Subtask key={subtask.id} subtask={subtask} />
          ))}
          <p className='text-[0.75rem] font-bold leading-normal text-[#828FA3]'> Current Status</p>
          <select
            name='status'
            id='status'
            className='capitalize rounded-[0.25rem] border bg-[#FFF] dark:bg-[#2B2C37] p-2 text-[0.8125rem] placeholder-[#000112] dark:placeholder-[#fff] placeholder-opacity-[0.25] focus:outline-none focus:ring-1 focus:ring-[#828fa340] focus:border-transparent'
          >
            {column.map((column: Column) => (
              <option value={`${column.name}`} key={column.id}>
                {column.name}
              </option>
            ))}
          </select>
        </form>
      </div>
      {taskMenuModal && (<TaskDetailsMenuModal setTaskMenuModal={setTaskMenuModal} handleDeleteTask={handleDeleteTask} handleEditTask={handleEditTask} />)}
    </section>
  )
}
