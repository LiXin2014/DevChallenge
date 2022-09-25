import React from "react";
import ReactDom from "react-dom/client";
import './index.css';

class App extends React.Component {
    render() {
        return <div>Hello World!</div>
    }
}

const rootElement = document.getElementById('app');
const root = ReactDom.createRoot(rootElement);
root.render(<App />);