import { useSelector } from "react-redux";
import ItemList from "./ItemList";
const cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex w-6/12 p-4 m-auto text-center ">
     
      {<ItemList items={cartItems} />}
    </div>
  );
};

export default cart;
