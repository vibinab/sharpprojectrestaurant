import React from 'react'
import { Input } from '../UI/Input'
import "./MealItemForm.css"

export const MealItemForm = (props) => {

 function inputclickhandler(){
    console.log(props.id)
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
     <button type="button" className='addbutton' onClick={inputclickhandler}>+Add</button>

     </form>

    </>
  )
}
