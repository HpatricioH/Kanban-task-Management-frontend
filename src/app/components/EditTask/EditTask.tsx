import { type Task, type Column } from '@/app/lib/hooks/useGetBoards'
import { useState } from 'react'
import { newTask } from '@/app/lib/store/taskAdded'
import Form from '../form/Form'
import { updateTask } from '@/app/core/services/updateTask'
import { updateSubtask } from '@/app/core/services/updateSubtask'

interface EditTaskProps {
  setAddTaskModal: (value: boolean) => void
  column: Column[]
  taskSelected?: Task
}

export default function EditTask ({ setAddTaskModal, column, taskSelected }: EditTaskProps) {
  const [titleFormValidation, setTitleFormValidation] = useState(false)
  const [descriptionFormValidation, setDescriptionFormValidation] = useState(false)
  const { setTaskAdded } = newTask()
  const typeOfForm = 'Edit Task'
  const { id: taskId } = taskSelected ?? {}

  // close modal when clicking outside of modal
  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement

    if (target.id === 'addTaskModal') {
      setAddTaskModal(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // get all form data
    const form = e.currentTarget
    const formData = new FormData(form)
    const formEntries = Array.from(formData.entries())
    const subTasks = formEntries.filter(([key]) => key === 'subtask')
    const { title, description, status } = Object.fromEntries(formData)

    const columnIdUpdate = column.find((column) => column.name === status)?.id

    // form validations for title and description
    if (!title) {
      setTitleFormValidation(true)
    } else {
      setTitleFormValidation(false)
    }

    if (!description) {
      setDescriptionFormValidation(true)
    } else {
      setDescriptionFormValidation(false)
    }

    // if title and description are not empty, update task
    if (title && description) {
      const getInputtedSubtasks = subTasks.map(([_, value]) => ({ title: value }))
      // assign subtasks id to getInputtedSubtasks array
      const updateSubtasksId = taskSelected?.subTasks.map((subtask) => subtask.id)

      const subtasksToBeUpdated = getInputtedSubtasks.map((subtask, index) => {
        return {
          ...subtask,
          id: updateSubtasksId?.[index]
        }
      })

      subtasksToBeUpdated.map(async (subtask) => {
        if (subtask.title) {
          await updateSubtask({ taskId: taskId ?? '', title: subtask.title, id: subtask.id ?? '', isCompleted: false })
        }
      })

      await updateTask({ title, description, status, id: taskId ?? '', columnId: columnIdUpdate })

      form.reset()
      setTaskAdded(true)
      setAddTaskModal(false)
    } else {
      console.log('error')
    }
  }

  return (
    <div
      className='bg-[#20212C] p-4 z-20 fixed inset-0 bg-opacity-60 flex justify-center items-center transition duration-700 ease-in-out'
      id='addTaskModal'
      onClick={(e) => { handleClose(e) }}>

      <div className='bg-[#FFF] dark:bg-[#2B2C37] rounded-md flex flex-col gap-4 shadow-lg shadow-[#364e7e40]/25 absolute w-[18rem] top-[4.7rem] p-4'>
        <h2 className='capitalize text-[1.125rem] font-bold leading-normal'>Edit Task</h2>

        <Form
          onSubmit={(e) => { handleSubmit(e) } }
          titleFormValidation={titleFormValidation}
          descriptionFormValidation={descriptionFormValidation}
          column={column}
          typeOfForm={typeOfForm}
          taskSelected={taskSelected}
        />
      </div>
    </div>
  )
}
