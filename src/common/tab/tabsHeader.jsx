import React from "react";

export default props => {
    return (
        <ul className="nav nav-tabs">
            {props.children}
        </ul>
    )
}