import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import { restaurantsData } from '../../data/restaurants'

const Home = () => {
  return (
    <>
      <Header showCart={false} showNavLink={false} showTitle={true} />
      <RestaurantList restaurants={restaurantsData} />
    </>
  )
}

export default Home
