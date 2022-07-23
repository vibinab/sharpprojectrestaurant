import React from 'react'
import "./Availiable.css"

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

export default function Availiable() {
  return (
    <section>
        {
            DUMMY_MEALS.map(meal=> {
               return (
               <div className="meallist">
                <ul key={meal.id}>
                    <li style={{font:'bold'}}><b>{meal.name}</b></li>
                    <li style={{fontSize:'0.8rem'}}>{meal.description}</li>
                    <li style={{color:'red'}}>${meal.price}</li>
                </ul>
                <hr></hr>
                </div>
               ) 
            })
        }
    </section>
  )
}
