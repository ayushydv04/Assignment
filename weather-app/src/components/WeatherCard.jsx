import React from "react";

const WeatherCard = ({ weather }) => {
  return (
    <div className="p-6 border border-white/20 rounded-xl shadow-lg backdrop-blur-lg bg-white/10 text-center text-white">
      <h2 className="text-2xl font-bold text-black">{weather.name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="Weather Icon"
        className="mx-auto"
      />
      <p className="text-lg capitalize text-black">{weather.weather[0].description}</p>
      <p>🌡 <span className="font-semibold text-black">{weather.main.temp}°C</span></p>
      <p>💧 <span className="font-semibold text-black">{weather.main.humidity}%</span></p>
      <p>💨 <span className="font-semibold text-black">{weather.wind.speed} km/h</span></p>
    </div>
  );
};

export default WeatherCard;
