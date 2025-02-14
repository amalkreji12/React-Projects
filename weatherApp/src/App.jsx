import { useEffect, useState } from "react";
import "./App.css";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [weatherData, setWeatherData] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const fetchWeatherData = async (city) => {
    try {
      const weatherData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const weather = await weatherData.json();
      setWeatherData({
        cityName: weather.name,
        temp: weather.main.temp,
        highTemp: weather.main.temp_max,
        lowTemp: weather.main.temp_min,
        humidity: weather.main.humidity,
        pressure: weather.main.pressure,
        weatherType: weather.weather[0].main,
        icon: weather.weather[0].icon,
      });
      //console.log(weather);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeatherData("Delhi");
  }, []);

  const handleSearch = () => {
    fetchWeatherData(searchTerm);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-6 w-80">
        <h1 className="text-2xl font-bold mb-4">Weather App</h1>

        <div className="mb-4 w-full">
          <input
            type="text"
            placeholder="search for city..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex flex-col items-center bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-2xl p-6 w-full">
          <div className="flex items-center justify-between w-full mb-4">
            <div>
              <h2 className="text-xl font-semibold">{weatherData.cityName}</h2>
              <p className="text-sm">{weatherData.weatherType}</p>
            </div>
            <div className="">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                alt="weather icon"
                className="w-12 h-12"
              />
            </div>
          </div>

          <div className="text-5xl font-bold mb-2">
            {(weatherData.temp - 273).toFixed(1)}°C
          </div>
          <div className="flex justify-between w-full text-sm">
            <p>High : {(weatherData.highTemp - 273).toFixed(1)}°C</p>
            <p>Low : {(weatherData.lowTemp - 273).toFixed(1)}°C</p>
          </div>
        </div>

        <button
          className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-2xl hover:bg-blue-600 cursor-pointer"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default App;
