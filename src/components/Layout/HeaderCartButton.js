import React from 'react'

import "./HeaderCartButton.css"

export default function HeaderCartButton() {
  return (
    <>
     <button className='cart-button'> 
     <span>Your Cart</span>
     <span className='card-number'>3</span>
     </button>
    </>
  )
}
