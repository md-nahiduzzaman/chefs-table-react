const CookList = ({ item, handleCookingList, handleRemoveItem }) => {
  const {
    id,
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = item;
  return (
    <div className="mt-32">
      <h1>{recipe_name}</h1>
      <h1>{preparing_time}</h1>
      <h1>{calories}</h1>
      <button
        onClick={() => {
          handleCookingList(item, preparing_time, calories),
            handleRemoveItem(id);
        }}
      >
        Preparing
      </button>
    </div>
  );
};

export default CookList;
