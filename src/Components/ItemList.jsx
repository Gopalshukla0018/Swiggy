import CDN_URL from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between p-2 m-2 text-left border-b-2 border-gray-200"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span> {item.card.info.name} </span>
              <span
                className="text-lg font-semibold "
                style={{ color: "rgba(2, 6, 12, 0.75)" }}
              >
                {item.card.info.name}
              </span>
              <span>
                - &#8377;
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute ">
              <button
                className="px-4 py-2 bg-white rounded-lg shadow-lg cursor-pointer text-black-400 mx-17 my-22 "
                // onClick={() => alert("Feature coming soon")}
                onClick={()=> handleAddItem(item)}
              >
                Add
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="block ml-auto w-30 h-28 rounded-xl "
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
