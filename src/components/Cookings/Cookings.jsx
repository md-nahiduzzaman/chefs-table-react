import CookingList from "../CookingList/CookingList";

const Cookings = ({ cookingsItem, totalTime, totalCalories }) => {
  return (
    <div>
      <h1>Currently cooking: {cookingsItem.length}</h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {cookingsItem.map((item, idx) => (
              <CookingList
                key={idx}
                item={item}
                totalTime={totalTime}
              ></CookingList>
            ))}
          </tbody>
        </table>
      </div>

      <p>
        Total Time = <span>{totalTime}</span> minutes
      </p>
      <p>
        Total Calories = <span>{totalCalories} calories</span>
      </p>
    </div>
  );
};

export default Cookings;
