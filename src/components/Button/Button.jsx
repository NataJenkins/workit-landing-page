import React from "react";
import "./Button.scss";
export default function Button({ secondary, onClick, text }) {
    return (
        <button
            className={`button ${secondary ? "secondary" : null}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
