import React from "react";
import "./Display.css";

function Display(props) {
    const {locationData}=props;
  return (
    <>
      <div className="display-container">
        <div className="time-date-contaner">
          <h2>
            {locationData ? locationData.location?.localtime.split(" ")[0] : ""}
          </h2>
          <h1>
            {locationData ? locationData.location?.localtime.split(" ")[1] : ""}
          </h1>
        </div>
        <div className="temperature-container">
          <h1>
            {locationData ? locationData.current?.temperature + "°C" : ""}
          </h1>
          <div className="humidity-cloud">
            <h3>
              Humidity:{locationData ? locationData.current?.humidity : ""}%
            </h3>
            <h3>
              Cloudcover:
              {locationData ? locationData.current?.cloudcover : ""}%
            </h3>
          </div>
        </div>
        <div className="image-container">
          <img src={locationData.current?.weather_icons} alt="" />

          <span>
            {locationData ? locationData.current?.weather_descriptions : ""}
          </span>
          <span>
            Wind Speed: {locationData ? locationData.current?.wind_speed : ""}
            km/h
          </span>
        </div>
      </div>
      <div className="location-container">
        <h1>
          {locationData ? locationData.location?.name : ""},{" "}
          {locationData ? locationData.location?.country : ""}
        </h1>
      </div>
    </>
  );
}

export default Display;
