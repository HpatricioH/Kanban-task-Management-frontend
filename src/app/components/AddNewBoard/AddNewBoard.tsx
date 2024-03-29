import addNewBoard from '@/app/core/services/addNewBoard'
import { useState } from 'react'
import AddNewBoardForm from '../AddNewBoardForm/AddNewBoardForm'
import addNewBoardColumns from '@/app/core/services/addNewBoardColumns'
import { useRouter } from 'next/navigation'
import { type AddNewBoardProps } from '@/app/lib/types/board'

export default function AddNewBoard ({ setAddTaskModal }: AddNewBoardProps) {
  const [titleFormValidation, setTitleFormValidation] = useState(false)
  const router = useRouter()

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement
    if (target.id === 'addBoardModal') {
      setAddTaskModal(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const formEntries = Array.from(formData.entries())
    const boardColumns = formEntries.filter(([key]) => key === 'BoardColumn')
    const { name } = Object.fromEntries(new FormData(e.currentTarget))

    if (!name) {
      setTitleFormValidation(true)
    } else {
      setTitleFormValidation(false)
    }

    if (name) {
      const response = await addNewBoard({ name })
      for (let i = 0; i < boardColumns.length; i++) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [_, value] = boardColumns[i]
        if (value !== '') {
          await addNewBoardColumns({ name: value.toString(), boardId: response.id })
        }
      }
      form.reset()
      setAddTaskModal(false)
      router.push(`/${response.id as string}`)
    }
  }

  return (
    <section
    className='bg-[#20212C] p-4 z-20 fixed inset-0 bg-opacity-60 flex justify-center items-center transition duration-700 ease-in-out'
    id='addBoardModal'
    onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => { handleClose(e) }}
    >

    <div className='bg-[#FFF] dark:bg-[#2B2C37] rounded-md flex flex-col gap-4 shadow-lg shadow-[#364e7e40]/25 absolute w-[18rem] top-[4.7rem] p-4 md:w-[30rem] md:p-6'>
      <h2 className='capitalize text-[1.125rem] font-bold leading-normal'>Add New Board</h2>

      <AddNewBoardForm onSubmit={(e) => { handleSubmit(e) }} titleFormValidation={titleFormValidation} />

    </div>
  </section>
  )
}
