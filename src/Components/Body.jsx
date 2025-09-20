// import RestaurentCard from "./RestaurantCard";
// import { useEffect, useState } from "react";
// import { RES_URL } from "../utils/constants";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import Search from "./Search";


// // import MockRestaurants from "../utils/MockRestaurants";
// // This is the body component which contains the search bar and restaurant cards

// const Body = () => {
//   const [Listofrestaurant, setListofrestaurant] = useState([]);

//   const [filteredRestaurant, setfilteredRestaurant] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);
//   const fetchData = async () => {
//     const data = await fetch(
//       // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//       RES_URL // import from constants
//     );
//     const json = await data.json();
//     const restaurant = json || [];
//     // json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
//     setListofrestaurant(restaurant);
//     setfilteredRestaurant(restaurant);
//   };
//   const onlineStatus = useOnlineStatus();

//   if (onlineStatus === false) {
//     return (
//       <>
//         <p>Looks like you are offline, please check your internet connection</p>
//         ;
//         <Shimmer />
//       </>
//     );
//   }

//   // if(Listofrestaurant.length === 0) {
//   //   return <Shimmer />;

//   // The previous approach (using if and return) works, but it's not the best practice.
//   // It's better to use the ternary operator below because it's more concise and improves readability.
//   return Listofrestaurant.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <div className="px-4 ">
//       <div className="flex flex-col items-start justify-between gap-4 p-4 md:flex-row md:items-center">
//         <Search
//           Listofrestaurant={Listofrestaurant}
//           setfilteredRestaurant={setfilteredRestaurant}
//         />
//         <div className="flex gap-7 ">
//           <button
//             className="px-4 py-2 mt-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 sm:mt-0"
//             onClick={() => {
//               setfilteredRestaurant(Listofrestaurant);
//             }}
//           >
//             All Restaurants
//           </button>

//           <button
//             className="px-4 py-2 mt-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 sm:mt-0"
//             onClick={() => {
//               const filteredList = Listofrestaurant.filter(
//                 (res) => res.info.avgRating > 4.3
//               );
//               setfilteredRestaurant(filteredList);
//             }}
//           >
//             Top Rated Restaurants
//           </button>
//         </div>
//       </div>
//       <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {/* restaurent card */}
//         {filteredRestaurant.map((restaurant) => (
//           <Link
//             key={restaurant.info.id}
//             to={"/restaurant/" + restaurant.info.id}
//           >
//             <RestaurentCard resData={restaurant} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Body;




// with framer motion  ----

import RestaurentCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { RES_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Search from "./Search";
import { motion } from "framer-motion";

const Body = () => {
  const [Listofrestaurant, setListofrestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_URL);
    const json = await data.json();
    const restaurant = json || [];
    setListofrestaurant(restaurant);
    setfilteredRestaurant(restaurant);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <>
        <p className="font-medium text-center text-red-600">
          Looks like you are offline, please check your internet connection
        </p>
        <Shimmer />
      </>
    );
  }

  if (Listofrestaurant.length === 0) return <Shimmer />;

  return (
    <div className="px-4">
      {/* Top Section */}
      <div className="flex flex-col items-start justify-between gap-4 p-4 md:flex-row md:items-center">
        <Search
          Listofrestaurant={Listofrestaurant}
          setfilteredRestaurant={setfilteredRestaurant}
        />
        <div className="flex gap-7">
          <button
            className="px-4 py-2 transition bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
            onClick={() => setfilteredRestaurant(Listofrestaurant)}
          >
            All Restaurants
          </button>

          <button
            className="px-4 py-2 transition bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200"
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

      {/* Cards Section with scroll animation */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredRestaurant.map((restaurant) => (
          <motion.div
            key={restaurant.info.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // triggers when 20% of card is visible
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.04, y: -5 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link to={"/restaurant/" + restaurant.info.id}>
              <RestaurentCard resData={restaurant} />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Body;