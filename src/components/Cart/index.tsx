import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import { RootReducer } from '../../store'
import { remove } from '../../store/reducers/cart'
import { changeView } from '../../store/reducers/sideBar'
import { formatPrice } from '../../utils/formatPrice'
import { totalPrice } from '../../utils/totalPrice'
import removeImg from '../../assets/images/remove.svg'
import * as S from './styles'

const Cart = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const { view } = useSelector((state: RootReducer) => state.sideBar)
  const dispatch = useDispatch()
  const emptyCart = items.length === 0

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={view === 'cart' ? 'show' : ''}>
      {emptyCart ? (
        <p className="empty-cart">
          O carrinho está vazio, adicione pelo menos um produto para continuar
        </p>
      ) : (
        <>
          {items.map((item, index) => (
            <S.CartProduct key={index}>
              <img className="productImg" src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formatPrice(item.preco)}</p>
              </div>
              <img
                className="remove"
                src={removeImg}
                alt="Remover item"
                onClick={() => removeItem(item.id)}
              />
            </S.CartProduct>
          ))}
          <S.CartValues>
            <p>Valor total</p>
            <p>{formatPrice(totalPrice(items))}</p>
          </S.CartValues>
          <Button width="full" onClick={() => dispatch(changeView('delivery'))}>
            Continuar com a entrega
          </Button>
        </>
      )}
    </S.CartContainer>
  )
}

export default Cart
