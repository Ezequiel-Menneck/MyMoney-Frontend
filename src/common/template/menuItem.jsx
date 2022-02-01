import React from "React";

export default (props) => {
    return (
        <li>
            <a href={props.path}>
                <i className={`fa fa-${props.icon}`}></i> {props.label}
            </a>
        </li>
    );
};
