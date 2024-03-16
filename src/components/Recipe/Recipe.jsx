const Recipe = ({ recipe, handleWantToCook }) => {
  const {
    id,
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;

  return (
    <div className=" p-4 border-2 border-gray-700">
      <div className="border-2 border-gray-700">
        <div className="m-2">
          <img src={recipe_image} alt="Shoes" className="" />
        </div>
        <div>
          <h2 className="">{recipe_name}</h2>
          <p>{short_description}</p>
          <div className="divider"></div>
          <p>Ingredients: {ingredients.length}</p>
          <ul className="list-disc">
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
          </ul>
          <div className="divider"></div>
          <div className="flex justify-between gap-3">
            <div className="flex gap-2">
              <img src="../../../public/image/time.svg" alt="" />
              <p>
                <span>{preparing_time}</span> minutes
              </p>
            </div>
            <div className="flex gap-2">
              <img src="../../../public/image/fire.svg" alt="" />
              <p>
                <span>{calories}</span> calories
              </p>
            </div>
          </div>
          <div className="">
            <button
              className="btn bg-[#0BE58A] border-none rounded-full"
              onClick={() => handleWantToCook(recipe)}
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
