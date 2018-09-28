import React from "react";
import "./Instructions.css";

const Instructions = props => (
    <div className="col-md-3">
        {props.children}
    </div>
);

export default Instructions;