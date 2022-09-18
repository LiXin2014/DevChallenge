import React from "react";
import SymbolContext from "../context/SymbolContext";

export default function UnitConverter() {
    return (
        <SymbolContext.Consumer>
            {({symbol, toggleSymbol}) => {
                return (
                    <div className="unit-converter">
                        <button
                            className={symbol === "celsius" ? "unit-converter-button symbol-selected" : "unit-converter-button"}
                            onClick={() => toggleSymbol("celsius")}>
                                &deg;C
                        </button>
                        <button 
                            className={symbol === "fahrenheit" ? "unit-converter-button symbol-selected" : "unit-converter-button"}
                            onClick={() => toggleSymbol("fahrenheit")}>
                                &deg;F
                        </button>
                    </div>
                )
            }}
        </SymbolContext.Consumer>
    )
}