import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

const Home = () => {
  return (
    <>
      <Header showCart={false} showNavLink={false} showTitle={true} />
      <RestaurantList />
    </>
  )
}

export default Home
