import React from "react";
import { getRandomQuote, getQuotesForAnAuthor } from "../apis/utils";
import { quoteHolder } from "../apis/quoteHolder";

export class Quote extends React.Component {
    constructor() {
        super();
        this.state = { text: "", author: "", num: 0 };
    }

    async componentDidMount() {
        const quotes = await quoteHolder.getQuotes();
        const quoteObject = getRandomQuote(quotes);
        const num = getQuotesForAnAuthor(quotes, quoteObject.author).length;
        this.setState({text: quoteObject.text, author: quoteObject.author, num: num})
    }
    
    render() {
        return (
            <div>
                {this.state.text}
                {this.state.author}
                {this.state.num}
            </div>
        )
    }
}