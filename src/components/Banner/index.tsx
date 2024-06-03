import { BannerContainer, BannerTags, BannerTitle } from './styles'
import { useParams } from 'react-router-dom'
import { useGetRestaurantQuery } from '../../services/restaurantApi'

const Banner = () => {
  const { id } = useParams()

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: restaurant } = useGetRestaurantQuery(id!)

  if (!restaurant) {
    return <h3 className="container">Carregando...</h3>
  }

  return (
    <BannerContainer $bgImage={restaurant?.capa}>
      <div className="container">
        {restaurant?.destacado && <BannerTags>Destaque da semana</BannerTags>}
        <BannerTags>{restaurant?.tipo}</BannerTags>
        <BannerTitle>{restaurant?.titulo}</BannerTitle>
      </div>
    </BannerContainer>
  )
}

export default Banner
