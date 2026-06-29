import React, { use, useEffect, useState } from "react";
import Bottle from "./Bottle";
import { addItemToLocalStorage, getCartFromLocalStoreage, removeFromLocalStorage } from "../utilities/AddToLocalStorage";
import Cart from "./cart/Cart";

const Bottles = ({ bottlesPromise }) => {
  const [cart, setCart] = useState([]);

  const bottles = use(bottlesPromise);
  
  // Use useEffect 
  useEffect(()=>{
    const storedItem = getCartFromLocalStoreage()
    // console.log(storedItem);
    
    const storedCart = []

    for(const id of storedItem){
      // console.log(id);
      const cartBottle = bottles.find(bottle => bottle.id === id)
      if(cartBottle){
        storedCart.push(cartBottle)
      }
    }

    // console.log("stored cart", storedItem);
    setCart(storedCart)

  }, [])

  const handleRemoveCart = (id) => {
    console.log("Btn clicked", id);
    const remainingCart = cart.filter(bottle=> bottle.id !== id)
    setCart(remainingCart)
    removeFromLocalStorage(id)
  }

  const handleAddToCart = (bottle) => {
    // console.log("Btn clicked", bottle);
    const newCart = [...cart, bottle];
    setCart(newCart)

    addItemToLocalStorage(bottle.id)
  };

  return (
    <div className="container">
      <h1 className="title">Total bottle: {bottles.length}</h1>
      <h3>Successfully added to cart: {cart.length}</h3>

      <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>

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