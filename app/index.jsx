import React from "react";
import ReactDom from "react-dom/client";
import { Forecasts } from "./components/Forecasts";
import SideBar from "./components/SideBar";
import { getCurrentWeather } from "./apis/utils";
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 47.7331456,
            longitude: -122.1951488,
            currWeather: null
        };
    }

    componentDidMount() {
        const { latitude, longitude } = this.state;
        getCurrentWeather(latitude, longitude)
            .then(currWeather => {
                this.setState({
                    currWeather
                });
            })
    }

    render() {
        if (!this.state.currWeather) {
            return null;
        }

        return (
            <React.Fragment>
                <SideBar currWeather={this.state.currWeather} />
                <div className="details">
                    <div className="forecast-highlights">
                        <Forecasts />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const rootElement = document.getElementById('app');
const root = ReactDom.createRoot(rootElement);
root.render(<App />);