import React from 'react'
import "./Mealitem.css"
import { MealItemForm } from './MealItemForm'

export const MealItem = (props) => {
  return (
    <div className="meallist">
    <div>
    <ul key={props.id}>
        <li style={{font:'bold'}}><b>{props.name}</b></li>
        <li style={{fontSize:'0.8rem'}}>{props.description}</li>
        <li style={{color:'red'}}>${props.price}</li>
    </ul>
    </div>
    <div>
       <MealItemForm id={props.id}/> 
       
    </div>
    
  
    </div>
  )
}
