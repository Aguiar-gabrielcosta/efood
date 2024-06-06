import { ButtonContainer } from './style'

type Props = {
  children: string
  onClick?: () => void
  width?: 'full' | 'block'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const Button = ({
  children,
  onClick,
  width = 'block',
  type,
  disabled
}: Props) => {
  return (
    <ButtonContainer
      className={width === 'full' ? 'all-width' : ''}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
