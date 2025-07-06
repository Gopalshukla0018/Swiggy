import RestaurentCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import MockRestaurants from "../utils/MockRestaurants";
// This is the body component which contains the search bar and restaurant cards

const Body = () => {
  const [Listofrestaurant, setListofrestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
    // setListofrestaurant(restaurants);
    // setfilteredRestaurant(restaurants);
    // console.log(mockRestaurants);
    // console.log(Listofrestaurant);
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://swiggy-clone-api-vfc9.onrender.com/restaurants"
    );

    const json = await data.json();
    const restaurant = json || [];
    // json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setListofrestaurant(restaurant);
    setfilteredRestaurant(restaurant);
    console.log(restaurant);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <>
        <p>Looks like you are offline, please check your internet connection</p>
        ;
        <Shimmer />
      </>
    );
  }

  // if(Listofrestaurant.length === 0) {
  //   return <Shimmer />;

  // The previous approach (using if and return) works, but it's not the best practice.
  // It's better to use the ternary operator below because it's more concise and improves readability.
  return Listofrestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="max-w-screen-xl body">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center p-4 m-4">
          <input
            className="w-full max-w-xs p-2 m-2 border border-black rounded-lg"
            type="text"
            placeholder="Search Restaurants..."
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-3 m-4 bg-green-100 rounded-lg cursor-pointer hover:bg-green-200"
            onClick={() => {
              const filteredres = Listofrestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRestaurant(filteredres);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex justify-end p-4 m-4">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
            onClick={() => {
              const filteredList = Listofrestaurant.filter(
                (res) => res.info.avgRating > 4.3
              );
              setfilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="grid justify-center grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* restaurent card */}
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurentCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
