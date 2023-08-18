import Image from 'next/image'
import { type SubtaskInputProps } from '../form/SubtaskInput'

export default function BoardColumnInput ({ input, value, onChange, onRemove, isInvalid, typeOfForm }: SubtaskInputProps) {
  return (
    <div className='flex gap-4'>
      <input
        type='text'
        className={`rounded-[0.25rem] border ${isInvalid ? 'border-[red]' : 'border-[#828fa340]'} bg-[#FFF] dark:bg-[#2B2C37] p-2 text-[0.8125rem] placeholder-[#000112] dark:placeholder-[#fff] placeholder-opacity-[0.25] dark:placeholder-opacity-[0.25] focus:outline-none focus:ring-1 focus:ring-[#828fa340] focus:border-transparent w-full`}
        placeholder={input.placeholder}
        id={input.id}
        name={input.name}
        // defaultValue={typeOfForm === 'Edit Task' ? value ?? '' : ''}
        // onChange={handleInputChange}
      />
      <div className='flex justify-center items-center '>
        <Image
          src={'/icons/icon-cross.svg'}
          alt='icon-cross'
          width={14.84896}
          height={14.84896}
          onClick={onRemove}
        />
      </div>
    </div>
  )
}
