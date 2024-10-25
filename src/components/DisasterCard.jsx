import React from "react";

function DisasterAlertCard({ disasterData }) {
  return (
    <div className="bg-white opacity-70 p-6 rounded-lg shadow-lg max-w-sm">
      <h2 className="text-2xl font-bold mb-4">Disaster Alerts</h2>
      {disasterData.length > 0 ? (
        disasterData.map((disaster, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{disaster.event_name}</h3>
            <p><strong>Event Type:</strong> {disaster.event_type}</p>
            <p><strong>Date:</strong> {new Date(disaster.date).toLocaleString()}</p>
            <p><strong>Location:</strong> Latitude: {disaster.lat}, Longitude: {disaster.lng}</p>
            <p><strong>Severity:</strong> {disaster.details.severity}</p>
            <p><strong>Status:</strong> {disaster.details.event_status}</p>
            <p><strong>Details:</strong> {disaster.details.event_description}</p>
            <p><strong>Instructions:</strong> {disaster.details.instruction}</p>
            <p><strong>Source:</strong> {disaster.source}</p>
          </div>
        ))
      ) : (
        <p>No disaster information available.</p>
      )}
    </div>
  );
}

export default DisasterAlertCard;
