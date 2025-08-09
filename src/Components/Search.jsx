import React, { useState, useRef } from "react";
import Suggestions from "./Suggestions";
import { FaSearch } from "react-icons/fa";
import { HiOutlineMicrophone } from "react-icons/hi";
import { HiMicrophone } from "react-icons/hi2";
const search = ({ Listofrestaurant, setfilteredRestaurant }) => {
  const [searchText, setsearchText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  const suggestions = Listofrestaurant.filter((res) => {
    return res.info.name.toLowerCase().includes(searchText.toLowerCase());
  });
  // Voice search logic
  const handleVoiceSearch = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Voice search is not supported in this browser.');
      return;
    }
    if (!recognitionRef.current) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setsearchText(transcript);
        setIsListening(false);
        
        const filteredList = Listofrestaurant.filter((res) => {
          return res.info.name.toLowerCase().includes(transcript.toLowerCase());
        });
        setfilteredRestaurant(filteredList);
     
      };
      recognition.onend = () => {
        setIsListening(false);
      };
      recognition.onerror = () => {
        setIsListening(false);
      };
      recognitionRef.current = recognition;
    }
    if (!isListening) {
      setIsListening(true);
      recognitionRef.current.start();
    } else {
      setIsListening(false);
      recognitionRef.current.stop();
    }
  };

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
      <div className="flex items-center w-full gap-2">
        <div className="relative w-full md:w-64">
          <input
            type="text"
            className="w-full p-2 border border-orange-600 border-solid rounded-lg md:w-64 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);

            }}
            onKeyDown={handleKeyDown}
          />
          {searchText.length > 0 && (
            <Suggestions suggestions={suggestions} onSelect={handleSelect} />
          )}
          <button
            className="absolute top-0 flex items-center h-full px-4 bg-orange-400 rounded-r-lg hover:bg-orange-500 right-10"
            type="button"
            aria-label="Voice Search"
            onClick={handleVoiceSearch}
          >
            {isListening ? <span role="img" aria-label="Listening"><HiOutlineMicrophone /></span> : <span role="img" aria-label="Voice"><HiMicrophone /></span>}
          </button>


          <button
            className="absolute top-0 right-0 flex items-center h-full px-4 bg-orange-400 rounded-r-lg hover:bg-orange-500"
            onClick={() => {
              searchText.trim() !== "" && performSearch();
            }}
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </>
  );
};

export default search;
