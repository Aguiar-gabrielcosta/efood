import RestaurantCard from '../RestaurantCard'
import { RestaurantSection, Restaurants } from './styles'
import Restaurant from '../../models/restaurant'
import { formatText } from '../../utils/formatText'
import { useGetRestaurantListQuery } from '../../services/restaurantApi'

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
    return <h3 className="container">Carregando...</h3>
  }

  return (
    <RestaurantSection>
      <div className="container">
        <Restaurants>
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
        </Restaurants>
      </div>
    </RestaurantSection>
  )
}

export default RestaurantList
