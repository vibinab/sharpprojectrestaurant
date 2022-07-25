import React, { useState } from 'react'
import CartContext from './cart-context'


// let items=[]
export const CartProvider = (props) => {

   const [items, updateitems]=useState([])

   
 const addItemToCartHandler=(item)=> {
   updateitems([...items,item])
   console.log(cartContext)
 };
 const removeItemFromCartHandler=(id)=>{}
 const cartContext= {
    items:items,
    addItem:addItemToCartHandler,
    removeItem:removeItemFromCartHandler,
    message:'clic here'
 }

  return (
   <CartContext.Provider value={cartContext}>
    {props.children}
   </CartContext.Provider>
  )
}
export default CartProvider