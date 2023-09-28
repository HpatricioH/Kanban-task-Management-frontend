import Image from 'next/image'
import { type ButtonType } from '@/app/lib/types/button'

export const Button = ({ children, icon, buttonStyle, onClick, imageClassName, type }: ButtonType) => {
  return (
    <button className={buttonStyle} onClick={onClick} type={type}>{children}
      <Image
        src={icon}
        alt="button icon"
        width={12}
        height={12}
        className={imageClassName}
      />
    </button>
  )
}
