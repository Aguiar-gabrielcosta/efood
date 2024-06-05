import { createSlice } from '@reduxjs/toolkit'

type SideBarState = {
  open: boolean
}

const initialState: SideBarState = {
  open: false
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
    }
  }
})

export default sideBarSlice.reducer
export const { open, close } = sideBarSlice.actions
