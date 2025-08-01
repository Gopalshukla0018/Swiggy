import { useSelector } from "react-redux";
import ItemList from "./ItemList";
const cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="p-4 m-4 text-center ">
      <h1 className="text-xl font-bold">Cart</h1>
      {<ItemList items={cartItems} />}
    </div>
  );
};

export default cart;
