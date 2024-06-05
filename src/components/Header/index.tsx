import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/images/logo.svg'
import bgVector from '../../assets/images/bg-vector.svg'
import { CartLink, HeaderContainer, HeaderTitle, NavLink } from './styles'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/sideBar'

type Props = {
  showNavLink: boolean
  showCart: boolean
  showTitle: boolean
}

const Header = ({ showNavLink, showCart, showTitle }: Props) => {
  const { items } = useSelector((store: RootReducer) => store.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderContainer $bgVetor={bgVector}>
      <div className="container">
        {showNavLink && <NavLink to={'/'}>Restaurantes</NavLink>}
        <img src={logo} alt="efood" />
        {showCart && (
          <CartLink onClick={openCart}>
            {items.length} produto(s) no carrinho
          </CartLink>
        )}
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
