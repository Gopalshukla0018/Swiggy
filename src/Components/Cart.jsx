// import { useDispatch, useSelector } from "react-redux";
// import ItemList from "./ItemList";
// import { clearCart } from "../utils/cartSlice";

// const cart = () => {
//   const cartItems = useSelector((store) => store.cart.items);
//   const dispatch = useDispatch();
//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };
//   return (
//     <> 
//     <div>
//       <div className="w-6/12 p-4 m-auto text-center max-sm:w-10/12">
//         {<ItemList items={cartItems} />}
//       </div>
      
//       <button
//         className="fixed p-2 text-white transition duration-150 ease-in-out transform bg-gray-600 border rounded-md cursor-pointer hover:bg-gray-900 right-10 bottom-3 active:scale-95 active:bg-gray-700"
//         onClick={handleClearCart}
//       >
//         {" "}
//         Clear Cart
//         {cartItems.length === 0 && (
//           <h1 >🛒 Cart is on a diet! Add some delicious items 😎</h1>
//         )}
//       </button>
//       </div>
//     </>
//   );
// };

// export default cart;


import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalAmount = cartItems.reduce((total, item) => {
    const price = item.card.info.price
      ? item.card.info.price / 100
      : item.card.info.defaultPrice / 100;
    return total + price * item.quantity;
  }, 0);

  return (
    <div className="w-6/12 p-4 m-auto text-center max-sm:w-10/12">
      <ItemList items={cartItems} />

      {cartItems.length > 0 ? (
        <>
          <h2 className="text-lg font-bold mt-4">
            Total: ₹{totalAmount.toFixed(2)}
          </h2>
          <button
            className="mt-4 p-2 text-white bg-red-600 rounded-md hover:bg-red-700"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </>
      ) : (
        <h1 className="mt-4">
          🛒 Cart is on a diet! Add some delicious items 😎
        </h1>
      )}
    </div>
  );
};

export default Cart;
