import * as S from './styles'

type Props = {
  children: string
  route: string
  title: string
}

const PerfilLink = ({ children, route, title }: Props) => {
  return (
    <S.LinkContainer title={title} to={route}>
      {children}
    </S.LinkContainer>
  )
}

export default PerfilLink
