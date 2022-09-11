import React from "react";
import ReactDom from "react-dom/client";
import { Forecasts } from "./components/Forecasts";
import SideBar from "./components/SideBar";
import { getCurrentWeather } from "./apis/utils";
import './index.css';
import { Highlights } from "./components/Highlights";
import SymbolContext from "./context/SymbolContext";
import UnitConverter from "./components/UnitConverter";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 47.7331456,
            longitude: -122.1951488,
            currWeather: null,
            symbol: 'celsius',
            toggleSymbol: (symbol) => {
                this.setState({
                    symbol: symbol
                })
            }
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
            <SymbolContext.Provider value={this.state}>
                <SideBar currWeather={this.state.currWeather} />
                <div className="details">
                    <UnitConverter />
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