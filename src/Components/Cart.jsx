import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
    
  };
  return (
    <>
      <div className="relative w-6/12 p-4 m-auto text-center ">
        {<ItemList items={cartItems} />}
      </div>
      <button
         className="absolute p-2 text-white transition duration-150 ease-in-out transform bg-gray-600 border rounded-md cursor-pointer hover:bg-gray-900 right-10 bottom-3 active:scale-95 active:bg-gray-700"
        onClick={handleClearCart}
      >
        {" "}
        Clear Cart
      </button>
    </>
  );
};

export default cart;
