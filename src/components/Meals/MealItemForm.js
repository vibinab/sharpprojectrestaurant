import React from 'react'
import { Input } from '../UI/Input'
import "./MealItemForm.css"
import { useContext } from 'react'
import CartContext from '../../store/cart-context'

export const MealItemForm = (props) => {

  const cartcntx= useContext(CartContext)

 const addItemToCart=(event)=> {
   event.preventDefault();
  //  cartcntx.items.push(props.item)
  const quantity=document.getElementById('amount_' + props.id).value
  cartcntx.addItem({...props.item, quantity:quantity})
   console.log(cartcntx)
 }
  return (
    <>
     <form>
     
     <Input label="Amount" input={{
     id:'amount_' + props.id,
     type:'number',
     min:'1',
     max:'5',
     step:'1',
     defaultValue:'1'


     }}/>
     <button type="button" onClick={addItemToCart}className='addbutton'>+Add</button>

     </form>

    </>
  )
}
