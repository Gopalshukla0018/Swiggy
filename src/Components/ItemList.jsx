import CDN_URL from "../utils/constants";
const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200  border-b-2 text-left flex justify-between"
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
            <div className="absolute  ">
              <button
                className="bg-white shadow-lg cursor-pointer text-black-400 rounded-lg px-4 mx-17 my-15 py-2 "
                onClick={() => alert("Feature coming soon")}
              >
                Add
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-30 rounded-xl block ml-auto "
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
