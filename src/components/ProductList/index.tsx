import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../ProductCard'
import { ProductSection, Products } from './styles'
import Product from '../../models/products'
import Modal from '../Modal'

const ProductList = () => {
  const { id } = useParams()
  const [products, setProducts] = useState<Product[]>([])
  const [modal, setModal] = useState<{
    showModal: boolean
    product: Product | undefined
  }>({ showModal: false, product: undefined })

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setProducts(res.cardapio))
  }, [id])

  if (products.length === 0) {
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
      <ProductSection>
        <div className="container">
          <Products>
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
          </Products>
        </div>
      </ProductSection>
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
