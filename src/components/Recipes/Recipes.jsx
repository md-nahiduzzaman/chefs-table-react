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
    <div
      className="w-[75%] rounded-lg"
      style={{ border: "1px solid  rgba(40, 40, 40, 0.2)  " }}
    >
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
