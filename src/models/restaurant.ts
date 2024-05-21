class Restaurant {
  id: number
  name: string
  image: string
  tags: string[]
  rating: number
  description: string
  link: string

  constructor(
    id: number,
    name: string,
    image: string,
    tags: string[],
    rating: number,
    description: string,
    link: string
  ) {
    this.id = id
    this.name = name
    this.image = image
    this.tags = tags
    this.rating = rating
    this.description = description
    this.link = link
  }
}

export default Restaurant
