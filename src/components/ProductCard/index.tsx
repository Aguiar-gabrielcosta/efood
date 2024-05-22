import Button from '../Button'
import { Card, CardDescription, CardTitle } from './style'

type Props = {
  name: string
  image: string
  description: string
}

const ProductCard = ({ name, image, description }: Props) => {
  return (
    <Card>
      <img src={image} alt={name} />
      <CardTitle>{name}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <Button>Adicionar ao carrinho</Button>
    </Card>
  )
}

export default ProductCard
