import React from "react";
import { FaSearch } from "react-icons/fa";

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="searchBar">
                <div className="search-container">
                    <div className="searchBar-search">
                        <FaSearch style={{color: '#616475', margin: '10px'}}/> 
                        <input type="text"
                            placeholder="Search location"
                            className="searchBar-input"
                            ></input>
                    </div>
                    <button className="search-button">Search</button>
                </div>
            </div>
        )
    }
}