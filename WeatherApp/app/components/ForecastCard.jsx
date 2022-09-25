import React from "react";
import { getWeatherIcon } from "../apis/icons";
import SymbolContext from "../context/SymbolContext";
import { getTempSymbol, getTemp } from "../apis/utils";

export default function ForecastCard({ date, code, highTemp, lowTemp }) {
    const weatherIcon = getWeatherIcon(code);
    return (
        <SymbolContext.Consumer>
            {({symbol}) => {
                return (
                    <div className="forecast center">
                        <div className="forecast-date">{date}</div>
                        <img src={weatherIcon} alt="weather image" />
                        <div className="temp">
                            <span className="highTemp">{getTemp(highTemp, symbol)}<span className="temp-symbol">{getTempSymbol(symbol)}</span></span>
                            <span className="lowTemp lightDark">{getTemp(lowTemp, symbol)}<span className="temp-symbol">{getTempSymbol(symbol)}</span></span>
                        </div>
                    </div>
                )
            }}
        </SymbolContext.Consumer>
    )
}