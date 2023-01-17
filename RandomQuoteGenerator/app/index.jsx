import React from "react";
import ReactDom from "react-dom/client";
import './index.css';
import { RandomQuote } from "./components/RandomQuote";
import { BiRefresh } from "react-icons/bi";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            reload: false
        }
        this.randomClicked = this.randomClicked.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.randomClicked} className="refreshButton">
                    <span className="refreshText">random</span>
                    <BiRefresh className="refreshIcon"/>
                </button>
                <RandomQuote reload={this.state.reload}/>
            </React.Fragment>
        )
    }

    randomClicked() {
        this.setState({
            reload: !this.state.reload
        })
    }
}

const rootElement = document.getElementById('app');
const root = ReactDom.createRoot(rootElement);
root.render(<App />);