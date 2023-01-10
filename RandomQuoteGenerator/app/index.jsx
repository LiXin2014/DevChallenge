import React from "react";
import ReactDom from "react-dom/client";
import './index.css';
import { RandomQuote } from "./components/RandomQuote";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <RandomQuote />
            </React.Fragment>
        )
    }
}

const rootElement = document.getElementById('app');
const root = ReactDom.createRoot(rootElement);
root.render(<App />);