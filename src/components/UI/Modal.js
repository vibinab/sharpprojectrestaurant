import React from 'react' 

import ReactDOM from  'react-dom'

import classes from "./Modal.module.css"


const Backdrop=(props)=>{
  return <div className={classes.backdrop} />
};

const ModalOverlay=props=> {

  return (
  <div className={classes.modal}>

    <div className={classes.content}>{props.children}</div>
  </div>
  );
}


const portalElment =document.getElementById('overlays')

export const Modal = (props) => {
  return (
    <>
    {
      ReactDOM.createPortal(<Backdrop />, portalElment)
    }
    {
      ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElment)
    }
      
    </>
  )
}
