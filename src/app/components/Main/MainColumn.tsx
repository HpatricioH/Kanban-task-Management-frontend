'use client'

import { boardData } from '@/app/lib/store/boardData'
import { Columns } from './ccolumns/Columns'
import AddNewColumn from './ccolumns/AddNewColumn'

export default function MainColumn () {
  const board = boardData() as any
  const column = board?.board[0]?.columns

  // TODO: add a button to create a new board if the board is not selected or the board is empty

  return (
    <section>
        {column?.length === 0 || board.board.length === 0
          ? <div className='min-h-screen flex justify-center items-center '>
            <AddNewColumn />
          </div>
          : <Columns column={column} />}
    </section>
  )
}
