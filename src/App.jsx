import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [cart, setCart] = useState([]);
  //console.log(cart);

  const [showAlert, setShowAlert] = useState(false);

  const handleWantToCook = (recipe) => {
    const isExist = cart.find((item) => item.id == recipe.id);
    if (!isExist) {
      setCart([...cart, recipe]);
    } else {
      setShowAlert(true);
    }
    // console.log("click", recipe);
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
      {showAlert && (
        <div className="toast toast-top toast-end bg-red-400 rounded-full">
          <div className="alert alert-info">
            <span>item already exist</span>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
