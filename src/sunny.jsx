import { useState } from "react";
import "./main";
import styles from "./sunny.module.css";
function Sunny() {
  const [weatherData, setWeatherData] = useState({
    temperature: "75°F",
    description: "Sunny",
    cityName: "Baltimore",
  });
  return (
    <div className={styles.sunny}>
      <h1>Sunny Day</h1>
      <div className={styles.dayInfo}>
        <h2>{weatherData.cityName}</h2>
        <p>Temperature: {weatherData.temperature}</p>
        <p>Description: {weatherData.description}</p>
        <img
          src="https://img.freepik.com/free-vector/summer-landscape-with-lawn-bridge-pond_107791-14346.jpg?w=2000"
          alt="Sunny Day"
        />
      </div>
    </div>
  );
}
export default Sunny;
