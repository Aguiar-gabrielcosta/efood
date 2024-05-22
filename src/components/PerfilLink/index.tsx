import { LinkContainer } from './styles'

type Props = {
  children: string
  route: string
}

const PerfilLink = ({ children, route }: Props) => {
  return <LinkContainer to={route}>{children}</LinkContainer>
}

export default PerfilLink
