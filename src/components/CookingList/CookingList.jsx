const CookingList = ({ item }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = item;
  return (
    <tr className="font-fira">
      <th>#</th>
      <td>{recipe_name}</td>
      <td>{preparing_time}</td>
      <td>{calories}</td>
    </tr>
  );
};

export default CookingList;
