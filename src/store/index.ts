import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cart'
import restaurantApi from '../services/restaurantApi'

export type RootReducer = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [restaurantApi.reducerPath]: restaurantApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restaurantApi.middleware)
})
