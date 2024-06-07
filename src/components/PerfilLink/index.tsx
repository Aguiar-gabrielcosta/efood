import * as S from './styles'

type Props = {
  children: string
  route: string
}

const PerfilLink = ({ children, route }: Props) => {
  return <S.LinkContainer to={route}>{children}</S.LinkContainer>
}

export default PerfilLink
