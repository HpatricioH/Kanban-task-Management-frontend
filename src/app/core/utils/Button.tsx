import Image from 'next/image'

interface ButtonType {
  children?: React.ReactNode
  icon: string
  buttonStyle?: string
}

export const Button = ({ children, icon, buttonStyle }: ButtonType) => {
  return (
    <button className={buttonStyle}>{children}
      <Image
        src={icon}
        alt="button icon"
        width={12}
        height={12}
      />
    </button>
  )
}
