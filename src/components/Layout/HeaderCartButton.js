import React ,{useContext} from 'react'
import CartContext from '../../store/cart-context'
import "./HeaderCartButton.css"

export default function HeaderCartButton(props) {
  const cartcontxt=useContext(CartContext)
  let quantity=0
  cartcontxt.items.forEach(item=> {
    quantity=quantity+Number(item.quantity)

  })
  return (
    <>
     <button className='cart-button' onClick={props.onClick}> 
     <span>Your Cart</span>
     <span className='card-number'>{quantity}</span>
    
     </button>
    </>
  )
}
