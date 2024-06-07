import Banner from '../../components/Banner'
import Header from '../../components/Header'
import ProductList from '../../components/ProductList'

const Perfil = () => {
  return (
    <>
      <Header showCart={true} showNavLink={true} showTitle={false} />
      <Banner />
      <main>
        <ProductList />
      </main>
    </>
  )
}

export default Perfil
