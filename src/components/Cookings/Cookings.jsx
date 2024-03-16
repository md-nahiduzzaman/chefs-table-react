import CookingList from "../CookingList/CookingList";

const Cookings = ({ cookingsItem, totalTime, totalCalories }) => {
  return (
    <div>
      <h1>Currently cooking: {cookingsItem.length}</h1>
      {cookingsItem.map((item, idx) => (
        <CookingList key={idx} item={item} totalTime={totalTime}></CookingList>
      ))}
      <p>total time:{totalTime}</p>
      <p>total calori:{totalCalories}</p>
    </div>
  );
};

export default Cookings;
