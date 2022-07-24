
import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { Cart } from "./components/Cart/Cart";

function App() {

const [cartisShown, setcartishown]=useState(false)


const showCardHandler=()=> {
  setcartishown(true)
}

const hideCartHandler=()=> {
  setcartishown(false)
}


  return (
    <>
     <Header onShowCart={showCardHandler}/>
     <main>
      <Meals />
     </main>
     {cartisShown &&<Cart onClose={hideCartHandler} />}
    </>
  );
}

export default App;
