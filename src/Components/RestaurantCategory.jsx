const RestaurantCategory = ({ data }) => {
  console.log(data);

  const handleOnclick=()=>{
    console.log("down arrow clicked");
    
    
  }

  return (
    <div>
      <div className="flex items-center justify-between w-6/12 px-4 py-3 mx-auto my-4 transition duration-200 rounded-lg shadow-sm cursor-pointer bg-gray-50 hover:bg-gray-100">
        <span className="text-lg font-semibold text-gray-800">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-xl" onClick={handleOnclick}>🔽</span>
      </div>
    </div>
  );
};

export default RestaurantCategory;
