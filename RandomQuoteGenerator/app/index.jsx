import React from "react";
import ReactDom from "react-dom/client";
import './index.css';
import { RandomQuote } from "./components/RandomQuote";
import { QuotesForAuthor } from "./components/QuotesForAuthor";
import { BiRefresh } from "react-icons/bi";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            reload: false,
            selectedAuthor: ""
        }
        this.randomClicked = this.randomClicked.bind(this);
        this.onSelectAuthor = this.onSelectAuthor.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.randomClicked} className="refreshButton">
                    <span className="refreshText">random</span>
                    <BiRefresh className="refreshIcon"/>
                </button>
                { this.state.selectedAuthor === "" ? 
                    <RandomQuote reload={this.state.reload} onSelectAuthor={this.onSelectAuthor}/> 
                    :
                    <QuotesForAuthor author={this.state.selectedAuthor}/> 
                }
            </React.Fragment>
        )
    }

    randomClicked() {
        this.setState({
            reload: !this.state.reload,
            selectedAuthor: ""
        })
    }

    onSelectAuthor(selectedAuthor) {
        this.setState({
            selectedAuthor
        })
    }
}

const rootElement = document.getElementById('app');
const root = ReactDom.createRoot(rootElement);
root.render(<App />);