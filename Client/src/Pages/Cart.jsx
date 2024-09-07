import React from 'react'
import Header from '../Components/header/Header'
import CartPage from '../Components/cartPage/CartPage'

const Cart = () => {
  return (
    <>
      <Header header={'YOUR CART'} />
      <CartPage />
    </>
  )
}

export default Cart