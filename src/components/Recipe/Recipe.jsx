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
    <div className="p-4 rounded-lg">
      <div
        className=" rounded-lg p-4"
        style={{ border: "1px solid  rgba(40, 40, 40, 0.2)  " }}
      >
        <div className="m-2">
          <img src={recipe_image} alt="Shoes" className="w-full" />
        </div>
        <div>
          <h2 className="">{recipe_name}</h2>
          <p className="text-[#878787] font-fira">{short_description}</p>
          <hr className="bg-gray-200  w-full" style={{ opacity: "0.6" }} />
          <p className="">Ingredients: {ingredients.length}</p>
          <ul className="list-disc text-[#878787] font-fira">
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
          </ul>
          <hr className="bg-gray-200  w-full" style={{ opacity: "0.6" }} />
          <div className="flex gap-7 text-[#878787]">
            <div className="flex gap-2">
              <img src="../../../public/image/time.svg" alt="" />
              <p className="font-fira">
                <span>{preparing_time}</span> minutes
              </p>
            </div>
            <div className="flex gap-2">
              <img src="../../../public/image/fire.svg" alt="" />
              <p className="font-fira">
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
