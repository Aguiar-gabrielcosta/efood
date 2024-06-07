import * as S from './styles'

type Props = {
  children: string
  onClick?: () => void
  width?: 'full' | 'block'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  title: string
}

const Button = ({
  children,
  onClick,
  width = 'block',
  type,
  disabled,
  title
}: Props) => {
  return (
    <S.ButtonContainer
      className={width === 'full' ? 'all-width' : ''}
      onClick={onClick}
      type={type}
      disabled={disabled}
      title={title}
    >
      {children}
    </S.ButtonContainer>
  )
}

export default Button
