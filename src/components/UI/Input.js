import React from 'react'
import "./Input.css"

export const Input = (props) => {
    console.log(props)
  return (
    <div>
    <label htmlFor={props.input.id} style={{marginRight:"0.5rem"}}>
 {props.label}
    </label>
    <input  {...props.input}/>

    </div>
  )
}
