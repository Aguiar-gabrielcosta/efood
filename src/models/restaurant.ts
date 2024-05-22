import Product from './products'

class Restaurant {
  id: number
  name: string
  image: string
  tags: string[]
  rating: number
  description: string
  route: string
  products: Product[]

  constructor(
    id: number,
    name: string,
    image: string,
    tags: string[],
    rating: number,
    description: string,
    route: string,
    products: Product[]
  ) {
    this.id = id
    this.name = name
    this.image = image
    this.tags = tags
    this.rating = rating
    this.description = description
    this.route = route
    this.products = products
  }
}

export default Restaurant
