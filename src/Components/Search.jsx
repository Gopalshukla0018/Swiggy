import React from "react";
import { useState } from "react";
import Suggestions from "./Suggestions";

const search = ({ Listofrestaurant, setfilteredRestaurant }) => {
  const [searchText, setsearchText] = useState("");
  const suggestions = Listofrestaurant.filter((res) => {
    return res.info.name.toLowerCase().includes(searchText.toLowerCase());
  });

  const handleSelect = (resname) => {
    setsearchText(resname);
    const filteredList = Listofrestaurant.filter((res) => {
      return res.info.name.toLowerCase().includes(resname.toLowerCase());
    });
    setfilteredRestaurant(filteredList);
    // Clear suggestions after selection
    setsearchText("");
  };
  const performSearch = () => {
    const filteredList = Listofrestaurant.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setfilteredRestaurant(filteredList);
    setsearchText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      performSearch();
    }
    // if the Enter key is pressed call performSearch function
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <div className="relative ">
          <input
            type="text"
            className="w-40 sm:w-64 p-2 border border-solid border-black rounded-lg"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => {
              const text = e.target.value;
              setsearchText(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
          {searchText.length > 0 && (
            <Suggestions suggestions={suggestions} onSelect={handleSelect} />
          )}
        </div>

        <button
          className="px-4 py-2 bg-green-100 rounded-lg hover:bg-green-200"
          onClick={performSearch}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default search;
