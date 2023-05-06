import React from 'react'
import CartModal from "./CartModal";


const CartBucket = ({onClick}) => {
  return (
    <CartModal onClick={onClick}>
      <h1>Cart</h1>
    </CartModal>
  )
}

export default CartBucket
