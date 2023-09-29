import { type Column, type Task } from '@/app/lib/types/api'
import { useState } from 'react'
import TaskDetails from '../../TaskDetails/TaskDetails'
import EditTask from '../../EditTask/EditTask'
import DeleteModal from '../../DeleteModal/DeleteModal'
import { usePathname } from 'next/navigation'
import ColumnCards from './ColumnCards'
import EditBoard from '../../EditBoard/EditBoard'

export const Columns = ({ column }: any) => {
  const pathname = usePathname()
  const [taskDetailsModal, setTaskDetailsModal] = useState(false)
  const [taskSelected, setTaskSelected] = useState<Task | undefined>()
  const [editTaskModal, setEditTaskModal] = useState(false)
  const [deleteTaskModal, setDeleteTaskModal] = useState(false)
  const [editBoardModal, setEditBoardModal] = useState(false)
  const boardColumn = column?.flat()?.map((col: Column) => col)
  const taskName = taskSelected?.title
  const taskId = taskSelected?.id
  const id = pathname.slice(1)

  // handle edit task and delete task modals this is used and controlled in the task details menu modal
  const handleEditTask = () => {
    !editTaskModal ? setEditTaskModal(true) : setEditTaskModal(false)
    setTaskDetailsModal(false)
  }

  const handleDeleteTask = () => {
    !deleteTaskModal ? setDeleteTaskModal(true) : setDeleteTaskModal(false)
    setTaskDetailsModal(false)
  }

  const handleEditBoard = () => {
    !editBoardModal ? setEditBoardModal(true) : setEditBoardModal(false)
  }

  return (
    <>
    <section className='h-[440px] flex relative'>
      <div className='flex relative gap-6 p-4 w-[100%] '>
        {<ColumnCards boardColumn={boardColumn} taskDetailsModal={taskDetailsModal} setTaskDetailsModal={setTaskDetailsModal} setTaskSelected={setTaskSelected}/>}
        <div className={`bg-[#FFF] z-10 w-[17.5rem] mt-[2.41rem] dark:bg-[#2B2C37] rounded-md min-h-full p-4 flex flex-col justify-center items-center gap-2 shadow-md shadow-[#364e7e2e]/25 cursor-pointer [&_h3]:hover:text-[#635FC7] ${!id || !boardColumn ? 'hidden' : ''}`} onClick={handleEditBoard}>
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
        {editBoardModal && (
          <EditBoard
            setEditBoardModal={setEditBoardModal}
          />)}
      </div>
    </section>
    </>
  )
}
