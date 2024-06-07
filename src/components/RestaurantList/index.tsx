import RestaurantCard from '../RestaurantCard'
import { formatText } from '../../utils/formatText'
import { useGetRestaurantListQuery } from '../../services/restaurantApi'
import * as S from './styles'
import Loader from '../Loader'

const RestaurantList = () => {
  const { data: restaurants } = useGetRestaurantListQuery()

  const getTags = (restaurant: Restaurant) => {
    const tags: string[] = []

    if (restaurant.destacado) {
      tags.push('Destaque da semana')
    }

    if (restaurant.tipo) {
      tags.push(restaurant.tipo)
    }

    return tags
  }

  if (!restaurants) {
    return <Loader />
  }

  return (
    <S.RestaurantSection>
      <div className="container">
        <S.Restaurants>
          {restaurants.map((restaurant) => {
            return (
              <li key={restaurant.id}>
                <RestaurantCard
                  name={restaurant.titulo}
                  image={restaurant.capa}
                  description={formatText(restaurant.descricao)}
                  rating={restaurant.avaliacao}
                  perfilLink={`/perfil/${restaurant.id}`}
                  tags={getTags(restaurant)}
                />
              </li>
            )
          })}
        </S.Restaurants>
      </div>
    </S.RestaurantSection>
  )
}

export default RestaurantList
