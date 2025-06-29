import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setInfo] = useState(null);

  useEffect(() => {
    console.log("Fetching restaurant menu...");
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4552521&lng=77.5046101&restaurantId=625180&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setInfo(json.data);
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <h1>{resInfo?.cards?.[2]?.card?.card?.info?.name}</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Butter Naan</li>
        <li>Paneer Tikka</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
