import React from "react";
import { useState } from "react";
import Suggestions from "./Suggestions";
import { FaSearch } from "react-icons/fa";
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
    if (  e.key === "Enter" && searchText.trim() !== "") {
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
            className="w-40 sm:w-64 p-2 border border-solid border-orange-600 rounded-lg"
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
           <button
        
          className="p-3   absolute top-0.4 m-0.4 right-0 bg-orange-400 rounded-lg hover:bg-orange-500"
          onClick={(()=>{
            // If searchText is not empty, perform search function
                searchText.trim() !== "" && performSearch();
                
          })}
        >
          <FaSearch/>
        </button>
        </div>
              
       
      </div>
    </>
  );
};

export default search;
