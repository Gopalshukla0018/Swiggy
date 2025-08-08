import CDN_URL from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between p-2 m-2 text-left border-b-2 border-gray-200"
        >
        
          <div className="w-8/12 pr-2">
            <div className="py-2">
              <span className="block font-semibold">
                {item.card.info.name}
              </span>
              <span className="text-sm text-gray-700">
                ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="overflow-y-auto text-xs text-gray-600 max-h-24">
              {item.card.info.description}
            </p>
          </div>

          {/* RIGHT PART */}
          <div className="relative flex flex-col items-center w-4/12">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="object-cover w-24 h-24 mb-2 rounded-lg"
              alt={item.card.info.name}
            />
            <button
              className="px-3 py-1 text-sm text-black transition-all duration-150 ease-in-out bg-white border border-gray-400 rounded-lg shadow hover:shadow-md active:scale-90"
              onClick={() => handleAddItem(item)}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

