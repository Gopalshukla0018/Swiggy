import { useState } from "react";
import ItemList from "./ItemList";

ItemList;
const RestaurantCategory = ({ data , showItems}) => {

  const handleOnclick = () => {
    // setShowItems(!showItems);

  };

  return (
    <div>
      <div className="items-center w-7/12 px-4 py-3 mx-auto my-4 transition duration-200 rounded-lg  ">
        <div className="flex justify-between cursor-pointer" onClick={handleOnclick}>
          <span className="text-lg font-semibold text-gray-800">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-xl" >
            🔽
          </span>
        </div>

       {  showItems && <ItemList items={data.itemCards} />}
      </div>

      {/* accordion list */}
    </div>
  );
};

export default RestaurantCategory;
