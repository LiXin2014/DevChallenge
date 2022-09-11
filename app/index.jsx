import React from "react";
import ReactDom from "react-dom/client";
import { Forecasts } from "./components/Forecasts";
import SideBar from "./components/SideBar";
import { getCurrentWeather } from "./apis/utils";
import './index.css';
import { Highlights } from "./components/Highlights";
import SymbolContext from "./context/SymbolContext";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 47.7331456,
            longitude: -122.1951488,
            currWeather: null,
            symbol: 'fahrenheit'
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
            <SymbolContext.Provider value={this.state.symbol}>
                <SideBar currWeather={this.state.currWeather} />
                <div className="details">
                    <div className="unit-converter">Unit Converter</div>
                    <div className="forecast-highlights center">
                        <Forecasts />
                        <Highlights currWeather={this.state.currWeather}/>
                    </div>
                    <footer />
                </div>
            </SymbolContext.Provider>
        )
    }
}

const rootElement = document.getElementById('app');
const root = ReactDom.createRoot(rootElement);
root.render(<App />);