import { useState } from 'react'
import AddNewBoardForm from '../AddNewBoardForm/AddNewBoardForm'

interface AddNewBoardProps {
  setAddTaskModal: (value: boolean) => void
}

export default function AddNewBoard ({ setAddTaskModal }: AddNewBoardProps) {
  const [titleFormValidation, setTitleFormValidation] = useState(false)
  const [boardColumnsValues, setBoardColumnsValues] = useState<string[]>([])

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement
    if (target.id === 'addBoardModal') {
      setAddTaskModal(false)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const formEntries = Array.from(formData.entries())
    const boardColumns = formEntries.filter(([key]) => key === 'BoardColumn')
    const { title } = Object.fromEntries(new FormData(e.currentTarget))

    if (!title) {
      setTitleFormValidation(true)
    } else {
      setTitleFormValidation(false)
    }

    setBoardColumnsValues(boardColumns.map(([key, value]) => value.toString()))

    // console.log(title, boardColumns)
    // console.log(formEntries)
  }

  return (
    <div
    className='bg-[#20212C] p-4 z-20 fixed inset-0 bg-opacity-60 flex justify-center items-center transition duration-700 ease-in-out'
    id='addBoardModal'
    onClick={(e) => { handleClose(e) }}
    >

    <div className='bg-[#FFF] dark:bg-[#2B2C37] rounded-md flex flex-col gap-4 shadow-lg shadow-[#364e7e40]/25 absolute w-[18rem] top-[4.7rem] p-4'>
      <h2 className='capitalize text-[1.125rem] font-bold leading-normal'>Add New Board</h2>

      <AddNewBoardForm onSubmit={handleSubmit} titleFormValidation={titleFormValidation} boardColumnsValues={boardColumnsValues}/>

    </div>
  </div>
  )
}
