import { useDispatch } from 'react-redux'
import Button from '../Button'
import { formatPrice } from '../../utils/formatPrice'
import { add } from '../../store/reducers/cart'
import { open } from '../../store/reducers/sideBar'
import closeSvg from '../../assets/images/close.svg'
import * as S from './styles'

type Props = {
  product: Product
  show: boolean
  action: () => void
}

const Modal = ({ product, show, action }: Props) => {
  const dispatch = useDispatch()

  const formatServings = (servings: string) => {
    if (servings === '1 pessoa') {
      return servings
    }

    return `de ${servings}`
  }

  const addToCart = () => {
    dispatch(add(product))
    action()
    dispatch(open())
  }

  return (
    <S.ModalContainer className={show ? 'show' : ''}>
      <S.ModalContent>
        <S.CloseButton onClick={action}>
          <img src={closeSvg} alt="Botão fechar" />
        </S.CloseButton>
        <S.ModalProductDetails>
          <img src={product.foto} alt={`Foto do prato ${product.nome}`} />
          <div>
            <h2>{product.nome}</h2>
            <p>{product.descricao}</p>
            <p>{`Serve: ${formatServings(product.porcao)}`}</p>
            <Button
              title="Clique para adicionar ao carrinho"
              onClick={addToCart}
            >
              {`Adicionar ao carrinho - ${formatPrice(product.preco)}`}
            </Button>
          </div>
        </S.ModalProductDetails>
      </S.ModalContent>
      <div className="overlay" onClick={action}></div>
    </S.ModalContainer>
  )
}

export default Modal
