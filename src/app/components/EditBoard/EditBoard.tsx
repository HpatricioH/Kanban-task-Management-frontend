import { useState } from 'react'
import AddNewBoardForm from '../AddNewBoardForm/AddNewBoardForm'
import { boardData } from '@/app/lib/store/boardData'
import updateBoard from '@/app/core/services/updateBoard'

interface EditBoardProps {
  setEditBoardModal: (value: boolean) => void
}

export default function EditBoard ({ setEditBoardModal }: EditBoardProps) {
  const [titleFormValidation, setTitleFormValidation] = useState(false)
  const { board } = boardData()
  const { name } = board[0]
  const { columns } = board[0]
  const typeOfForm = 'Edit Board'

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement
    if (target.id === 'EditBoardModal') {
      setEditBoardModal(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const formEntries = Array.from(formData.entries())
    const boardColumns = formEntries.filter(([key]) => key === 'BoardColumn')
    const { name } = Object.fromEntries(new FormData(e.currentTarget))
    const { id } = board[0]

    console.log(boardColumns)

    if (!name) {
      setTitleFormValidation(true)
    } else {
      setTitleFormValidation(false)
    }

    if (name) {
      const response = await updateBoard({ id, name })
      // boardColumns.map(async ([_, value]) => {
      //   if (value !== '') {
      //     await updateBoard({ name: value.toString(), boardId: response.id })
      //   }
      // }
      // )
      console.log(response)
      form.reset()
      setEditBoardModal(false)
    }
  }

  return (
    <section
    className='bg-[#20212C] p-4 z-20 fixed inset-0 bg-opacity-60 flex justify-center items-center transition duration-700 ease-in-out'
    id='EditBoardModal'
    onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => { handleClose(e) }}
    >

    <div className='bg-[#FFF] dark:bg-[#2B2C37] rounded-md flex flex-col gap-4 shadow-lg shadow-[#364e7e40]/25 absolute w-[18rem] top-[4.7rem] p-4'>
      <h2 className='capitalize text-[1.125rem] font-bold leading-normal'>Edit Board</h2>

      <AddNewBoardForm onSubmit={(e) => { handleSubmit(e) }} titleFormValidation={titleFormValidation} typeOfForm={typeOfForm} activeBoardName={name} columns={columns}/>

    </div>
  </section>
  )
}
