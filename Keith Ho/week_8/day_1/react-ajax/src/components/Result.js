import React from "react";
import "../App.css";

const Result = (props) => {
    return (
      <div className="result-container">
        <h3>{ props.city }</h3>
        <p>{ props.description }</p>
        <p>{ props.lowestTemp }</p>
        <p>{ props.highestTemp }</p>
        <p>{ props.humidity }</p>
      </div>
    );
}

export default Result;
