import React from "react";
import { getQuotesForAnAuthor } from "../apis/utils";
import { quoteHolder } from "../apis/quoteHolder";
import { Quote } from "./Quote";

export class QuotesForAuthor extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            quotesForAuthor: []
        }
    }

    async componentDidMount() {
        await this.updateQuotes();
    }

    async updateQuotes() {
        const quotes = await quoteHolder.getQuotes();
        const quotesForAuthor = getQuotesForAnAuthor(quotes, this.props.author);
        this.setState({ quotesForAuthor })
    }

    render() {
        return (
            <React.Fragment>
                <div className="authorForQuotes">{this.props.author}</div>
                <ul>
                    {this.state.quotesForAuthor.map((q, index) => (
                        <li key={index}>
                            <Quote text={q} />
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        )
    }
}