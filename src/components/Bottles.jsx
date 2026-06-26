import React, { use, useState } from "react";
import Bottle from "./Bottle";

const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);

  const bottles = use(bottlesPromise);
  //   console.log(bottles);

  const handleAddToCard = (bottle) => {
    // console.log("bottle add to card", bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
  };

  return (
    <div className="container">
      <h1 className="title">Total bottle: {bottles.length}</h1>
      <h3>Succesfully added to cart: {cart.length}</h3>
      <div className="card-container">
        {bottles.map((bottle) => (
          <Bottle
            bottle={bottle}
            key={bottle.id}
            handleAddToCard={handleAddToCard}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
