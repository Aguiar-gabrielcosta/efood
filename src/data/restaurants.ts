import Restaurant from '../models/restaurant'
import sushiImage from '../assets/images/sushi.png'
import italianFoodImage from '../assets/images/italian-food.png'

export const restaurantsData: Restaurant[] = [
  new Restaurant(
    1,
    'Hioki Sushi',
    sushiImage,
    ['Destaque da semana', 'Japonesa'],
    4.9,
    'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    '/perfil1'
  ),
  new Restaurant(
    2,
    'La Dolce Vita Trattoria',
    italianFoodImage,
    ['Italiana'],
    4.6,
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    '/perfil2'
  ),
  new Restaurant(
    3,
    'La Dolce Vita Trattoria',
    italianFoodImage,
    ['Italiana'],
    4.6,
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    '/perfil3'
  ),
  new Restaurant(
    4,
    'La Dolce Vita Trattoria',
    italianFoodImage,
    ['Italiana'],
    4.6,
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    '/perfil4'
  ),
  new Restaurant(
    5,
    'La Dolce Vita Trattoria',
    italianFoodImage,
    ['Italiana'],
    4.6,
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    '/perfil5'
  ),
  new Restaurant(
    6,
    'La Dolce Vita Trattoria',
    italianFoodImage,
    ['Italiana'],
    4.6,
    'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    '/perfil6'
  )
]
