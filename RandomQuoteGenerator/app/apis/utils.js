function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function getRandomQuote(quotes) {
    const randNum = getRandomInt(quotes.length);
    return quotes[randNum];
}

export function getQuotesForAnAuthor(quotes, author) {
    const quotesForAnAuthor = quotes.filter(q => q.author === author).map(q => q.text);
    return quotesForAnAuthor;
}