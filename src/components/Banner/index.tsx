import { useEffect, useState } from 'react'
import { BannerContainer, BannerTags, BannerTitle } from './styles'
import { useParams } from 'react-router-dom'
import Restaurant from '../../models/restaurant'

const Banner = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

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
