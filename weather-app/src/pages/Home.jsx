import React from "react";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { fetchWeather } from "../utils/api";
import { toast } from "react-toastify";

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    setLoading(true);
    try {
      const data = await fetchWeather(city);
      setWeather(data);
      toast.success("Weather data fetched!");
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4">
      <SearchBar onSearch={handleSearch} />
      {loading && <p className="text-center">Loading...</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default Home;
