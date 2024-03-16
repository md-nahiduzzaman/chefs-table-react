import CookList from "../CookList/CookList";

const Cooks = ({ cart, handleCookingList, handleRemoveItem }) => {
  console.log(cart);
  return (
    <div>
      <h1>Want to cook: {cart.length} </h1>
      {cart.map((item, idx) => (
        <CookList
          key={idx}
          item={item}
          handleCookingList={handleCookingList}
          handleRemoveItem={handleRemoveItem}
        ></CookList>
      ))}
    </div>
  );
};

export default Cooks;
