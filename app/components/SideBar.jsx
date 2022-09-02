import React from "react";
import background from '../images/Cloud-background.png';

export default class SideBar extends React.Component {
    render() {
        return (
            <div className="today">
                <div className="search">search</div>
                <div className="weather-image">
                    <img src={background} alt="" className="cloud-background"/>
                </div>
                <div className="temperature">tem</div>
                <div className="description">description</div>
                <div className="date">date</div>
                <div className="location">location</div>
            </div>
        )
    }
}