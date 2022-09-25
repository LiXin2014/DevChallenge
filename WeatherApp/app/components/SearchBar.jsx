import React from "react";
import { FaSearch } from "react-icons/fa";

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.cities = [{city: "Toronto", country: "CA"}, {city: "Vancouver", country: "CA"},
            {city: "Los Angeles", country: "US"}, {city: "New York", country: "US"}, {city: "Portland", country: "US"}, {city: "Las Vegas", country: "US"}, {city: "Chicago", country: "US"}, {city: "San Jose", country: "US"}, {city: "Seattle", country: "US"},
            {city: "Shanghai ", country: "CN"}, {city: "Beijing", country: "CN"}, {city: "Shenzhen", country: "CN"}, {city: "Guangzhou", country: "CN"}, {city: "Chengdu", country: "CN"}, {city: "Chongqing", country: "CN"}];
        
        this.state = {
            input: "",
            matched: []
        };
        this.inputChange = this.inputChange.bind(this);
        this.getSimilarNames = this.getSimilarNames.bind(this);
        this.selectCity = this.selectCity.bind(this);
    }
    
    componentDidMount() {
        document.getElementById("city-input").focus();
    }

    render() {
        return (
            <div className="searchBar">
                <div className="search-container">
                    <div className="searchBar-search">
                        <FaSearch style={{ color: '#616475', margin: '10px' }} />
                        <input id="city-input"
                            type="text"
                            placeholder="Search location"
                            className="searchBar-input"
                            onChange={this.inputChange}
                            value={this.state.input}
                        ></input>
                    </div>
                    <button className="search-button">Search</button>
                </div>
                <ul className="searchResult">
                    {this.state.matched.map(matched => {
                        return <li key={matched.city} onClick={() => this.selectCity(matched)}> <span>{matched.city}</span> </li>
                    })}
                </ul>
            </div>
        )
    }

    inputChange(e) {
        this.setState({
            input: e.target.value,
            matched: this.getSimilarNames(e.target.value)
        })
    }

    getSimilarNames(inputName) {
        if(inputName === "") {
            return [];
        }

        const cityNames = this.cities.filter((cityItem, index) => new RegExp(inputName.toLowerCase()).test(cityItem.city.toLowerCase()));
        return cityNames;
    }

    selectCity(matched) {
        const {startSearch, setCurrentLocation} = this.props;
        startSearch(false);
        setCurrentLocation(matched);
    }
}