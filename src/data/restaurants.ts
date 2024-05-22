import Restaurant from '../models/restaurant'
import sushiImage from '../assets/images/sushi.png'
import italianFoodImage from '../assets/images/italian-food.png'
import Product from '../models/products'
import pizzaImage from '../assets/images/pizza.png'

export const restaurantsData: Restaurant[] = [
  new Restaurant(
    1,
    'Hioki Sushi',
    sushiImage,
    ['Destaque da semana', 'Japonesa'],
    4.9,
    'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    '/perfil1',
    [
      new Product(
        1,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        2,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        3,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        4,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        5,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        6,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      )
    ]
  ),
  new Restaurant(
    2,
    'La Dolce Vita Trattoria',
    italianFoodImage,
    ['Italiana'],
    4.6,
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    '/perfil2',
    [
      new Product(
        7,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        8,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        9,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        10,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        11,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        12,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      )
    ]
  ),
  new Restaurant(
    3,
    'La Dolce Vita Trattoria',
    italianFoodImage,
    ['Italiana'],
    4.6,
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    '/perfil3',
    [
      new Product(
        13,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        14,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        15,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        16,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        17,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        18,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      )
    ]
  ),
  new Restaurant(
    4,
    'La Dolce Vita Trattoria',
    italianFoodImage,
    ['Italiana'],
    4.6,
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    '/perfil4',
    [
      new Product(
        19,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        20,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        21,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        22,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        23,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        24,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      )
    ]
  ),
  new Restaurant(
    5,
    'La Dolce Vita Trattoria',
    italianFoodImage,
    ['Italiana'],
    4.6,
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    '/perfil5',
    [
      new Product(
        25,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        26,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        27,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        28,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        29,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        30,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      )
    ]
  ),
  new Restaurant(
    6,
    'La Dolce Vita Trattoria',
    italianFoodImage,
    ['Italiana'],
    4.6,
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    '/perfil6',
    [
      new Product(
        31,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        32,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        33,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        34,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        35,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      ),
      new Product(
        36,
        'Pizza Marguerita',
        pizzaImage,
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
      )
    ]
  )
]
