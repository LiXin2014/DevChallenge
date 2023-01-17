import React from "react";
import { getRandomQuote } from "../apis/utils";
import { quoteHolder } from "../apis/quoteHolder";
import { Quote } from "./Quote";
import { Author } from "./Author";

export class RandomQuote extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: "", author: "" };
    }

    async componentDidMount() {
        await this.updateQuote();
    }

    /* componentDidUpdate is invoked immediately after updating occurs. Meaning when state or prop changes. */
    async componentDidUpdate(prevProps) {
        if(this.props.reload !== prevProps.reload) {
            await this.updateQuote();
        }
    }

    async updateQuote() {
        const quotes = await quoteHolder.getQuotes();
        const quoteObject = getRandomQuote(quotes);
        this.setState({text: quoteObject.text, author: quoteObject.author})
    }
    
    render() {
        return (
            <div className="random">
                <Quote text={this.state.text} />
                <Author author={this.state.author} />
            </div>
        )
    }
}