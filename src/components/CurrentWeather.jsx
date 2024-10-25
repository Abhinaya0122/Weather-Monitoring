import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";

function CurrentWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCoordinatesAndWeather = () => {
      setLoading(true);

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const url = `http://localhost:5000/current-weather?lat=${latitude}&lng=${longitude}`;
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

  return (
    <div className="min-h-screen overflow-hidden">
      <main className="flex flex-col items-center pt-20">
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
