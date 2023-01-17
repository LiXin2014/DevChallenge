import React from "react";

export function Author(props) {
    if (!props.author) {
        return null;
    }
    return (
        <button className="authorButton">
            <span className="author">{props.author}</span>
            <span className="gotoArrow">{"→"}</span>
        </button>
    )
}