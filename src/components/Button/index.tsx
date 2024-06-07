import * as S from './styles'

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
    <S.ButtonContainer
      className={width === 'full' ? 'all-width' : ''}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </S.ButtonContainer>
  )
}

export default Button
