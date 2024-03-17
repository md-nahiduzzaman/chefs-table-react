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
      <div className="container mx-auto mb-24">
        <Header></Header>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-14">
          <h1 className="font-semibold text-4xl">Our Recipes</h1>
          <p className="w-[65%] text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
            vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
            elementum mauris aenean neque.{" "}
          </p>
        </div>
        <div className="flex gap-10 mb-28">
          <Recipes handleWantToCook={handleWantToCook}></Recipes>
          <Sidebar cart={cart} handleRemoveItem={handleRemoveItem}></Sidebar>
        </div>
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
