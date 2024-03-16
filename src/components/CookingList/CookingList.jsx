const CookingList = ({ item }) => {
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
    <div className="mb-32">
      <h1>{recipe_name}</h1>
      <p>{preparing_time}</p>
      <p>{calories}</p>
    </div>
  );
};

export default CookingList;
