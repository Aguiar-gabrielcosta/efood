import logo from '../../assets/images/logo.svg'
import bgVector from '../../assets/images/bg-vector.svg'
import { Cart, HeaderContainer, HeaderTitle, NavLink } from './styles'

type Props = {
  showNavLink: boolean
  showCart: boolean
  showTitle: boolean
}

const Header = ({ showNavLink, showCart, showTitle }: Props) => {
  return (
    <HeaderContainer $bgVetor={bgVector}>
      <div className="container">
        {showNavLink && <NavLink to={'/'}>Restaurantes</NavLink>}
        <img src={logo} alt="efood" />
        {showCart && <Cart href="#">0 produto(s) no carrinho</Cart>}
      </div>
      {showTitle && (
        <HeaderTitle className=".container">
          Viva experiências gastronômicas no conforto da sua casa
        </HeaderTitle>
      )}
    </HeaderContainer>
  )
}

export default Header
