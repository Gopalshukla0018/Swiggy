import { useDispatch, useSelector } from "react-redux";
import { addItem, incrementQuantity, decrementQuantity } from "../utils/cartSlice";
import CDN_URL  from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

 
  const cartItems = useSelector((store) => store.cart.items);

  
  const handleIncrement = (itemId) => {
    dispatch(incrementQuantity({ id: itemId }));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementQuantity({ id: itemId }));
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };


  return (
    <div className="pt-2">
      {items.map((item) => {
       
        const cartItem = cartItems.find(
          (ci) => ci.card.info.id === item.card.info.id
        );
        const quantity = cartItem ? cartItem.quantity : 0;

        return (
          <div
            key={item.card.info.id}
            className="flex items-center justify-between p-2 my-2 text-left border-b-2 border-gray-200 last:border-none"
          >
       
            <div className="w-9/12 pr-4">
              <div className="py-2">
                <span className="font-semibold text-gray-800">
                  {item.card.info.name}
                </span>
                <span className="block mt-1 text-sm text-gray-700">
                  ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs text-gray-500">
                {item.card.info.description}
              </p>
            </div>

            / 
            <div className="relative flex flex-col items-center justify-center w-3/12">
              {item.card.info.imageId && (
                 <img
                    src={CDN_URL + item.card.info.imageId}
                    className="object-cover h-24 rounded-md w-28"
                    alt={item.card.info.name}
                  />
              )}

            
              <div className="absolute -bottom-2">
                {quantity === 0 ? (
                  <button
                    className="px-4 py-1.5 text-sm font-semibold text-green-600 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg active:scale-95"
                    onClick={() => handleAddItem(item)}
                  >
                    ADD
                  </button>
                ) : (
                  <div className="flex items-center justify-between w-[90px] px-2 py-1.5 text-sm font-semibold bg-white border border-gray-300 rounded-lg shadow-md">
                    <button
                      className="text-lg font-bold text-red-500"
                      onClick={() => handleDecrement(item.card.info.id)}
                    >
                      -
                    </button>
                    <span className="text-green-600">{quantity}</span>
                    <button
                      className="text-lg font-bold text-green-600"
                      onClick={() => handleIncrement(item.card.info.id)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;