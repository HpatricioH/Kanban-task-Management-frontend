import { Button } from '@/app/core/utils/Button'
import { type Column } from '@/app/lib/hooks/useGetBoards'
import SubtaskSection from './SubtaskSection'

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  titleFormValidation: boolean
  descriptionFormValidation: boolean
  subtaskFormValidation: boolean
  column: Column[]
  typeOfForm?: string
  taskSelected?: {
    columnId: string
    description: string
    id: string
    status: string
    subTasks: Array<{ id: string, isCompleted: boolean, taskId: string, title: string }>
    title: string
  }
}

export default function Form ({
  onSubmit,
  titleFormValidation,
  descriptionFormValidation,
  subtaskFormValidation,
  column,
  typeOfForm,
  taskSelected
}: FormProps) {
  console.log()

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-3 [&_label]:text-[0.75rem] [&_label]:font-bold [&_label]:leading-normal [&_label]:text-[#828FA3] [&_label]:dark:text-[#FFF]">

      {/* Title form section */}
      <label className="capitalize">title</label>
      <input
        type="text"
        className={`rounded-[0.25rem] border ${titleFormValidation ? 'border-[red]' : 'border-[#828fa340]'}  bg-[#FFF] dark:bg-[#2B2C37] p-2 text-[0.8125rem] placeholder-[#000112] dark:placeholder-[#fff] placeholder-opacity-[0.25] dark:placeholder-opacity-[0.25] focus:outline-none focus:ring-1 focus:ring-[#828fa340] focus:border-transparent `}
        placeholder='e.g. Take coffee break'
        defaultValue={typeOfForm === 'Edit Task' ? `${taskSelected?.title ?? ''}` : ''}
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
        className={`rounded-[0.25rem] border ${descriptionFormValidation ? 'border-[red]' : 'border-[#828fa340]'}  bg-[#FFF] dark:bg-[#2B2C37] p-2 text-[0.8125rem] placeholder-[#000112] dark:placeholder-[#fff] placeholder-opacity-[0.25] dark:placeholder-opacity-[0.25] focus:outline-none focus:ring-1 focus:ring-[#828fa340] focus:border-transparent `}
        defaultValue={typeOfForm === 'Edit Task' ? `${taskSelected?.description ?? ''}` : ''}
      />

      {/* Subtask form section */}
      <SubtaskSection subTaskValidation={subtaskFormValidation} taskSelected={taskSelected} typeOfForm={typeOfForm}/>

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
  )
}
