import { type ColumnCardsProps } from '@/app/lib/types/column'
import { type Column } from '@/app/lib/types/api'
import TaskCards from './TaskCards'
import { memo } from 'react'

function ColumnCards ({ boardColumn, taskDetailsModal, setTaskDetailsModal, setTaskSelected }: ColumnCardsProps) {
  return (
    boardColumn?.map((col: Column) => {
      const columnColors: Record<string, string> = {
        Todo: 'bg-[#49C4E5]',
        Done: 'bg-[#67E2AE]',
        Default: 'bg-[#8471F2]'
      }
      const columnColor = columnColors[col.name] || columnColors.Default

      return (
        <div key={col.id} className='inline-block w-[17.5rem]'>
          <div className='flex'>
            <div className={`rounded-full h-[0.938rem] w-[0.938rem] ${columnColor}`} />
            <p className='uppercase pl-2 pb-5 text-[#828FA3] font-bold text-[0.75rem] tracking-[0.15rem] leading-normal'>
              {col.name} ({col.tasks.length})
            </p>
          </div>
          <TaskCards col={col} taskDetailsModal={taskDetailsModal} setTaskDetailsModal={setTaskDetailsModal} setTaskSelected={setTaskSelected} boardColumn={boardColumn} />
        </div>
      )
    })
  )
}

export default memo(ColumnCards)
