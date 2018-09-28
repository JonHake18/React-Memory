import React from "react";
import "./Instructions.css";

const Instructions = props => (
    <div className="col-md-3">
        <p>{props.children}</p>
    </div>
);

export default Instructions;