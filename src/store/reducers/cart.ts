import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Product from '../../models/products'

type CartState = {
  items: Product[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      )

      state.items.splice(itemIndex, 1)
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export default cartSlice.reducer
export const { add, remove, clear } = cartSlice.actions
