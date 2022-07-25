import React from 'react'
import classes from  './Cart.module.css';
import { Modal } from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

export const Cart = (props) => {

    // const cartitems=(
    // <ul className={classes['cart-items']}>
    //  {[{id:'c1',name:'Sushi',amount:2, price:12.99}].map((item)=>(<li>{item.name}</li>))}
    //  </ul>
    // )
    const cartcntex= useContext(CartContext)
    
    const cartitems=(
    <ul className={classes['cart-items']}>
     {cartcntex.items.map((item)=>(<li>Name:{item.name} Price:{item.price}  Qantity:{item.quantity}</li>))}
     </ul>
    )


     
  return (
    <Modal onClose={props.onClose}>
       { cartitems }
        <div className={classes.total}> 
        <span>Total Amount</span>
         <span>35.62</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button-alt']} onClick={props.onClose}>close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}
