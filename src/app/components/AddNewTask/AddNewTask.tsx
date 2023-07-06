import { Button } from '@/app/core/utils/Button'
import Image from 'next/image'

interface AddNewTaskProps {
  setAddTaskModal: (value: boolean) => void
}

export default function AddNewTask ({ setAddTaskModal }: AddNewTaskProps) {
  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement

    if (target.id === 'addTaskModal') {
      setAddTaskModal(false)
    }
  }

  return (
    <div
      className='bg-[#20212C] p-4 z-20 fixed inset-0 bg-opacity-60 flex justify-center items-center transition duration-700 ease-in-out'
      id='addTaskModal'
      onClick={(e) => { handleClose(e) }}>

      <div className='bg-[#FFF] dark:bg-[#2B2C37] rounded-md flex flex-col gap-4 shadow-lg shadow-[#364e7e40]/25 absolute w-[18rem] top-[4.7rem] p-4'>
        <h2 className='capitalize text-[1.125rem] font-bold leading-normal'>add new task</h2>
        <form action="" className="flex flex-col gap-3 [&_label]:text-[0.75rem] [&_label]:font-bold [&_label]:leading-normal">
          <label htmlFor="" className="capitalize">title</label>
          <input
            type="text"
            className="rounded-[0.25rem] border border-[#828fa340] bg-[#2B2C37] p-2 text-[0.8125rem] placeholder-[#fff] placeholder-opacity-[0.25] focus:outline-none focus:ring-1 focus:ring-[#828fa340] focus:border-transparent "
            placeholder="e.g. Take coffee break"
          />
          <label htmlFor="" className="capitalize">description</label>
          <textarea
            name=""
            id=""
            cols={30}
            rows={5}
            placeholder="e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little."
            className="resize-none rounded-[0.25rem] border border-[#828fa340] bg-[#2B2C37] p-2 text-[0.8125rem] placeholder-[#fff] placeholder-opacity-[0.25] focus:outline-none focus:ring-1 focus:ring-[#828fa340] focus:border-transparent"
          />
          <label htmlFor="" className="capitalize">Subtasks</label>
          <div className='flex gap-4'>
            <input
              type="text"
              className='rounded-[0.25rem] border border-[#828fa340] bg-[#2B2C37] p-2 text-[0.8125rem] placeholder-[#fff] placeholder-opacity-[0.25] focus:outline-none focus:ring-1 focus:ring-[#828fa340] focus:border-transparent w-full'
              placeholder="e.g. Make coffee"
            />
            <div className='flex justify-center items-center '>
              <Image
                src={'/icons/icon-cross.svg'}
                alt="icon-cross"
                width={14.84896}
                height={14.84896}
              />
            </div>
          </div>
          <div className='flex gap-4'>
            <input
              type="text"
              className='rounded-[0.25rem] border border-[#828fa340] bg-[#2B2C37] p-2 text-[0.8125rem] placeholder-[#fff] placeholder-opacity-[0.25] focus:outline-none focus:ring-1 focus:ring-[#828fa340] focus:border-transparent w-full'
              placeholder="e.g. Drink coffee & smile"
            />
            <div className='flex justify-center items-center '>
              <Image
                src={'/icons/icon-cross.svg'}
                alt="icon-cross"
                width={14.84896}
                height={14.84896}
              />
            </div>
          </div>

          <Button
            icon='./icons/icon-add-task-mobile.svg'
            buttonStyle={'bg-[#fff] w-[100%] h-[2.5rem] flex justify-center items-center rounded-xl text-[#635FC7] font-bold text-[0.8125rem] leading-[1.4375rem]'}
            imageClassName='hidden'
          >
            + Add New Subtask
          </Button>

          <label htmlFor="" className="capitalize">status</label>
          <select name="" id="" className="capitalize rounded-[0.25rem] border border-[#828fa340] bg-[#2B2C37] p-2 text-[0.8125rem] placeholder-[#fff] placeholder-opacity-[0.25] focus:outline-none focus:ring-1 focus:ring-[#828fa340] focus:border-transparent">
            <option value="">todo</option>
            <option value="">doing</option>
            <option value="">done</option>
          </select>
        </form>

        <Button
          icon='./icons/icon-add-task-mobile.svg'
          buttonStyle={'bg-[#635FC7] w-[100%] h-[2.5rem] flex justify-center items-center rounded-xl text-[#fff] font-bold text-[0.8125rem] leading-[1.4375rem] capitalize '}
          imageClassName='hidden'
        >
          create task
        </Button>
      </div>
    </div>
  )
}
