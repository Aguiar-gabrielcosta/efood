import Product from '../../models/products'
import {
  CloseButton,
  ModalContainer,
  ModalContent,
  ModalProductDetails
} from './styles'
import closeSvg from '../../assets/images/close.svg'
import Button from '../Button'
import { formatPrice } from '../../utils/formatPrice'

type Props = {
  product: Product
  show: boolean
  action: () => void
}

const Modal = ({ product, show, action }: Props) => {
  const formatServings = (servings: string) => {
    if (servings === '1 pessoa') {
      return servings
    }

    return `de ${servings}`
  }

  return (
    <ModalContainer className={show ? 'show' : ''}>
      <ModalContent>
        <CloseButton onClick={action}>
          <img src={closeSvg} alt="Botão fechar" />
        </CloseButton>
        <ModalProductDetails>
          <img src={product.foto} alt={`Foto do prato ${product.nome}`} />
          <div>
            <h2>{product.nome}</h2>
            <p>{product.descricao}</p>
            <p>{`Serve: ${formatServings(product.porcao)}`}</p>
            <Button>
              {`Adicionar ao carrinho - ${formatPrice(product.preco)}`}
            </Button>
          </div>
        </ModalProductDetails>
      </ModalContent>
      <div className="overlay" onClick={action}></div>
    </ModalContainer>
  )
}

export default Modal
