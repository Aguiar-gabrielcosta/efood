import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Restaurant from '../models/restaurant'
import Purchase from '../models/purchase'

type PurchaseReturn = {
  orderId: string
}

const restaurantApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantList: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurant: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    }),
    postPurchase: builder.mutation<PurchaseReturn, Purchase>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export default restaurantApi

export const {
  useGetRestaurantListQuery,
  useGetRestaurantQuery,
  usePostPurchaseMutation
} = restaurantApi
