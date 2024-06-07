import Button from '../Button'
import { formatText } from '../../utils/formatText'
import * as S from './styles'

type Props = {
  name: string
  image: string
  description: string
  action: () => void
}

const ProductCard = ({ name, image, description, action }: Props) => {
  return (
    <>
      <S.Card>
        <img src={image} alt={name} />
        <S.CardTitle>{name}</S.CardTitle>
        <S.CardDescription>{formatText(description)}</S.CardDescription>
        <Button width="full" onClick={action}>
          Adicionar ao carrinho
        </Button>
      </S.Card>
    </>
  )
}

export default ProductCard
