import React, { Children } from "react";

export function HighlightCard({title, value, children, unit = ''}) {
    return (
        <React.Fragment>
            <div className="title">{title}</div>
            <div className="value-unit">
                <span className="value">{value}</span>
                <span className="unit">{unit}</span>
            </div>
            {children}
        </React.Fragment>
    );
}