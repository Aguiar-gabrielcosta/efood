import {
  Card,
  CardInfos,
  CardPrimaryInfo,
  CardDescription,
  CardTags
} from './style'
import star from '../../assets/images/star.svg'

type Props = {
  name: string
  image: string
  rating: number
  description: string
  tags: string[]
  link: string
}

const RestaurantCard = ({
  name,
  image,
  rating,
  description,
  tags,
  link
}: Props) => {
  return (
    <Card>
      <CardTags>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
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
        <a href={link}>Saiba mais</a>
      </CardInfos>
    </Card>
  )
}

export default RestaurantCard
