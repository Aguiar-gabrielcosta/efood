import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../ProductCard'
import { ProductSection, Products } from './styles'
import Product from '../../models/products'

const ProductList = () => {
  const { id } = useParams()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setProducts(res.cardapio))
  }, [id])

  if (!products) {
    return <h3 className="container">Carregando...</h3>
  }

  return (
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
                />
              </li>
            )
          })}
        </Products>
      </div>
    </ProductSection>
  )
}

export default ProductList
