import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SideBarState = {
  open: boolean
  view: 'cart' | 'delivery' | 'payment' | 'confirm'
}

const initialState: SideBarState = {
  open: false,
  view: 'cart'
}

const sideBarSlice = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    open: (store) => {
      store.open = true
    },
    close: (store) => {
      store.open = false
    },
    changeView: (store, action: PayloadAction<SideBarState['view']>) => {
      store.view = action.payload
    }
  }
})

export default sideBarSlice.reducer
export const { open, close } = sideBarSlice.actions
