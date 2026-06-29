import React from "react";

const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div className="card-container">
      {cart.map((bottle) => (
        <div className="" key={bottle.id}>
          <div className="">
            <img
              className="card-img"
              src={bottle.image}
              alt="add to cart image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
