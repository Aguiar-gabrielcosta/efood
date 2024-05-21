import { RestaurantSection, Restaurants } from './styles'

const RestaurantList = () => {
  return (
    <RestaurantSection>
      <div className="container">
        <Restaurants>
          <li>Restaurante1</li>
          <li>Restaurante2</li>
          <li>Restaurante3</li>
          <li>Restaurante4</li>
          <li>Restaurante5</li>
          <li>Restaurante6</li>
        </Restaurants>
      </div>
    </RestaurantSection>
  )
}

export default RestaurantList
