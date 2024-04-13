import { useState, useEffect, useContext } from "react";
import "./cart.css";
import { cartContext } from "../App";
export const Viewcart = () => {
  const { cart, setCart } = useContext(cartContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, cur) => acc + parseInt(cur.price), 0));
  }, [cart]);

  return (
    <>
      <h1> Cart Product</h1>
      <div className="cart-container">
        {cart.map((item, index) => (
          <div key={index} className="cart-product">
            <div className="imgs">
              <img src={item.picture} alt="img" />
            </div>
            <div className="cart-product-details">
              <h3>{item.name}</h3>
              <p>price:{item.price}$</p>
            </div>
          </div>
        ))}
        {/* <div className="cart-product">
          <div className="img">
            <img src="https://placehold.co/100x100" alt="img" />
          </div>
          <div className="cart-product-details">
            <h3>Product Name</h3>
            <p>price:4.55$</p>
          </div>
        </div> */}
      </div>
      <div className="amount">
        <h2>Total Amount : {total}$</h2>
      </div>
    </>
  );
};
