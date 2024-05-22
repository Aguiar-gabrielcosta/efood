import Restaurant from '../../models/restaurant'
import RestaurantCard from '../RestaurantCard'
import { RestaurantSection, Restaurants } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => {
  return (
    <RestaurantSection>
      <div className="container">
        <Restaurants>
          {restaurants.map((restaurant) => {
            return (
              <li key={restaurant.id}>
                <RestaurantCard
                  name={restaurant.name}
                  image={restaurant.image}
                  description={restaurant.description}
                  rating={restaurant.rating}
                  perfilLink={restaurant.link}
                  tags={restaurant.tags}
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
