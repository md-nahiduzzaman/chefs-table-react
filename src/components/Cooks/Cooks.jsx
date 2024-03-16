import CookList from "../CookList/CookList";

const Cooks = ({ cart, handleCookingList, handleRemoveItem }) => {
  console.log(cart);
  return (
    <div>
      <h1>Want to cook: {cart.length} </h1>

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
