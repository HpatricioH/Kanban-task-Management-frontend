import Image from 'next/image'

interface ButtonType {
  children?: React.ReactNode
  icon: string
  buttonStyle?: string
  imageClassName?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

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
