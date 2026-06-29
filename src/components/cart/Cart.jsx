import React from "react";

const Cart = ({ cart, handleRemoveCart }) => {
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
            <button onClick={() => handleRemoveCart(bottle.id)}>X</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
