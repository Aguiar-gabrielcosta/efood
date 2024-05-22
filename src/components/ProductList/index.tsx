import Product from '../../models/products'
import ProductCard from '../ProductCard'
import { ProductSection, Products } from './styles'

type Props = {
  products: Product[]
}

const ProductList = ({ products }: Props) => {
  return (
    <ProductSection>
      <div className="container">
        <Products>
          {products.map((product) => {
            return (
              <li key={product.id}>
                <ProductCard
                  name={product.name}
                  image={product.image}
                  description={product.description}
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
