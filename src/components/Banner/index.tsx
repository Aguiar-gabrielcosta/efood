import { useParams } from 'react-router-dom'
import Loader from '../Loader'
import { useGetRestaurantQuery } from '../../services/restaurantApi'
import * as S from './styles'

const Banner = () => {
  const { id } = useParams() as PageParams
  const { data: restaurant } = useGetRestaurantQuery(id)

  if (!restaurant) {
    return <Loader />
  }

  return (
    <S.BannerContainer $bgImage={restaurant?.capa}>
      <div className="container">
        {restaurant?.destacado && (
          <S.BannerTags>Destaque da semana</S.BannerTags>
        )}
        <S.BannerTags>{restaurant?.tipo}</S.BannerTags>
        <S.BannerTitle>{restaurant?.titulo}</S.BannerTitle>
      </div>
    </S.BannerContainer>
  )
}

export default Banner
