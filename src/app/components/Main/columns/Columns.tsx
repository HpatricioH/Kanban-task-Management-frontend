import { type Column, type Task } from '@/app/lib/hooks/useGetBoards'
import { useState } from 'react'
import TaskDetails from '../../TaskDetails/TaskDetails'
import EditTask from '../../EditTask/EditTask'
import DeleteModal from '../../DeleteModal/DeleteModal'
import { usePathname } from 'next/navigation'

// TODO: refactor this component maybe separate the board column and the Columns component to make it more readable
export const Columns = ({ column }: any) => {
  const pathname = usePathname()
  const [taskDetailsModal, setTaskDetailsModal] = useState(false)
  const [taskSelected, setTaskSelected] = useState<Task | undefined>()
  const [editTaskModal, setEditTaskModal] = useState(false)
  const [deleteTaskModal, setDeleteTaskModal] = useState(false)
  const boardColumn = column?.flat()?.map((col: Column) => col)
  const taskName = taskSelected?.title
  const taskId = taskSelected?.id
  const id = pathname.slice(1)

  const handleTaskDetailModal = () => {
    !taskDetailsModal ? setTaskDetailsModal(true) : setTaskDetailsModal(false)
  }

  const handleTaskSelected = (id: string) => {
    const task = boardColumn?.flatMap((col: Column) => col.tasks).find((task: any) => task.id === id)
    setTaskSelected(task)
  }

  // handle edit task and delete task modals this is used and controlled in the task details menu modal
  const handleEditTask = () => {
    !editTaskModal ? setEditTaskModal(true) : setEditTaskModal(false)
    setTaskDetailsModal(false)
  }

  const handleDeleteTask = () => {
    !deleteTaskModal ? setDeleteTaskModal(true) : setDeleteTaskModal(false)
    setTaskDetailsModal(false)
  }

  const columns = boardColumn?.map((col: Column) => {
    const columnColors: Record<string, string> = {
      Todo: 'bg-[#49C4E5]',
      Done: 'bg-[#67E2AE]',
      Default: 'bg-[#8471F2]'
    }
    const columnColor = columnColors[col.name] || columnColors.Default

    return (
      <div key={col.id} className='inline-block w-[17.5rem]'>
        <div className='flex'>
          <div className={`rounded-full h-[0.938rem] w-[0.938rem] ${columnColor}`} />
          <p className='uppercase pl-2 pb-5 text-[#828FA3] font-bold text-[0.75rem] tracking-[0.15rem] leading-normal'>
            {col.name} ({col.tasks.length})
          </p>
        </div>
        <div>
          {col.tasks.flatMap((task: any) => (
            <div
              key={task.id}
              className='bg-[#FFF] z-50 dark:bg-[#2B2C37] rounded-md h-[5.5rem] mb-5 p-4 flex flex-col justify-center gap-2 shadow-md shadow-[#364e7e2e]/25 cursor-pointer [&_h3]:hover:text-[#635FC7]'
              onClick={() => { handleTaskSelected(task.id); handleTaskDetailModal() }}
            >
              <h3 className='text-[#000112] dark:text-white text-[0.9375rem] font-bold leading-normal'>{task.title}</h3>
              <p className='text-[0.75rem] font-bold leading-normal text-[#828FA3]'>
                <span>
                  {task.subTasks.flatMap((subtask: any) => subtask.isCompleted ? subtask : []).length}
                </span> of {task.subTasks.length} Subtasks
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  })

  return (
    <>
    <section className='h-[440px] flex relative'>
      <div className='flex relative gap-6 p-4 w-[100%] '>
        {columns}
        <div className={`bg-[#FFF] z-10 w-[17.5rem] mt-[2.41rem] dark:bg-[#2B2C37] rounded-md min-h-full p-4 flex flex-col justify-center items-center gap-2 shadow-md shadow-[#364e7e2e]/25 cursor-pointer [&_h3]:hover:text-[#635FC7] ${!id || !boardColumn ? 'hidden' : ''}`}>
          <h3>+ New Column</h3>
        </div>
        {taskDetailsModal && (
          <TaskDetails
            setTaskDetailsModal={setTaskDetailsModal}
            column={column}
            taskSelected={taskSelected}
            handleEditTask={handleEditTask}
            handleDeleteTask={handleDeleteTask} />)}
        {editTaskModal && (
          <EditTask
            setAddTaskModal={setEditTaskModal}
            column={column}
            taskSelected={taskSelected} />)}
        {deleteTaskModal && (
          <DeleteModal
            setDeleteTaskModal={setDeleteTaskModal}
            typeOfForm="Delete Task"
            taskName={taskName}
            taskId={taskId} />
        )}
      </div>
    </section>
    </>
  )
}
