import Header from '../../components/Header'
import Restaurant from '../../models/restaurant'

type Props = {
  data: Restaurant
}

const Perfil = ({ data }: Props) => {
  return (
    <>
      <Header showCart={true} showNavLink={true} showTitle={false} />
    </>
  )
}

export default Perfil
