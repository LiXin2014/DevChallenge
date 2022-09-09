import React from "react";
import { HighlightCard } from "./HighlightCard";

export function Highlights({ currWeather }) {
    const {wind_spd: windSpeed, wind_cdir: windDir, rh: humidity, sunset, aqi} = currWeather;
    return (
        <div className="highlights">
            <div className="highlights-title">Today's Highlights</div>
            <div className="highlights-container">
                <div className="highlight-item center">
                    <HighlightCard title={`Wind status`} value={windSpeed} unit={`m/s`}/>
                </div>
                <div className="highlight-item center">
                    <HighlightCard title={`Humidity`} value={humidity} unit={`%`}/>
                </div>
                <div className="highlight-item center">
                    <HighlightCard title={`sunset`} value={sunset} />
                </div>
                <div className="highlight-item center">
                    <HighlightCard title={`Air Quality`} value={aqi} unit={`QAI`}/>
                </div>
            </div>
        </div>
    )
}