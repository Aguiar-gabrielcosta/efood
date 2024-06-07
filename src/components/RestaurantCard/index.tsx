import Tag from '../Tag'
import star from '../../assets/images/star.svg'
import PerfilLink from '../PerfilLink'
import * as S from './styles'

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
    <S.Card>
      <S.CardTags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </S.CardTags>
      <img src={image} alt={name} />
      <S.CardInfos>
        <S.CardPrimaryInfo>
          <h2>{name}</h2>
          <span>
            {rating} <img src={star} alt="estrela(s)" />
          </span>
        </S.CardPrimaryInfo>
        <S.CardDescription>{description}</S.CardDescription>
        <PerfilLink
          title="Saiba mais sobre o restaurante e seus produtos"
          route={perfilLink}
        >
          Saiba mais
        </PerfilLink>
      </S.CardInfos>
    </S.Card>
  )
}

export default RestaurantCard
