import React from "react";
import ReactDom from "react-dom/client";
import { Forecasts } from "./components/Forecasts";
import SideBar from "./components/SideBar";
import './index.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 47.7331456, 
            longitude: -122.1951488
        };
    }

    render() {
        return (
            <React.Fragment>
                <SideBar latitude={this.state.latitude} longitude={this.state.longitude}/>
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