import { useState } from "react";
import Cookings from "../Cookings/Cookings";
import Cooks from "../Cooks/Cooks";

const Sidebar = ({ cart, handleRemoveItem }) => {
  const [cookingsItem, setCookingItem] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  const handleCookingList = (item, time, calorie) => {
    setCookingItem([...cookingsItem, item]);

    const newTotalTime = totalTime + time;
    console.log(newTotalTime);
    setTotalTime(newTotalTime);

    const newTotalCalories = totalCalories + calorie;
    setTotalCalories(newTotalCalories);
  };

  return (
    <div className="w-[25%] ml-16">
      <h1>this is sidebar</h1>
      <Cooks
        cart={cart}
        handleCookingList={handleCookingList}
        handleRemoveItem={handleRemoveItem}
      ></Cooks>
      <Cookings
        cookingsItem={cookingsItem}
        totalTime={totalTime}
        totalCalories={totalCalories}
      ></Cookings>
    </div>
  );
};

export default Sidebar;
