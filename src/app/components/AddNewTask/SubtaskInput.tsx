import Image from 'next/image'

interface SubtaskInputProps {
  input: {
    id: string
    name: string
    placeholder: string
  }
  onRemove: () => void
}

export default function SubtaskInput ({ input, onRemove }: SubtaskInputProps) {
  return (
    <div className='flex gap-4'>
      <input
        type="text"
        className='rounded-[0.25rem] border border-[#828fa340] bg-[#FFF] dark:bg-[#2B2C37] p-2 text-[0.8125rem] placeholder-[#000112] dark:placeholder-[#fff] placeholder-opacity-[0.25] dark:placeholder-opacity-[0.25] focus:outline-none focus:ring-1 focus:ring-[#828fa340] focus:border-transparent w-full'
        placeholder={input.placeholder}
        id={input.id}
        name={input.name}
      />
      <div className='flex justify-center items-center '>
        <Image
          src={'/icons/icon-cross.svg'}
          alt="icon-cross"
          width={14.84896}
          height={14.84896}
          onClick={onRemove}
        />
      </div>
    </div>
  )
}
