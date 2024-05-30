import { ButtonContainer } from './style'

type Props = {
  children: string
  onClick?: () => void
  width?: 'full' | 'block'
}

const Button = ({ children, onClick, width = 'block' }: Props) => {
  return (
    <ButtonContainer
      className={width === 'full' ? 'all-width' : ''}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
