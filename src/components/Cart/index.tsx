import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import removeImg from '../../assets/images/remove.svg'
import { CartContent, CartProduct, CartValues } from './styles'
import { RootReducer } from '../../store'
import { formatPrice } from '../../utils/formatPrice'
import { remove } from '../../store/reducers/cart'

const Cart = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const totalPrice = () => {
    return items.reduce((total, item) => {
      return (total += item.preco)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContent>
      {items.map((item) => (
        <CartProduct key={item.id}>
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
        </CartProduct>
      ))}
      <CartValues>
        <p>Valor total</p>
        <p>{formatPrice(totalPrice())}</p>
      </CartValues>
      <Button width="full">Continuar com a entrega</Button>
    </CartContent>
  )
}

export default Cart
