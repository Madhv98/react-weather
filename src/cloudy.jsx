import { useState } from "react";
import "./cloudy.css"; // Import the CSS file

const Cloudy = () => {
  const [weather, setWeather] = useState({
    temperature: 20, // Initial temperature in Celsius
    description: "Cloudy", // Initial weather description
    city: "Mississauga", // Initial city name
  });

  return (
    <div className="weather-container">
      <h1>{weather.city} Weather</h1>
      <img
        className="cloudyImg"
        src="https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?s=612x612&w=0&k=20&c=RoUDM9BMwqW8NkPXjzAzlDKCHPOmdZhmmeT3jGA2EaM="
        alt="cloudy"
      />
      <div className="weather-info">
        <p>Temperature: {weather.temperature}°C</p>
        <p>Condition: {weather.description}</p>
      </div>
    </div>
  );
};

export default Cloudy;
