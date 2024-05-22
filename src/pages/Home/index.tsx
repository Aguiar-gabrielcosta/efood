import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import Restaurant from '../../models/restaurant'

type Props = {
  data: Restaurant[]
}

const Home = ({ data }: Props) => {
  return (
    <>
      <Header showCart={false} showNavLink={false} showTitle={true} />
      <RestaurantList restaurants={data} />
    </>
  )
}

export default Home
