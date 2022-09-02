import React from "react";
import ReactDom from "react-dom/client";
import SideBar from "./components/SideBar";
import './index.css';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <SideBar />
                <div className="details">
                    Details
                </div>
            </React.Fragment>
        )
    }
}

const rootElement = document.getElementById('app');
const root = ReactDom.createRoot(rootElement);
root.render(<App />);