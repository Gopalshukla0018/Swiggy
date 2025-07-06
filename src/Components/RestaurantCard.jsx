import CDN_URL from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;

  // Defensive: If restaurant data is undefined/null, show nothing
  if (!resData || !resData.info) return null;
  const {
    cloudinaryImageId,
    name,
    cuisines = [],
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData.info;
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-xs bg-white p-4 m-4 rounded-lg shadow hover:scale-105 transition-transform duration-200">
      <img
        className="res-logo w-full h-40 object-cover rounded"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold text-lg mt-2">{name}</h3>
      <h4 className="text-gray-700 text-sm">{cuisines.join(", ")}</h4>
      <h4 className="text-yellow-600 font-semibold">{avgRating} stars</h4>
      <h4 className="text-gray-800">{costForTwo}</h4>
      <h4 className="text-gray-500">{deliveryTime}</h4>
    </div>
  );
};
export default RestaurentCard;
// This component is used to display the restaurant card with its details.
