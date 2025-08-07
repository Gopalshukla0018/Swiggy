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
    <div>
      <div className="relative w-6/12 p-4 m-auto text-center max-sm:w-10/12 ">
        {<ItemList items={cartItems} />}
      </div>
      
      <button
        className="absolute p-2 text-white transition duration-150 ease-in-out transform bg-gray-600 border rounded-md cursor-pointer hover:bg-gray-900 right-10 bottom-3 active:scale-95 active:bg-gray-700"
        onClick={handleClearCart}
      >
        {" "}
        Clear Cart
        {cartItems.length === 0 && (
          <h1 >🛒 Cart is on a diet! Add some delicious items 😎</h1>
        )}
      </button>
      </div>
    </>
  );
};

export default cart;
