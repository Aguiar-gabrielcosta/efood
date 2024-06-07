type Product = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Product[]
}

type CartProducts = {
  id: number
  price: number
}

type Purchase = {
  products: CartProducts[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}
