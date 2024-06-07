import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/sideBar'
import logo from '../../assets/images/logo.svg'
import bgVector from '../../assets/images/bg-vector.svg'
import cartIcon from '../../assets/images/cartIcon.svg'
import homeIcon from '../../assets/images/homeIcon.svg'
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
        {showNavLink && (
          <S.NavLink title="Clique e veja a lista de restaurantes" to={'/'}>
            <img
              src={homeIcon}
              alt="Restaurantes"
              className="responsive-display"
            />
            <span className="responsive-none">Restaurantes</span>
          </S.NavLink>
        )}
        <img role="heading" src={logo} alt="eFood" />
        {showCart && (
          <S.CartLink title="Clique e observe o carrinho" onClick={openCart}>
            <span className="responsive-none">
              {items.length} produto(s) no carrinho
            </span>
            <img src={cartIcon} alt="Carrinho" className="responsive-display" />
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
