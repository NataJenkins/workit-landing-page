import React from "react";
import "./Button.scss";
export default function Button({ secondary, onClick, text, href }) {
    return (
        <a
            className={`button ${secondary ? "secondary" : null}`}
            onClick={onClick}
            href={href}
        >
            {text}
        </a>
    );
}
