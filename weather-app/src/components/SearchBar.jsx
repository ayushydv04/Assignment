import React from "react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() === "") return;
    onSearch(city);
    setCity("");
  };

  return (
    <div className="flex items-center gap-2 p-4">
      <input
        type="text"
        placeholder="Enter city name..."
        className="w-full p-2 border border-gray-300 rounded focus:outline-none"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
