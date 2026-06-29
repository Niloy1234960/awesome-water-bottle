import React, { use, useEffect, useState } from "react";
import Bottle from "./Bottle";
import { addItemToLocalStorage, getCartFromLocalStoreage } from "../utilities/AddToLocalStorage";

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
    setCart(storedItem)

  }, [])

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