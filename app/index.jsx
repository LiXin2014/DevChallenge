import React from "react";
import ReactDom from "react-dom/client";
import { Forecasts } from "./components/Forecasts";
import { SearchBar } from "./components/SearchBar";
import SideBar from "./components/SideBar";
import { getLocation, getCurrentWeather } from "./apis/utils";
import './index.css';
import { Highlights } from "./components/Highlights";
import SymbolContext from "./context/SymbolContext";
import UnitConverter from "./components/UnitConverter";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 39.9042,
            longitude: 116.4074,
            currWeather: null,
            symbol: 'celsius',
            searching: false,
            toggleSymbol: (symbol) => {
                this.setState({
                    symbol: symbol
                })
            }
        };

        this.getCurrentLocation = this.getCurrentLocation.bind(this);
        this.fetchCurrentWeather = this.fetchCurrentWeather.bind(this);
        this.startSearch = this.startSearch.bind(this);
    }

    componentDidMount() {
        this.fetchCurrentWeather();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.latitude !== this.state.latitude || prevState.longitude !== this.state.longitude) {
            this.fetchCurrentWeather();
        }
    }

    render() {
        if (!this.state.currWeather) {
            return null;
        }

        return (
            <SymbolContext.Provider value={this.state}>
                {this.state.searching ? 
                    <SearchBar />
                    : 
                    <SideBar currWeather={this.state.currWeather} getCurrentLocation={this.getCurrentLocation} startSearch={this.startSearch}/>}
                <div className="details">
                    <UnitConverter />
                    <div className="forecast-highlights center">
                        <Forecasts latitude={this.state.latitude} longitude={this.state.longitude}/>
                        <Highlights currWeather={this.state.currWeather}/>
                    </div>
                    <footer />
                </div>
            </SymbolContext.Provider>
        )
    }

    fetchCurrentWeather() {
        const { latitude, longitude } = this.state;
        getCurrentWeather(latitude, longitude)
            .then(currWeather => {
                this.setState({
                    currWeather
                });
            })
    }

    getCurrentLocation() {
        getLocation().then((pos) => {
            this.setState({
                latitude: pos.lat,
                longitude: pos.long
            })
        })
    }

    startSearch(search) {
        this.setState({searching: search});
    }
}

const rootElement = document.getElementById('app');
const root = ReactDom.createRoot(rootElement);
root.render(<App />);