//3-15
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  

  if (resInfo === null) {

    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.[0]?.data.cards?.[2]?.card?.card?.info || {};
  const itemCards =
    resInfo?.[0]?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card.itemCards || [];

  const categories =
    resInfo?.[0]?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => {
        return (
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          // c.card?.card?.["@type"] ===
          //   "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );
      }
    );


  return (
    <div className="text-center ">
      <h1 className="my-6 text-2xl font-bold">{name}</h1>
      <p className="mb-4 text-lg font-bold text-gray-600">
        {cuisines?.join(",")} - {costForTwoMessage}
      </p>

      {/* categories accordions */}
      {categories?.map((category, index) => {
        return (
          <RestaurantCategory
            key={category?.card.card.id}
            data={category?.card.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => {    
              setShowIndex(index==showIndex?null : index)
             }}  
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
