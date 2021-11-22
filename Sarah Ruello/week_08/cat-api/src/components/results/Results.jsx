import React from "react";
import "./results.styles.css";

const Results = (props) => {
  console.log(props);
  return (
    <div className="card-container">
      <div className="image-container">
        {!props.image ? (
          " "
        ) : (
          <img
            src={props.image}
            key={props.breed_id}
            alt={props.name}
            className="cat-img"
          />
        )}
      </div>
      <div className="cat-info">
        <h2>{!props.name ? "🐱" : `Breed: ${props.name}`} </h2>
        <h3>{!props.temperament ? " " : `Temperament:`}</h3>
        <p>{props.temperament}</p>
        <h3>{!props.description ? " " : `Description:`}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Results;
