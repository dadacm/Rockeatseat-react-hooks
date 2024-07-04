import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer, ButtonVariants } from './Button.styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
}
export const Button = ({ variant = 'primary', children }: ButtonProps) => {
  return <ButtonContainer variant={variant}>{children}</ButtonContainer>
}
