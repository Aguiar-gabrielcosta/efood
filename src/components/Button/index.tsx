import { ButtonContainer } from './style'

type Props = {
  children: string
  onClick?: () => void
  width?: 'full' | 'block'
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ children, onClick, width = 'block', type }: Props) => {
  return (
    <ButtonContainer
      className={width === 'full' ? 'all-width' : ''}
      onClick={onClick}
      type={type}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
