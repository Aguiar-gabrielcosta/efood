import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
  reducers: {
    open: (store) => {
      store.open = true
    },
    close: (store) => {
      store.open = false
    },
    add: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      )

      state.items.splice(itemIndex, 1)
    }
  }
})

export default cartSlice.reducer
export const { open, close, add, remove } = cartSlice.actions
