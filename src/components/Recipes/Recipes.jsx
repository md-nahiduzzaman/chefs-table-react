import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({ handleWantToCook }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  return (
    <div className="w-[75%]">
      <div>
        <h1>Our Recipes</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
      </div>
      <div className=" grid grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            recipe={recipe}
            handleWantToCook={handleWantToCook}
          ></Recipe>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
