// import React from 'react'

/* eslint-disable react/prop-types */
// import React from "react";
import { cartContext } from "../App";
import "./product.css";
import { useContext } from "react";

export const Product = ({ product }) => {
  const { cart, setCart } = useContext(cartContext);
  const name =
    product.name.length > 20
      ? product.name.substring(0, 10) + ".."
      : product.name;
  const addCart = () => {
    setCart([...cart, product]);
  };
  const removeCart = () => {
    setCart(cart.filter((item) => item.id != product.id));
  };
  return (
    <div className="product">
      <div className="img">
        <img src={product.picture} alt={product.name} />
      </div>
      <div className="details">
        <h3>{name} </h3>
        <p>Price : {product.price}$</p>
        {cart.includes(product) ? (
          <button className="rmvBtn" onClick={removeCart}>
            Remove from Cart
          </button>
        ) : (
          <button onClick={addCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};
