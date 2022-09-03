import React from "react";
import { getCurrentDate, getCurrentWeather } from "../apis/utils";
import { getWeatherIcon } from "../apis/icons";
import background from '../images/Cloud-background.png';
import { MdLocationOn } from "react-icons/md";

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 47.7331456, 
            longitude: -122.1951488, 
            code: null, 
            temprature: null, 
            description: null,
            country: null,
            state: null,
            city: null
        };
    }

    componentDidMount() {
        getCurrentWeather(this.state.latitude, this.state.longitude)
            .then(currWeather => {
                this.setState({
                    code: currWeather.weather.code,
                    temprature: currWeather.temp,
                    description: currWeather.weather.description,
                    country: currWeather.country_code,
                    state: currWeather.state_code,
                    city: currWeather.city_name
                });
            })
    }

    render() {
        const {code, temprature, description, city, state, country} = this.state;
        const weatherIcon = getWeatherIcon(code);
        return (
            <div className="today">
                <div className="search">search</div>
                <div className="weather-image">
                    <img src={background} alt="" className="cloud-background lightDark"/>
                    <img src={weatherIcon} className="currWeatherIcon"/>
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
                        <MdLocationOn className="location-symbol"/>
                        <span>{`${city}, ${state}, ${country}`}</span>
                    </div>
                </div>
            </div>
        )
    }
}