import { Button } from '@/app/core/utils/Button'

export default function MainColumn () {
  return (
    <section className='h-auto flex flex-col justify-evenly items-center gap-6'>
      <p className='text-center font-bold text-[#828FA3] text-[1.125rem] leading-[1.438rem]'>
        This board is empty. Create a new column to get started.
      </p>
      <Button
        icon='./icons/icon-add-task-mobile.svg'
        buttonStyle='bg-[#635FC7] flex flex-row-reverse justify-center items-center gap-2 w-[10.875rem] h-[3rem] rounded-[5rem]'>
        Add New Column</Button>
    </section>
  )
}
