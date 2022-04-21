import React, { useState } from "react";
import Weather from "./Weather";
const API_KEY = "38293972e6bab4d9c7c71218b93bd231";
const country_code = "US";

const SubmitZip = (props) => {
  const [zip, setZip] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country_code}&units=imperial&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.weather[1]);
        setCurrentWeather(displayWeatherData(data));
      });
    setZip("");
  };

  function displayWeatherData(data) {
    let { name, visibility } = data;
    let { feels_like, humidity, pressure, temp, temp_max, temp_min } =
      data.main;
    let { sunrise, sunset } = data.sys;
    let { speed } = data.wind;
    let { all } = data.clouds;
    let { main, description, icon } = data.weather[0];
    let weatherObject = {
      name,
      visibility,
      feels_like,
      humidity,
      pressure,
      temp,
      temp_max,
      temp_min,
      sunrise,
      sunset,
      speed,
      all,
      main,
      description,
      icon,
    };

    return weatherObject;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Zipcode:</label>
        <input
          type="text"
          name="zipcode"
          id="zipcode"
          placeholder="28216"
          size="5"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
        <input type="submit" value="Submit" id="btn" />
      </form>
      <Weather data={currentWeather} />



    </div>
  );
};

export default SubmitZip;

