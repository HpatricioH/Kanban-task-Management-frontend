import Image from 'next/image'

interface ButtonType {
  children?: React.ReactNode
  icon: string
  buttonStyle?: string
  imageClassName?: string
  onClick?: () => void
}

export const Button = ({ children, icon, buttonStyle, onClick, imageClassName }: ButtonType) => {
  return (
    <button className={buttonStyle} onClick={onClick} type='button'>{children}
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
