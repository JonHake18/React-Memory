import React from "react";
import "./MemoryCard.css";

const MemoryCard = props => (
	<div 
		className="card"
		onClick={() => props.setClicked(props.id)}>
	    <div className="img-container">
	      <img
	      	className="img"
	        alt={props.name}
	        src={props.image}
	      />
	    </div>
  </div>
);

export default MemoryCard;