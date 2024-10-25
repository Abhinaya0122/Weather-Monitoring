import React from "react";

function WeatherCard({ weatherData }) {
  console.log(weatherData);
  return (
    <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-sm mx-auto my-4 transition-transform transform hover:scale-105">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Weather Summary</h2>
      <div className="text-gray-700">
        <p><strong>Latitude:</strong> {weatherData.lat}</p>
        <p><strong>Longitude:</strong> {weatherData.lng}</p>
        <p><strong>Timezone:</strong> {weatherData.timezone}</p>
        <p><strong>Country Code:</strong> {weatherData.country_code}</p>
        <p><strong>Local Time:</strong> {new Date(weatherData.time * 1000).toLocaleTimeString()}</p>
        <p><strong>Temperature:</strong> {weatherData.temperature}°F</p>
        <p><strong>Apparent Temperature:</strong> {weatherData.apparentTemperature}°F</p>
        <p><strong>Cloud Cover:</strong> {weatherData.cloudCover}%</p>
        <p><strong>Dew Point:</strong> {weatherData.dewPoint}°F</p>
        <p><strong>Humidity:</strong> {weatherData.humidity}%</p>
        <p><strong>Pressure:</strong> {weatherData.pressure} hPa</p>
        <p><strong>Precipitation Intensity:</strong> {weatherData.precipIntensity} mm/hr</p>
        <p><strong>Visibility:</strong> {weatherData.visibility} km</p>
        <p><strong>Wind Speed:</strong> {weatherData.windSpeed} m/s</p>
        <p><strong>Wind Gust:</strong> {weatherData.windGust} m/s</p>
        <p><strong>Wind Bearing:</strong> {weatherData.windBearing}°</p>
        <p><strong>Ozone:</strong> {weatherData.ozone} DU</p>
        <p><strong>UV Index:</strong> {weatherData.uvIndex}</p>
        <p><strong>Weather Icon:</strong> {weatherData.icon}</p>
        <p><strong>Summary:</strong> {weatherData.summary}</p>
        <p><strong>Last Updated:</strong> {new Date(weatherData.updatedAt).toLocaleString()}</p>
      </div>
    </div>
  );
}

export default WeatherCard;
