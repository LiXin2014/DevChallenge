import React from "react";
import { getRandomQuote } from "../apis/utils";
import { quoteHolder } from "../apis/quoteHolder";
import { Quote } from "./Quote";

export class RandomQuote extends React.Component {
    constructor() {
        super();
        this.state = { text: "", author: "" };
    }

    async componentDidMount() {
        const quotes = await quoteHolder.getQuotes();
        const quoteObject = getRandomQuote(quotes);
        this.setState({text: quoteObject.text, author: quoteObject.author})
    }
    
    render() {
        return (
            <div className="random">
                <Quote text={this.state.text} />
                <div className="author">{this.state.author}</div>
            </div>
        )
    }
}