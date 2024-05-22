import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import Restaurant from '../../models/restaurant'

type Props = {
  data: Restaurant
}

const Perfil = ({ data }: Props) => {
  return (
    <>
      <Header showCart={true} showNavLink={true} showTitle={false} />
      <Banner bgImage={data.image} name={data.name} tags={data.tags} />
      <ProductList products={data.products} />
    </>
  )
}

export default Perfil
