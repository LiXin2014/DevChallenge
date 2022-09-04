import React from "react";
import { getCurrentDate } from "../apis/utils";
import { getWeatherIcon } from "../apis/icons";
import background from '../images/Cloud-background.png';
import { MdLocationOn } from "react-icons/md";

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { weather, temp: temprature, city_name: city, state_code: state, country_code: country } = this.props.currWeather;
        const { code, description } = weather;
        const weatherIcon = getWeatherIcon(code);
        return (
            <div className="today">
                <div className="search">search</div>
                <div className="weather-image">
                    <img src={background} alt="" className="cloud-background lightDark" />
                    <img src={weatherIcon} className="currWeatherIcon" />
                </div>
                <div className="temperature center">
                    <span className="temp-number">{temprature}</span>
                    <span className="temp-symbol lightDark">&deg;C</span>
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
    }
}