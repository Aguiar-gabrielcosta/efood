import { formatText } from '../../utils/formatText'
import Button from '../Button'
import { Card, CardDescription, CardTitle } from './style'

type Props = {
  name: string
  image: string
  description: string
  action: () => void
}

const ProductCard = ({ name, image, description, action }: Props) => {
  return (
    <>
      <Card>
        <img src={image} alt={name} />
        <CardTitle>{name}</CardTitle>
        <CardDescription>{formatText(description)}</CardDescription>
        <Button width="full" onClick={action}>
          Adicionar ao carrinho
        </Button>
      </Card>
    </>
  )
}

export default ProductCard
