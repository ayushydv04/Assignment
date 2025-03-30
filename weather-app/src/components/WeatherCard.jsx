import React from "react";

const WeatherCard = ({ weather }) => {
    return (
      <div className="p-6 border rounded-lg shadow-md bg-white text-center">
        <h2 className="text-2xl font-bold">{weather.name}</h2>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="Weather Icon"
          className="mx-auto"
        />
        <p className="text-lg">{weather.weather[0].description}</p>
        <p>🌡 Temperature: {weather.main.temp}°C</p>
        <p>💧 Humidity: {weather.main.humidity}%</p>
        <p>💨 Wind Speed: {weather.wind.speed} km/h</p>
      </div>
    );
  };
  
  export default WeatherCard;
  