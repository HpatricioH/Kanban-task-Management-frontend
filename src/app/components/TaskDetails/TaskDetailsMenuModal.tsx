import { type TaskDetailsMenuModalProps } from '@/app/lib/types/tasks'

const taskSettings = [
  {
    name: 'Edit Task'
  },
  {
    name: 'Delete Task'
  }
]

export default function TaskDetailsMenuModal ({ setTaskMenuModal, handleDeleteTask, handleEditTask }: TaskDetailsMenuModalProps) {
  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement
    if (target.id === 'modal') {
      setTaskMenuModal(false)
    }
  }

  return (
    <section
    className='bg-[#20212C] z-40 fixed inset-0 bg-opacity-60 transition duration-700 ease-in-out '
    id='modal'
    onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => { handleClose(e) }}
  >
      <div className="flex relative justify-center">
        <div className='bg-[#FFF] dark:bg-[#20212C] rounded-md flex flex-col gap-4 shadow-lg shadow-[#364e7e40]/25 absolute w-[10rem] top-[7.5rem] md:w-[12rem] md:top-[8.2rem]'>
          <div
            className='w-[15rem] rounded-r-3xl  font-semibold  text-[0.8125rem] leading-[1.188rem]'>
            <div className='flex flex-col gap-5 py-4 text-[#828FA3] cursor-pointer'>
              {
                taskSettings.map((setting, i) => {
                  return (
                    <div
                      key={i}
                      className={`flex gap-3 pl-4 font-semibold text-[0.8125rem] leading-[1.188rem] dark:hover:text-[#FFFFFF] hover:text-[#2B2C37] ${setting.name === 'Delete Task' ? 'text-[#EA5555]' : ''}`}>
                      <p onClick={setting.name === 'Edit Task' ? handleEditTask : handleDeleteTask}>{setting.name}</p>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
  </section>
  )
}
