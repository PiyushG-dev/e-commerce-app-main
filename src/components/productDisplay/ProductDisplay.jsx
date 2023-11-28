import React from "react";
import { useContext } from "react";
import styles from "./ProductDisplay.module.css";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div>
      <img src={product.image} alt="image" />
      <button
        onClick={() => {
          addToCart(product.id);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductDisplay;
