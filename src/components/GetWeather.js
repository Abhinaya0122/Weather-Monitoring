import React, { useState } from "react";
import WeatherCard from "./WeatherCard"; // Adjust the path as necessary

function GetWeather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (city === "") {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const url = `https://api.weatherapi.com/v1/current.json?key=8868e7d431964dd89a265801230604&q=${city}&aqi=no`;
      const result = await fetch(url);
      const data = await result.json();

      if (data.error) {
        setError("City not found.");
        setWeather(null);
      } else {
        setWeather(data); // Set the entire data object
        setError("");
      }
    } catch (err) {
      setError("Error fetching data. Please try again.");
      setWeather(null);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen">
      <main className="flex flex-col items-center pt-20">
        <div className="flex space-x-4 mb-10">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter your city name"
            className="w-64 h-10 px-5 rounded-full border border-gray-300"
          />
          <button
            onClick={fetchWeather}
            className="w-auto h-10 px-5 rounded-full bg-black text-white cursor-pointer"
          >
            {loading ? "Loading..." : "Search"}
          </button>
        </div>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {weather && <WeatherCard weatherData={weather} />}
      </main>
    </div>
  );
}

export default GetWeather;
