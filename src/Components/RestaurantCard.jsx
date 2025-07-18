import CDN_URL from "../utils/constants";


const RestaurentCard = (props) => {
  const { resData } = props;
  

 
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
    <div className="flex flex-col items-stretch w-full p-4 transition-transform duration-200 bg-white rounded-lg shadow hover:scale-105">
      <img
        className="object-cover w-full h-40 rounded res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="mt-2 text-lg font-bold truncate" title={name}>
        {name}
      </h3>
      <h4
        className="text-sm text-gray-700 truncate"
        title={cuisines.join(", ")}
      >
        {cuisines.join(", ")}
      </h4>
      <h4 className="font-semibold text-yellow-600">{avgRating} stars</h4>
      <h4 className="text-gray-800">{costForTwo}</h4>
      <h4 className="text-gray-500">{deliveryTime}</h4>
     
    </div>
  );
};
export default RestaurentCard;
// This component is used to display the restaurant card with its details.
