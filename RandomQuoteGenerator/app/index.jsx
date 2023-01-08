import React from "react";
import ReactDom from "react-dom/client";
import './index.css';
import { Quote } from "./components/Quote";

class App extends React.Component {
    render() {
        return <Quote />
    }
}

const rootElement = document.getElementById('app');
const root = ReactDom.createRoot(rootElement);
root.render(<App />);