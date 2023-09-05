import { type Column } from '@/app/lib/hooks/useGetBoards'
import { useState } from 'react'
// import EditTask from '../../EditTask/EditTask'
import TaskDetails from '../../TaskDetails/TaskDetails'

export const Columns = ({ column }: any) => {
  // const [showEditTaskModal, setShowEditTaskModal] = useState(false)
  const [taskDetailsModal, setTaskDetailsModal] = useState(false)
  const [taskSelected, setTaskSelected] = useState()
  const boardColumn = column?.flat()?.map((col: Column) => col)

  const handleTaskDetailModal = () => {
    !taskDetailsModal ? setTaskDetailsModal(true) : setTaskDetailsModal(false)
  }

  const handleTaskSelected = (id: string) => {
    const task = boardColumn?.flatMap((col: Column) => col.tasks).find((task: any) => task.id === id)
    setTaskSelected(task)
  }

  const columns = boardColumn?.map((col: Column) => {
    const columnColors: Record<string, string> = {
      Todo: 'bg-[#49C4E5]',
      Done: 'bg-[#67E2AE]',
      Default: 'bg-[#8471F2]'
    }
    const columnColor = columnColors[col.name] || columnColors.Default

    return (
      <div key={col.id} className='inline-block w-[17.5rem] '>
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
              className='bg-[#FFF] z-50 dark:bg-[#2B2C37] rounded-md h-[5.5rem] mb-5 p-4 flex flex-col justify-center gap-2 shadow-md shadow-[#364e7e2e]/25 cursor-pointer'
              onClick={() => { handleTaskSelected(task.id); handleTaskDetailModal() } }
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
    <section className='h-[440px] flex relative gap-6 w-[237vw] '>
      {columns}
      {/* {showEditTaskModal && <EditTask setAddTaskModal={setShowEditTaskModal} column={column} taskSelected={taskSelected}/>} */}
      {taskDetailsModal && <TaskDetails setTaskDetailsModal={setTaskDetailsModal} column={column} taskSelected={taskSelected}/>}
    </section>
  )
}
