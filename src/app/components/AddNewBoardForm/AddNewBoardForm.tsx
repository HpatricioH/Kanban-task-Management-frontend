import { Button } from '@/app/core/utils/Button'
import BoardColumnsSection from './BoardColumnsSection'
import { type Column } from '@/app/lib/hooks/useGetBoards'

interface AddNewBoardFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  titleFormValidation: boolean
  // descriptionFormValidation: boolean
  subtaskFormValidation?: boolean
  columns?: Column[]
  typeOfForm?: string
  activeBoardName?: string
  boardColumnsValues?: string[]
}

export default function AddNewBoardForm ({ onSubmit, typeOfForm, activeBoardName, titleFormValidation, columns }: AddNewBoardFormProps) {
  return (
    <form
    onSubmit={onSubmit}
    className="flex flex-col gap-3 [&_label]:text-[0.75rem] [&_label]:font-bold [&_label]:leading-normal [&_label]:text-[#828FA3] [&_label]:dark:text-[#FFF]">

    {/* Title form section */}
    <label className="capitalize">board name</label>
    <input
      type="text"
      className={`rounded-[0.25rem] border ${titleFormValidation ? 'border-[red]' : 'border-[#828fa340]'}  bg-[#FFF] dark:bg-[#2B2C37] p-2 text-[0.8125rem] placeholder-[#000112] dark:placeholder-[#fff] placeholder-opacity-[0.25] dark:placeholder-opacity-[0.25] focus:outline-none focus:ring-1 focus:ring-[#828fa340] focus:border-transparent `}
      placeholder='e.g. Web Design'
      defaultValue={typeOfForm === 'Edit Board' ? `${activeBoardName ?? ''}` : ''}
      id='name'
      name='name'
    />

    {/* Board Columns form section */}
    <BoardColumnsSection typeOfForm={typeOfForm} columns={columns} />

    {/* Create Task Button */}
    <Button
      icon='./icons/icon-add-task-mobile.svg'
      buttonStyle={'bg-[#635FC7] w-[100%] h-[2.5rem] flex justify-center items-center rounded-xl text-[#fff] font-bold text-[0.8125rem] leading-[1.4375rem] capitalize mt-3'}
      imageClassName='hidden'
      type='submit'
    >
      {`${typeOfForm === 'Edit Board' ? 'save changes' : 'add new board'}`}
    </Button>
  </form>
  )
}
