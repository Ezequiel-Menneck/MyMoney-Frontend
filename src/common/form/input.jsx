import React from "react";

export default (props) => {
    return (
        <input
            {...props.input}
            className="form-control"
            placeholder={props.placeholder}
            readOnly={props.readOnly}
            type={props.type}
        />
    );
};
