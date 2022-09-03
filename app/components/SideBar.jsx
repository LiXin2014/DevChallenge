import React from "react";
import { getCurrentWeather } from "../apis/utils";
import { getWeatherIcon } from "../apis/icons";
import background from '../images/Cloud-background.png';

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 47.7331456, 
            longitude: -122.1951488, 
            code: null, 
            temprature: null, 
            description: null
        };
    }

    componentDidMount() {
        getCurrentWeather(this.state.latitude, this.state.longitude)
            .then(currWeather => {
                this.setState({
                    code: currWeather.weather.code,
                    temprature: currWeather.temp,
                    description: currWeather.weather.description
                });
            })
    }

    render() {
        const {code, temprature, description} = this.state;
        const weatherIcon = getWeatherIcon(code);
        return (
            <div className="today">
                <div className="search">search</div>
                <div className="weather-image">
                    <img src={background} alt="" className="cloud-background"/>
                    <img src={weatherIcon} className="currWeatherIcon"/>
                </div>
                <div className="temperature center">
                    <span className="temp-number">{temprature}</span>
                    <span className="temp-symbol">&deg;C</span>
                </div>
                <div className="description center">{description}</div>
                <div className="date">date</div>
                <div className="location">location</div>
            </div>
        )
    }
}