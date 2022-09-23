import React from "react";
import { getForcasts } from "../apis/utils";
import ForecastCard from "./ForecastCard";

export class Forecasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecasts: []
        }
    }

    componentDidMount() {
        getForcasts(this.props.latitude, this.props.longitude, this.props.city, this.props.country)
            .then(result => {
                this.setState({ forecasts: result.slice(0, 5) });
            })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.latitude !== this.props.latitude || prevProps.longitude !== this.props.longitude
            || prevProps.city !== this.props.city || prevProps.country !== this.props.country) {
            getForcasts(this.props.latitude, this.props.longitude, this.props.city, this.props.country)
                .then(result => {
                    this.setState({ forecasts: result.slice(0, 5) });
                })
        }
    }

    render() {
        return (
            <ul className="forecasts">
                {this.state.forecasts.map(forecast => {
                    return <ForecastCard 
                            key={forecast.datetime}
                            date={forecast.datetime} 
                            code={forecast.weather.code} 
                            highTemp={forecast.high_temp} 
                            lowTemp={forecast.low_temp} 
                        />
                })}
            </ul>
        )
    }
}