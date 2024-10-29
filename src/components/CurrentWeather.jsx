import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";

function CurrentWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [city, setCity] = useState(""); // State for city input

  useEffect(() => {
    const fetchCoordinatesAndWeather = () => {
      setLoading(true);

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const url = `/current-weather?lat=${latitude}&lng=${longitude}`;
            const result = await fetch(url);
            const data = await result.json();

            if (data.error) {
              setError("Weather data not found for the current location.");
              setWeather(null);
            } else {
              setWeather(data.data);
              setError("");
            }
          } catch (err) {
            setError("Error fetching data. Please try again.");
            setWeather(null);
          }
          setLoading(false);
        },
        (err) => {
          setError("Unable to retrieve location. Please enable location services.");
          setLoading(false);
        }
      );
    };

    fetchCoordinatesAndWeather();
  }, []);

  // Function to fetch weather by city name
  const fetchWeatherByCity = async () => {
    setLoading(true);
    setError("");

    try {
      const url = `https://api.weatherapi.com/v1/current.json?key=8868e7d431964dd89a265801230604&q=${city}&aqi=no`;
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);

      if (data.error) {
        setError("City not found.");
        setWeather(null);
      } else {
        
        const weatherData = {
          apparentTemperature: data.current.feelslike_f,
          cloudCover: data.current.cloud,
          country_code: data.location.country,
          dewPoint: data.current.dewpoint_f,
          humidity: data.current.humidity,
          icon: data.current.condition.icon,
          lat: data.location.lat,
          lng: data.location.lon,
          precipIntensity: data.current.precip_mm,
          pressure: data.current.pressure_mb,
          summary: data.current.condition.text,
          temperature: data.current.temp_f,
          time: data.current.last_updated_epoch,
          timezone: data.location.tz_id,
          updatedAt: data.current.last_updated,
          uvIndex: data.current.uv,
          visibility: data.current.vis_km,
          windBearing: data.current.wind_degree,
          windGust: data.current.gust_kph,
          windSpeed: data.current.wind_kph
        };
        
        setWeather(weatherData);        
        setError("");
      }
    } catch (err) {
      setError("Error fetching data. Please try again.");
      setWeather(null);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <main className="flex flex-col items-center pt-20">
        {/* Search Bar for City Name */}
        <div className="flex space-x-4 mb-10">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="w-64 h-10 px-5 rounded-full bg-white opacity-70 border border-gray-300"
          />
          <button
            onClick={fetchWeatherByCity}
            className="w-auto h-10 px-5 rounded-full bg-white opacity-70 text-black cursor-pointer"
          >
            Search
          </button>
        </div>

        {loading ? (
          <p>Loading weather data...</p>
        ) : error ? (
          <p className="text-red-500 mt-4">{error}</p>
        ) : (
          weather && <WeatherCard weatherData={weather} />
        )}
      </main>
    </div>
  );
}

export default CurrentWeather;