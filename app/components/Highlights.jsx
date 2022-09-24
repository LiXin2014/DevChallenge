import React from "react";
import { HighlightCard } from "./HighlightCard";
import { MdAssistantNavigation } from "react-icons/md";
import { getRotation, convertToLocalTime } from "../apis/utils";

export function Highlights({ currWeather }) {
    const {wind_spd: windSpeed, wind_cdir: windDir, rh: humidity, sunset, aqi} = currWeather;
    const localSunset = convertToLocalTime(sunset);
    return (
        <div className="highlights">
            <div className="highlights-title">Today's Highlights</div>
            <div className="highlights-container">
                <div className="highlight-item center">
                    <HighlightCard title={`Wind status`} value={windSpeed.toFixed(2)} unit={`m/s`}>
                        <div className="center">
                            <MdAssistantNavigation style={{marginRight: 10, width: '1.5em', height: '1.5em', transform: `rotate(${getRotation(windDir)})`}}/>
                            <span>{windDir}</span>
                        </div>
                    </HighlightCard>
                </div>
                <div className="highlight-item center">
                    <HighlightCard title={`Humidity`} value={humidity} unit={`%`}>
                        <div className="progress center">
                            <div className="progress-number">
                                <span>0</span>
                                <span>50</span>
                                <span>100</span>
                            </div>
                            <progress value={humidity} max="100" />
                            <div className="progress-unit">%</div>
                        </div>
                    </HighlightCard>
                </div>
                <div className="highlight-item center">
                    <HighlightCard title={`sunset`} value={localSunset} />
                </div>
                <div className="highlight-item center">
                    <HighlightCard title={`Air Quality`} value={aqi} unit={`QAI`}/>
                </div>
            </div>
        </div>
    )
}