import React from "react";

function WeatherCard({ weatherData }) {
  // console.log(weatherData);
  return (
    <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg max-w-sm mx-auto my-4 transition-transform transform hover:scale-105">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Weather Summary</h2>
      <div className="text-gray-700">
        {Object.keys(weatherData).map((key) => (
          <p key={key}>
            <strong>{key}:</strong> {weatherData[key]}
          </p>
        ))}
      </div>
    </div>
  );
}

export default WeatherCard;
