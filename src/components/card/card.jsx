import React from "react";
import "./card.styles.css"; 

export const Card = ({ monster }) => (
  <div className="card-container">
    <h1>{monster.name}</h1>
  </div>
);
