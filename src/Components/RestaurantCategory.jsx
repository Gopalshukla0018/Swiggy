import ItemList from "./ItemList";


ItemList;
const RestaurantCategory = ({ data }) => {
 

  const handleOnclick = () => {
    console.log("clicked");
    
  };

  return (
    <div>
      <div className="items-center w-6/12 px-4 py-3 mx-auto my-4 transition duration-200 rounded-lg shadow-sm cursor-pointer bg-gray-50 hover:bg-gray-100">
        <div className="flex justify-between">
          <span className="text-lg font-semibold text-gray-800">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-xl" onClick={handleOnclick}>
            🔽
          </span>
        </div>
       
       <ItemList items={data.itemCards} />
        
      </div>

      {/* accordion list */}
    </div>
  );
};

export default RestaurantCategory;
