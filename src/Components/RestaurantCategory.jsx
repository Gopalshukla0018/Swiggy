import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    // This function toggles the accordion open or closed
    setShowIndex();
  };

  return (
    <div>
      {/* Accordion Container */}
      {/* - `w-full`: Takes full width on mobile screens.
        - `md:w-8/12 lg:w-7/12`: Adjusts width for medium and large screens.
        - `mx-auto`: Keeps it centered.
        - `bg-white shadow-lg`: Adds a card-like appearance.
      */}
      <div className="w-full p-4 mx-auto my-4 bg-white rounded-lg shadow-lg md:w-8/12 lg:w-7/12">
        {/* Accordion Header */}
        <div className="flex items-center justify-between cursor-pointer" onClick={handleClick}>
          <span className="text-lg font-bold text-gray-800">
            {data.title} ({data.itemCards.length})
          </span>
          {/* Arrow Icon with smooth rotation */}
          <span className={`transform transition-transform duration-300 ${showItems ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </div>

        {/* Accordion Body: Shows the item list when `showItems` is true */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;