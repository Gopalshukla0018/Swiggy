import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
// This is the body component which contains the search bar and restaurant cards

const Body = () => {
  const [Listofrestaurant, setListofrestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4552521&lng=77.5046101&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    const restaurant =
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListofrestaurant(restaurant);
    setfilteredRestaurant(restaurant);
  };

  // if(Listofrestaurant.length === 0) {
  //   return <Shimmer />;
  //

  // The previous approach (using if and return) works, but it's not the best practice.
  // It's better to use the ternary operator below because it's more concise and improves readability.
  return Listofrestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search Restaurants..."
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />

          <button
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
        <button
          className="filter-btn"
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

      <div className="res-container">
        {/* restaurent card */}
        {filteredRestaurant.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
