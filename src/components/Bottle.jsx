import React, { useState } from "react";
import "../App.css";

const Bottle = ({ bottle, handleAddToCart}) => {
  const { name, brand, capacity, material, color, price, description, image } =
    bottle;
  return (
    <div className="card">
      <img src={image} alt={name} className="card-img" />

      <div className="card-body">
        <span className="capacity">{capacity}</span>

        <h2>{name}</h2>
        <h4>{brand}</h4>

        <div className="details">
          <span>🥤 {material}</span>
          <span>⚫ {color}</span>
        </div>

        <p>{description}</p>

        <div className="card-footer">
          <h3>${price}</h3>
          <button onClick={() => handleAddToCart(bottle)}
            >Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Bottle;
