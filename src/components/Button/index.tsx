import { ButtonContainer } from './style'

type Props = {
  children: string
  onClick?: () => void
}

const Button = ({ children, onClick }: Props) => {
  return (
    <ButtonContainer className="all-width" onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}

export default Button
