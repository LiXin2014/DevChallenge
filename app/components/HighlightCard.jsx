import React from "react";

export function HighlightCard({title, value, unit = ''}) {
    return (
        <React.Fragment>
            <div className="title">{title}</div>
            <div className="value-unit">
                <span className="value">{value}</span>
                <span className="unit">{unit}</span>
            </div>
        </React.Fragment>
    );
}