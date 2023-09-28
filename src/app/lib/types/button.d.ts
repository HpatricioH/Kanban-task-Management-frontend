export interface ButtonType {
  children?: React.ReactNode
  icon: string
  buttonStyle?: string
  imageClassName?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}
