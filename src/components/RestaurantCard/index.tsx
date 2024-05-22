import {
  Card,
  CardInfos,
  CardPrimaryInfo,
  CardDescription,
  CardTags
} from './style'
import star from '../../assets/images/star.svg'
import PerfilLink from '../PerfilLink'
import Tag from '../Tag'

type Props = {
  name: string
  image: string
  rating: number
  description: string
  tags: string[]
  perfilLink: string
}

const RestaurantCard = ({
  name,
  image,
  rating,
  description,
  tags,
  perfilLink
}: Props) => {
  return (
    <Card>
      <CardTags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </CardTags>
      <img src={image} alt={name} />
      <CardInfos>
        <CardPrimaryInfo>
          <h2>{name}</h2>
          <span>
            {rating} <img src={star} alt="estrela(s)" />
          </span>
        </CardPrimaryInfo>
        <CardDescription>{description}</CardDescription>
        <PerfilLink route={perfilLink}>Saiba mais</PerfilLink>
      </CardInfos>
    </Card>
  )
}

export default RestaurantCard
