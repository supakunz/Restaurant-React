import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cart: []
}

const cartSlice = createSlice({
  name: "cartlist",
  initialState,
  reducers: {
    addCart: (state, action) => {
      if (localStorage.getItem('cart')) {
        state.cart = [...JSON.parse(localStorage.getItem('cart'))]
      }
      state.cart.push(action.payload)
      localStorage.setItem('cart', JSON.stringify(state.cart))
      // console.log(current(state))
    },
    removeCart: (state, action) => {
      state.cart.splice(action.payload, 1) // delete data
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    loadItem: (state) => {
      if (localStorage.getItem('cart')) {
        state.cart = [...JSON.parse(localStorage.getItem('cart'))]
      }
    }
  }
})

export const { addCart, removeCart, loadItem } = cartSlice.actions

export default cartSlice.reducer