import React from "react";
import { useState } from "react";
import Suggestions from "./Suggestions";

const search = ({ Listofrestaurant, setfilteredRestaurant }) => {
  const [searchText, setsearchText] = useState("");
  const suggestions = Listofrestaurant.filter((res) => {
    return res.info.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <>
      <div className="flex justify-between w-full max-w-lg m-2">
        <div className="relative w-full">
            
           <input
          type="text"
          className="w-full max-w-xs p-2 m-2 border border-black rounded-lg"
          placeholder="Search for restaurants"
          value={searchText}
          onChange={(e) => {
            const text = e.target.value;
            setsearchText(e.target.value);
          }}
        />
        {searchText.length > 0 && (
          <Suggestions
            suggestions={suggestions}
            // onSelect={handleSelect}
          />
        )}

        </div>
       

        <button
           className="ml-8 mt-2 px-10 py-2 h-[44px] bg-green-100 rounded-lg hover:bg-green-200"
          onClick={() => {
            const filteredList = Listofrestaurant.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setfilteredRestaurant(filteredList);
          }}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default search;
