import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (
    <div className="col-md-3">
        <p>{props.children}</p>
    </div>
);

export default Scoreboard;