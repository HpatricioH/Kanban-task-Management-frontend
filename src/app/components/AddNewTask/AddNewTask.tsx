import { Button } from '@/app/core/utils/Button'
import { type Column } from '@/app/lib/hooks/useGetBoards'
import SubtaskSection from './SubtaskSection'
import addTasks from '@/app/core/services/addTasks'
import addSubTasks from '@/app/core/services/addSubTasks'

interface AddNewTaskProps {
  setAddTaskModal: (value: boolean) => void
  column: Column[]
}

//  TODO: refactor this component separate the component into smaller components
export default function AddNewTask ({ setAddTaskModal, column }: AddNewTaskProps) {
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

    // to create a new task I need:
    // title, description, status, columnId
    const selectedColumn = column.find((column: Column) => column.name === status)
    console.log(title, description, status)
    console.log(selectedColumn?.id)

    if (formEntries) {
      await addTasks({ title, description, status, columnId: selectedColumn?.id })
      form.reset()
    } else {
      console.log('error task')
    }

    // to create a new subtask it is needed:
    // task id, title, isCompleted (default false)
    const tasks = selectedColumn?.tasks
    const findTasks = tasks?.find((task) => task.status === status)
    console.log(findTasks?.id)

    if (subTasks) {
      subTasks.map(async ([_, value]) => {
        await addSubTasks({ taskId: findTasks?.id, title: value, isCompleted: false })
      })
    } else {
      console.log('error subtask')
    }
    console.log(subTasks.map(([_, value]) => value))
    // console.log(formEntries)
  }

  return (
    <div
      className='bg-[#20212C] p-4 z-20 fixed inset-0 bg-opacity-60 flex justify-center items-center transition duration-700 ease-in-out'
      id='addTaskModal'
      onClick={(e) => { handleClose(e) }}>

      <div className='bg-[#FFF] dark:bg-[#2B2C37] rounded-md flex flex-col gap-4 shadow-lg shadow-[#364e7e40]/25 absolute w-[18rem] top-[4.7rem] p-4'>
        <h2 className='capitalize text-[1.125rem] font-bold leading-normal'>add new task</h2>

        {/* Form Section */}
        <form
          onSubmit={(e) => { handleSubmit(e) }}
          className="flex flex-col gap-3 [&_label]:text-[0.75rem] [&_label]:font-bold [&_label]:leading-normal [&_label]:text-[#828FA3] [&_label]:dark:text-[#FFF]">

          {/* Title form section */}
          <label className="capitalize">title</label>
          <input
            type="text"
            className="rounded-[0.25rem] border border-[#828fa340] bg-[#FFF] dark:bg-[#2B2C37] p-2 text-[0.8125rem] placeholder-[#000112] dark:placeholder-[#fff] placeholder-opacity-[0.25] dark:placeholder-opacity-[0.25] focus:outline-none focus:ring-1 focus:ring-[#828fa340] focus:border-transparent "
            placeholder="e.g. Take coffee break"
            id='title'
            name='title'
          />

          {/* Description form section */}
          <label className="capitalize">description</label>
          <textarea
            name="description"
            id="description"
            cols={30}
            rows={5}
            placeholder="e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little."
            className="resize-none rounded-[0.25rem] border border-[#828fa340] bg-[#FFF] dark:bg-[#2B2C37] p-2 text-[0.8125rem] placeholder-[#000112] dark:placeholder-[#fff] placeholder-opacity-[0.25] dark:placeholder-opacity-[0.25] focus:outline-none focus:ring-1 focus:ring-[#828fa340] focus:border-transparent"
          />

          {/* Subtask form section */}
          <SubtaskSection />

          {/* Status Form Section */}
          <label className="capitalize">status</label>
          <select name="status" id="status" className="capitalize rounded-[0.25rem] border bg-[#FFF] dark:bg-[#2B2C37] p-2 text-[0.8125rem] placeholder-[#000112] dark:placeholder-[#fff] placeholder-opacity-[0.25] focus:outline-none focus:ring-1 focus:ring-[#828fa340] focus:border-transparent">
            {
              column.map((column: Column) => {
                return (
                  <option value={`${column.name}`} key={column.id}>{column.name}</option>
                )
              })
            }
          </select>

          {/* Create Task Button */}
          <Button
            icon='./icons/icon-add-task-mobile.svg'
            buttonStyle={'bg-[#635FC7] w-[100%] h-[2.5rem] flex justify-center items-center rounded-xl text-[#fff] font-bold text-[0.8125rem] leading-[1.4375rem] capitalize '}
            imageClassName='hidden'
            type='submit'
          >
            create task
          </Button>
        </form>

      </div>
    </div>
  )
}
