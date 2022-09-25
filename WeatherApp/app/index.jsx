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
            city: null,
            country: null,
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
        this.setCurrentLocation = this.setCurrentLocation.bind(this);
    }

    componentDidMount() {
        this.fetchCurrentWeather();
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.latitude !== this.state.latitude || prevState.longitude !== this.state.longitude
            || prevState.city !== this.state.city || prevState.country !== this.state.country) {
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
                    <SearchBar startSearch={this.startSearch} setCurrentLocation={this.setCurrentLocation}/>
                    : 
                    <SideBar currWeather={this.state.currWeather} getCurrentLocation={this.getCurrentLocation} startSearch={this.startSearch}/>}
                <div className="details" onClick={() => { this.setState({searching: false}); }}>
                    <UnitConverter />
                    <div className="forecast-highlights center">
                        <Forecasts latitude={this.state.latitude} longitude={this.state.longitude} city={this.state.city} country={this.state.country}/>
                        <Highlights currWeather={this.state.currWeather}/>
                    </div>
                    <footer>
                        <div class="created-by">created by <a class="author" href="https://github.com/LiXin2014">@LiXin2014</a> - devChallenges.io</div>
                    </footer>
                </div>
            </SymbolContext.Provider>
        )
    }

    fetchCurrentWeather() {
        const { latitude, longitude, city, country } = this.state;
        getCurrentWeather(latitude, longitude, city, country)
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
                longitude: pos.long,
                city: null,
                country: null
            })
        })
    }

    setCurrentLocation(cityItem) {
        this.setState({
            city: cityItem.city,
            country: cityItem.country,
            latitude: null,
            longitude: null
        })
    }

    startSearch(search) {
        this.setState({searching: search});
    }
}

const rootElement = document.getElementById('app');
const root = ReactDom.createRoot(rootElement);
root.render(<App />);