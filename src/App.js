
import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { Cart } from "./components/Cart/Cart";
import { CartProvider } from "./store/CartProvider";

function App() {

const [cartisShown, setcartishown]=useState(false)


const showCardHandler=()=> {
  setcartishown(true)
}

const hideCartHandler=()=> {
  setcartishown(false)
}


  return (
    
    <CartProvider>
     <Header onShowCart={showCardHandler}/>
     <main>
      <Meals />
     </main>
     {cartisShown &&<Cart onClose={hideCartHandler} />}
     </CartProvider>
  );
}

export default App;
