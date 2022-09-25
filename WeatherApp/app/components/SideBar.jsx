import React from "react";
import { getCurrentDate, getTempSymbol, getTemp } from "../apis/utils";
import { getWeatherIcon } from "../apis/icons";
import background from '../images/Cloud-background.png';
import { MdLocationOn } from "react-icons/md";
import SymbolContext from "../context/SymbolContext";
import { MdOutlineMyLocation } from "react-icons/md";

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { weather, temp: temprature, city_name: city, state_code: state, country_code: country } = this.props.currWeather;
        const { code, description } = weather;
        const weatherIcon = getWeatherIcon(code);

        return (
            <SymbolContext.Consumer>
                {({symbol}) => {
                    return (
                        <div className="today">
                            <div className="search">
                                <button 
                                    className="search-places"
                                    onClick={() => this.props.startSearch(true)}>Search for places</button>
                                <button className="location-button" onClick={() => this.props.getCurrentLocation()}><MdOutlineMyLocation style={{height: '30px', width: '30px'}}/></button>
                            </div>
                            <div className="weather-image">
                                <img src={background} alt="" className="cloud-background lightDark" />
                                <img src={weatherIcon} className="currWeatherIcon" />
                            </div>
                            <div className="temperature center">
                                <span className="temp-number">{getTemp(temprature, symbol)}</span>
                                <span className="temp-symbol lightDark">{getTempSymbol(symbol)}</span>
                            </div>
                            <div className="description center lightDark">{description}</div>
                            <div className="date-location lightDark center">
                                <div>
                                    <span className="date">Today</span> •
                                    <span className="date">{getCurrentDate()}</span>
                                </div>
                                <div className="center">
                                    <MdLocationOn className="location-symbol" />
                                    <span>{`${city}, ${state}, ${country}`}</span>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </SymbolContext.Consumer>
        )
    }
}