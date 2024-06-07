import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/sideBar'
import logo from '../../assets/images/logo.svg'
import bgVector from '../../assets/images/bg-vector.svg'
import * as S from './styles'

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
    <S.HeaderContainer $bgVetor={bgVector}>
      <div className="container">
        {showNavLink && <S.NavLink to={'/'}>Restaurantes</S.NavLink>}
        <img src={logo} alt="efood" />
        {showCart && (
          <S.CartLink onClick={openCart}>
            {items.length} produto(s) no carrinho
          </S.CartLink>
        )}
      </div>
      {showTitle && (
        <S.HeaderTitle className=".container">
          Viva experiências gastronômicas no conforto da sua casa
        </S.HeaderTitle>
      )}
    </S.HeaderContainer>
  )
}

export default Header
