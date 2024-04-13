import { useState } from "react";
import data from "../assets/product.json";
import { Product } from "./Product";
import "./home.css";
export const Home = () => {
  const [products] = useState(data);
  return (
    <div className="product-container">
      {products.map((item, index) => (
        <Product  key={index} product={item} />
      ))}
    </div>
  );
};
