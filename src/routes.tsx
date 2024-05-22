import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import { restaurantsData } from './data/restaurants'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home data={restaurantsData} />} />
      {restaurantsData.map((restaurant) => {
        return (
          <Route
            key={restaurant.id}
            path={restaurant.route}
            element={<Perfil data={restaurant} />}
          />
        )
      })}
    </Routes>
  )
}

export default Rotas
