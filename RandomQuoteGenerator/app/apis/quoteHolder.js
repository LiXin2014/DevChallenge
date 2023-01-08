/*
  Contains all quotes from the API.
  quotes are an array of quote.
  One quote contains text of the quote and author of the quote.
  Example:
  {
    "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "author": "Thomas Edison"
  }
*/

class QuoteHolder {
    constructor() {
        this.quotes = [];
        this.url = "https://type.fit/api/quotes";
    }

    async getQuotes() {
        if (this.quotes.length > 0) {
            return this.quotes;
        }
        const res = await fetch(this.url);
        this.quotes = await res.json();
        return this.quotes;
    }
}

export const quoteHolder = new QuoteHolder();