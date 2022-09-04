import React from "react";
import { getWeatherIcon } from "../apis/icons";

export default function ForecastCard({date, code, highTemp, lowTemp}) {
    const weatherIcon = getWeatherIcon(code);
    return (
        <div className="forecast center">
            <div className="forecast-date">{date}</div>
            <img src={weatherIcon} alt="weather image" />
            <div className="temp">
                <span className="highTemp">{highTemp}<span className="temp-symbol">&deg;C</span></span>
                <span className="lowTemp lightDark">{lowTemp}<span className="temp-symbol">&deg;C</span></span>
            </div>
        </div>
    )
}