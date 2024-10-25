import React from "react";

function AirQualityCard({ airQualityData }) {
  const station = airQualityData;

  return (
    <div className="bg-white opacity-70 p-6 rounded-lg shadow-lg max-w-sm">
      <h2 className="text-2xl font-bold mb-4">Air Quality Summary</h2>
      <p><strong>Location:</strong> {station.placeName}, {station.city}, {station.state}, {station.countryCode}</p>
      <p><strong>Postal Code:</strong> {station.postalCode}</p>
      <p><strong>Latitude:</strong> {station.lat}</p>
      <p><strong>Longitude:</strong> {station.lng}</p>
      <p><strong>AQI:</strong> {station.AQI}</p>
      {/* <p><strong>Primary Pollutant:</strong> {station.aqiInfo.pollutant}</p> */}
      <p><strong>Concentration:</strong> {station.aqiInfo.concentration} µg/m³</p>
      <p><strong>Category:</strong> {station.aqiInfo.category}</p>
      <p><strong>Last Updated:</strong> {new Date(station.updatedAt).toLocaleString()}</p>

      <h3 className="text-lg font-semibold mt-4">Pollutant Levels:</h3>
      <ul>
        <li><strong>CO:</strong> {station.CO} µg/m³</li>
        <li><strong>NO2:</strong> {station.NO2} µg/m³</li>
        <li><strong>Ozone:</strong> {station.OZONE} µg/m³</li>
        <li><strong>PM10:</strong> {station.PM10} µg/m³</li>
        <li><strong>PM2.5:</strong> {station.PM25} µg/m³</li>
        <li><strong>SO2:</strong> {station.SO2} µg/m³</li>
      </ul>
    </div>
  );
}

export default AirQualityCard;
