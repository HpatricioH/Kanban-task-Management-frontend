import React from 'react'
import { type Column } from '@/app/lib/hooks/useGetBoards'

export const Columns = ({ column }: any) => {
  return (
    <div>
      <ul className='flex flex-row gap-4'>
        {column.flat()?.map((col: Column) => (
          <li key={col.id}>
            <div className='flex'>
              <div className={`rounded-full h-3 w-3 
                ${col.name === 'Todo'
                  ? 'bg-[#49C4E5]'
                  : col.name === 'Done'
                    ? 'bg-[#67E2AE]'
                    : 'bg-[#8471F2]'}`}>
              </div>
              <p className='uppercase pl-2 text-[#828FA3] font-bold text-xs tracking-[0.15rem] leading-[0.938rem]'>
                {col.name} ({col.tasks.length})
              </p>
            </div>
            <div className='overflow-x-scroll'>
              {col.tasks.map((task: any) => (
                <div key={task.id} className='bg-[#2B2C37] rounded-md'>
                  <h3 className='text-white'>{task.title}</h3>
                  <p>0 of {task.subTasks.length} Subtasks</p>
                </div>
              ))}
            </div>

          </li>
        ))}
      </ul>
    </div>
  )
}
