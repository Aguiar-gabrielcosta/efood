import RestaurantCard from '../RestaurantCard'
import { RestaurantSection, Restaurants } from './styles'

const RestaurantList = () => {
  return (
    <RestaurantSection>
      <div className="container">
        <Restaurants>
          <li>
            <RestaurantCard
              name="Nome Teste"
              image="//placehold.it/472x217"
              description="Teste teste teste teste test"
              rating={4.9}
              perfilLink="/"
              tags={['Tag1', 'Tag2']}
            />
          </li>
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
