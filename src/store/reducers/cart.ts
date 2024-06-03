import { createSlice } from '@reduxjs/toolkit'
import Product from '../../models/products'

type CartState = {
  items: Product[]
  open: boolean
}

const initialState: CartState = {
  items: [],
  open: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {}
})

export default cartSlice.reducer
