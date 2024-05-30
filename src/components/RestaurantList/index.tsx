import { useEffect, useState } from 'react'
import RestaurantCard from '../RestaurantCard'
import { RestaurantSection, Restaurants } from './styles'
import Restaurant from '../../models/restaurant'
import { formatText } from '../../utils/formataTexto'

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

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
