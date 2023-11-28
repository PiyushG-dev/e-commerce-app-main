import React from "react";
import styles from "./CartItems.module.css";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const CartItems = () => {
  const { all_product, removeFromCart, cartItems } = useContext(ShopContext);
  return (
    <div className={styles.CartItems}>
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div>
              <img src={product.image} alt="" />
              <p>{product.name}</p>
              <p>${product.new_price}</p>
              <button>{cartItems[product.id]}</button>
              <p>{product.new_price * cartItems[product.id]}</p>
              <button
                onClick={() => {
                  removeFromCart(product.id);
                }}
              >
                Remove item
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default CartItems;
