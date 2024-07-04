import styled from 'styled-components'

export type ButtonVariants = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariants
}

// const buttonVariants = {
//   primary: "purple",
//   secondary: "orage",
//   danger: "red",
//   success: "green",
// };

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
`
