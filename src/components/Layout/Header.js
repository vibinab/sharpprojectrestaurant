import React from 'react'
import headerimage from "../../assets/meals.jpg"
import "./Header.css"
import HeaderCartButton from './HeaderCartButton'

export default function Header(props) {
  return (
    <>
      <header className='header'>
       
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
        
      </header>
      <div className='header-image'>
        <img src={headerimage} alt="table"></img>
      </div>

    </>
  )
}
