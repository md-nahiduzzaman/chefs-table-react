import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import Sidebar from "./components/Sidebar/Sidebar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);

  const handleWantToCook = (recipe) => {
    const isExist = cart.find((item) => item.id == recipe.id);
    if (!isExist) {
      setCart([...cart, recipe]);
    } else {
      // setShowAlert(true);
      toast("item already exist");
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
            Explore a tantalizing array of meticulously crafted dishes in Our
            Recipes section, perfect for every culinary adventure.
          </p>
        </div>
        <div className="flex gap-10 mb-24">
          <Recipes handleWantToCook={handleWantToCook}></Recipes>
          <Sidebar cart={cart} handleRemoveItem={handleRemoveItem}></Sidebar>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
