import React from 'react'
import classes from  './Cart.module.css';
import { Modal } from '../UI/Modal';


export const Cart = () => {

    const cartitems=(
    <ul className={classes['cart-items']}>
     {[{id:'c1',name:'Sushi',amount:2, price:12.99}].map((item)=>(<li>{item.name}</li>))}
     </ul>
    )


  return (
    <Modal>
       { cartitems }
        <div className={classes.total}> 
        <span>Total Amount</span>
         <span>35.62</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button-alt']}>close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}
