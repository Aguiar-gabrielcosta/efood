import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

const Home = () => {
  return (
    <>
      <Header showCart={false} showNavLink={false} showTitle={true} />
      <main>
        <RestaurantList />
      </main>
    </>
  )
}

export default Home
