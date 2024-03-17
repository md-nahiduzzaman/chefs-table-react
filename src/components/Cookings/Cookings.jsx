import CookingList from "../CookingList/CookingList";

const Cookings = ({ cookingsItem, totalTime, totalCalories }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-semibold text-xl">
        Currently cooking: {cookingsItem.length}
      </h1>
      <hr className="bg-gray-200  w-[70%]" style={{ opacity: "0.6" }} />
      <div className="overflow-x-auto">
        <table className="table text-gray-500">
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
      <div>
        <p>
          Total Time = <span>{totalTime}</span> minutes
        </p>
        <p>
          Total Calories = <span>{totalCalories} calories</span>
        </p>
      </div>
    </div>
  );
};

export default Cookings;
