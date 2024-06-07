import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../ProductCard'
import Modal from '../Modal'
import { useGetRestaurantQuery } from '../../services/restaurantApi'
import * as S from './styles'

const ProductList = () => {
  const { id } = useParams()
  const [modal, setModal] = useState<{
    showModal: boolean
    product: Product | undefined
  }>({ showModal: false, product: undefined })

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: restaurant } = useGetRestaurantQuery(id!)
  const products = restaurant?.cardapio

  if (!products) {
    return <h3 className="container">Carregando...</h3>
  }

  const openModal = (product: Product) => {
    setModal({ product: product, showModal: true })
  }

  const closeModal = () => {
    setModal({ product: undefined, showModal: false })
  }

  return (
    <>
      <S.ProductSection>
        <div className="container">
          <S.Products>
            {products.map((product) => {
              return (
                <li key={product.id}>
                  <ProductCard
                    name={product.nome}
                    image={product.foto}
                    description={product.descricao}
                    action={() => openModal(product)}
                  />
                </li>
              )
            })}
          </S.Products>
        </div>
      </S.ProductSection>
      {modal.product && (
        <Modal
          product={modal.product}
          show={modal.showModal}
          action={() => closeModal()}
        />
      )}
    </>
  )
}

export default ProductList
