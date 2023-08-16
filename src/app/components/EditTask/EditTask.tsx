import { type Column } from '@/app/lib/hooks/useGetBoards'
import { useState } from 'react'
import { newTask } from '@/app/lib/store/taskAdded'
import Form from '../form/Form'
import { updateTask } from '@/app/core/services/updateTask'
import { updateSubtask } from '@/app/core/services/updateSubtask'
import addSubTasks from '@/app/core/services/addSubTasks'

interface EditTaskProps {
  setAddTaskModal: (value: boolean) => void
  column: Column[]
  taskSelected?: {
    columnId: string
    description: string
    id: string
    status: string
    subTasks: Array<{ id: string, isCompleted: boolean, taskId: string, title: string }>
    title: string
  }
}

export default function EditTask ({ setAddTaskModal, column, taskSelected }: EditTaskProps) {
  const [titleFormValidation, setTitleFormValidation] = useState(false)
  const [descriptionFormValidation, setDescriptionFormValidation] = useState(false)
  const [subtaskFormValidation, setSubtaskFormValidation] = useState(false)
  const { setTaskAdded } = newTask()
  const typeOfForm = 'Edit Task'

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement

    if (target.id === 'addTaskModal') {
      setAddTaskModal(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const formEntries = Array.from(formData.entries())
    const subTasks = formEntries.filter(([key]) => key === 'subtask')
    const { title, description, status } = Object.fromEntries(formData)

    const columnIdUpdate = column.find((column) => column.name === status)?.id

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

    if (title && description) {
      if (taskSelected?.subTasks) {
      // create a new array of subtasks with their updated titles
        const updatedSubTasks = taskSelected.subTasks.map(subtask => {
          const newTitle = subTasks.find(({ id }) => id === subtask.id)?.title ?? subtask.title
          return { ...subtask, title: newTitle }
        })
        await Promise.all(updatedSubTasks.map(async subtask => await updateSubtask(subtask)))
      }

      // await updateTask({ title, description, status, id: taskSelected?.id ?? '', columnId: columnIdUpdate })

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
          subtaskFormValidation={subtaskFormValidation}
          column={column}
          typeOfForm={typeOfForm}
          taskSelected={taskSelected}
        />
      </div>
    </div>
  )
}
