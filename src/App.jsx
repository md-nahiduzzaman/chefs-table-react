import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [cart, setCart] = useState([]);
  //console.log(cart);

  const handleWantToCook = (recipe) => {
    // console.log("click", recipe);
    setCart([...cart, recipe]);
  };

  const handleRemoveItem = (id) => {
    const remainingCart = cart.filter((item) => item.id !== id);
    setCart(remainingCart);
  };

  return (
    <>
      <div className="container mx-auto">
        <Header></Header>
      </div>
      <div className="container mx-auto flex">
        <Recipes handleWantToCook={handleWantToCook}></Recipes>
        <Sidebar cart={cart} handleRemoveItem={handleRemoveItem}></Sidebar>
      </div>
    </>
  );
}

export default App;
