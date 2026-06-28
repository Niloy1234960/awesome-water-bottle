import React, { use, useState } from "react";
import Bottle from "./Bottle";

const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);

  const bottles = use(bottlesPromise);

  const handleAddToCart = (bottle) => {
    // console.log("Btn clicked", bottle);
    const newCart = [...cart, bottle];
    setCart(newCart)
  };

  return (
    <div className="container">
      <h1 className="title">Total bottle: {bottles.length}</h1>
      <h3>Successfully added to cart: {cart.length}</h3>

      <div className="card-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Bottles;