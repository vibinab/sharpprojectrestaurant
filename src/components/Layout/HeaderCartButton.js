import React from 'react'

import "./HeaderCartButton.css"

export default function HeaderCartButton(props) {
  return (
    <>
     <button className='cart-button' onClick={props.onClick}> 
     <span>Your Cart</span>
     <span className='card-number'>3</span>
     </button>
    </>
  )
}
