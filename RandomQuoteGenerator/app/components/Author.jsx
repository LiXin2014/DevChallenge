import React from "react";

export function Author({author, onSelectAuthor}) {
    if (!author) {
        return null;
    }
    return (
        <button className="authorButton" onClick={() => onSelectAuthor(author)}>
            <span className="author">{author}</span>
            <span className="gotoArrow">{"→"}</span>
        </button>
    )
}


/*
Note: The onClick was not written correctly at first. 
I tried below code:
1. onClick={onSelectAuthor(author)}. This invoke onSelectAuthor right away, but we want to only invoke after user lickcs
2. onClick={(author) => onSelectAuthor(author)}, then the author passed in is actually click event.
*/