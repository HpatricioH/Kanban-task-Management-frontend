import React from 'react'
import { type Column } from '@/app/lib/hooks/useGetBoards'

export const Columns = ({ column }: any) => {
  return (
    <>
      {/* <div id="slider" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth'> */}
      {column.flat()?.map((col: Column) => (
        <div key={col.id} className='inline-block w-[17.5rem]'>
          <div className='flex'>
            <div className={`rounded-full h-[0.938rem] w-[0.938rem] 
            ${col.name === 'Todo'
                ? 'bg-[#49C4E5]'
                : col.name === 'Done'
                  ? 'bg-[#67E2AE]'
                  : 'bg-[#8471F2]'}`}>
            </div>
            <p className='uppercase pl-2 pb-2 text-[#828FA3] font-bold text-xs tracking-[0.15rem] leading-[0.938rem]'>
              {col.name} ({col.tasks.length})
            </p>
          </div>
          <div>
            {col.tasks.map((task: any) => (
              <div key={task.id} className='bg-[#2B2C37] rounded-md h-[5.5rem] mb-4 p-4 flex flex-col justify-center gap-2 shadow-md shadow-[#364e7e2e]/25 '>
                <h3 className='text-white text-[0.9375rem] font-bold leading-normal'>{task.title}</h3>
                <p className='text-[0.75rem] font-bold leading-normal text-[#828FA3]'>0 of {task.subTasks.length} Subtasks</p>
              </div>
            ))}
          </div>

        </div>
      ))}

      {/* </div> */}
    </>
  )
}
