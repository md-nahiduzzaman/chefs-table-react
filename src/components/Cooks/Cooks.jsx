import CookList from "../CookList/CookList";

const Cooks = ({ cart, handleCookingList, handleRemoveItem }) => {
  console.log(cart);
  return (
    <div className="flex flex-col items-center mb-14">
      <h1 className="font-semibold text-xl">Want to cook: {cart.length} </h1>
      <hr className="bg-gray-200  w-[70%]" style={{ opacity: "0.6" }} />
      <div className="overflow-x-auto">
        <table className="table text-gray-500">
          {/* head */}
          <thead className="font-fira">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <CookList
                key={idx}
                item={item}
                handleCookingList={handleCookingList}
                handleRemoveItem={handleRemoveItem}
              ></CookList>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cooks;
