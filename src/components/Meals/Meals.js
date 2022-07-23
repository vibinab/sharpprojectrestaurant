import React from 'react'

import MealsSummary from './MealsSummary'
import Availiable from './Availiable'

export default function Meals() {
  return (
    <>
        <MealsSummary />
        <div style={{marginTop:'2rem',backgroundColor:'white',width:'80%',margin:'0 auto', borderRadius:'15px'}}>
        <Availiable/>
        </div>
        
    </>
  )
}
