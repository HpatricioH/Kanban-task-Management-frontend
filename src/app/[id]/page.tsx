'use client'

import { boardData } from '@/app/lib/store/boardData'
import { Columns } from '../components/Main/columns/Columns'

interface Props {
  params: {
    id: string
  }
}

export default function Page ({ params }: Props) {
  const board = boardData() as any
  const column = board?.board[0]?.columns

  const { id } = params

  // TODO: add a button to create a new board if the board is not selected or the board is empty

  console.log(id)
  console.log(board)

  return (
    <section className={'min-h-screen p-4 bg-[#F4F7FD] dark:bg-[#20212C] overflow-x-scroll'}>
      <div className="z-10 text-sm ">
        <Columns column={column} />
      </div>
    </section>
  )
}
