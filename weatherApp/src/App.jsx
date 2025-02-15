import { useEffect, useState } from "react";
import "./App.css";
import { MdClear } from "react-icons/md";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [weatherData, setWeatherData] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isloading, setIsLoading] = useState(true);

  const fetchWeatherData = async (city) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const weather = await response.json();
      if (response.ok) {
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
        setIsLoading(false);
      } else {
        setWeatherData(false);
        //alert("City not found. Please try again!");
      }
    } catch (error) {
      console.log(error);
      //alert("An error occurred. Please try again later.");
      // setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm === "") {
      fetchWeatherData("Delhi");
    }
  }, [searchTerm]);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      fetchWeatherData(searchTerm);
    }
  };

  const getBackgroundClass = (weatherType) => {
    switch (weatherType) {
      case "Clear":
        return "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500";
      case "Clouds":
        return "bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600";
      case "Rain":
      case "Drizzle":
        return "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700";
      case "Snow":
        return "bg-gradient-to-r from-blue-200 via-white to-gray-200";
      case "Thunderstorm":
        return "bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-800";
      default:
        return "bg-gradient-to-r from-green-300 via-teal-400 to-blue-500";
    }
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen ${getBackgroundClass(
        weatherData.weatherType
      )} transition-all duration-500`}
    >
      <div className="flex flex-col items-center bg-white/90 shadow-2xl rounded-3xl p-8 w-full max-w-sm mx-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center tracking-wider">
          🌤️ Weather App
        </h1>

        <div className="mb-6 w-full">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for a city..."
              className="w-full px-5 py-3 text-lg border-2 border-blue-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 transition-shadow duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <MdClear
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                onClick={() => setSearchTerm("")}
              />
            )}
          </div>

          <button
            className="mt-4 w-full py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-blue-700 transition-transform duration-300 transform hover:scale-105"
            onClick={handleSearch}
          >
            🔍 Search
          </button>
        </div>

        {isloading ? (
          <div className="text-center text-lg font-semibold text-gray-700">
            🔄 Loading...
          </div>
        ) : weatherData ? (
          <div className="flex flex-col items-center bg-gradient-to-b from-blue-400 to-blue-500 text-white rounded-3xl p-6 w-full shadow-lg">
            <div className="flex items-center justify-between w-full mb-4">
              <div>
                <h2 className="text-2xl font-bold">{weatherData.cityName}</h2>
                <p className="text-lg italic">{weatherData.weatherType}</p>
              </div>
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                alt="weather icon"
                className="w-16 h-16 animate-none"
              />
            </div>

            <div className="text-6xl font-extrabold mb-4">
              {(weatherData.temp - 273.15).toFixed(1)}°C
            </div>

            <div className="flex justify-between w-full text-lg font-semibold">
              <p>🌡️ High: {(weatherData.highTemp - 273.15).toFixed(1)}°C</p>
              <p>❄️ Low: {(weatherData.lowTemp - 273.15).toFixed(1)}°C</p>
            </div>

            <div className="text-lg mt-4">
              💧 Humidity: {weatherData.humidity}% | 🌬️ Pressure:{" "}
              {weatherData.pressure} hPa
            </div>
          </div>
        ) : (
          <p className="mt-4 text-center text-lg font-medium text-blue-700 bg-blue-100 py-2 px-4 rounded-lg shadow-sm">
            🌤️ Enter a city name to explore the current weather conditions!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
