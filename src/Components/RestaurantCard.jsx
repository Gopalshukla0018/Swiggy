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
    <div
      className="w-56 h-full p-2 m-4 rounded-lg hover:scale-95"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="object-cover w-full h-40 rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="mt-2 text-lg font-bold">{name}</h3>
      <h4 className="text-sm text-gray-700">{cuisines.join(", ")}</h4>
      <h4 className="font-semibold text-yellow-600">{avgRating} stars</h4>
      <h4 className="text-gray-800">{costForTwo}</h4>
      <h4 className="text-gray-500">{deliveryTime}</h4>
    </div>
  );
};
export default RestaurentCard;
// This component is used to display the restaurant card with its details.
