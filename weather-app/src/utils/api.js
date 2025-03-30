import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;  // Replace with actual API key
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    throw new Error("City not found. Try again!");
  }
};
