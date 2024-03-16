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
    <tr>
      <th>#</th>
      <td>{recipe_name}</td>
      <td>{preparing_time}</td>
      <td>{calories}</td>
      <button
        className="btn bg-[#0BE58A]"
        onClick={() => {
          handleCookingList(item, preparing_time, calories),
            handleRemoveItem(id);
        }}
      >
        Preparing
      </button>
    </tr>
  );
};

export default CookList;
