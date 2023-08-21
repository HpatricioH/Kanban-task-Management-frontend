import { type Column } from '@/app/lib/hooks/useGetBoards'
import addTasks from '@/app/core/services/addTasks'
import addSubTasks from '@/app/core/services/addSubTasks'
import { useState } from 'react'
import { newTask } from '@/app/lib/store/taskAdded'
import Form from '../form/Form'

interface AddNewTaskProps {
  setAddTaskModal: (value: boolean) => void
  column: Column[]
}

export default function AddNewTask ({ setAddTaskModal, column }: AddNewTaskProps) {
  const [titleFormValidation, setTitleFormValidation] = useState(false)
  const [descriptionFormValidation, setDescriptionFormValidation] = useState(false)
  const [subtaskFormValidation, setSubtaskFormValidation] = useState(false)
  const { setTaskAdded } = newTask()
  const typeOfForm = 'Add New Task'

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
    const { title, description, status } = Object.fromEntries(
      new FormData(e.currentTarget)
    )

    const selectedColumn = column.find((column: Column) => column.name === status)
    const hasEmptySubtask = subTasks.some(([_, value]) => value === '')

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

    if (hasEmptySubtask) { setSubtaskFormValidation(true) } else { setSubtaskFormValidation(false) }

    if (title && description && !hasEmptySubtask) {
      const response = await addTasks({ title, description, status, columnId: selectedColumn?.id })

      // create subtasks if user add a new task
      subTasks.map(async ([_, value]) => {
        console.log(value)
        await addSubTasks({ taskId: response.id, title: value, isCompleted: false })
      })

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
        <h2 className='capitalize text-[1.125rem] font-bold leading-normal'>add new task</h2>

        <Form onSubmit={(e) => { handleSubmit(e) } } titleFormValidation={titleFormValidation} descriptionFormValidation={descriptionFormValidation} subtaskFormValidation={subtaskFormValidation} column={column} typeOfForm={typeOfForm}/>

      </div>
    </div>
  )
}
