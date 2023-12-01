import React from "react";
import styles from "./CartItems.module.css";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const CartItems = () => {
  const { all_product, removeFromCart, cartItems } = useContext(ShopContext);
  return (
    <div className={styles.cartItems_container}>
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div className={styles.cart_item}>
              <img className={styles.cart_img} src={product.image} alt="" />
              <div className={styles.cart_info}>
                <h1 className={styles.cart_item_name}>
                  {product.name}
                  <span>| essentials</span>
                </h1>
                <div className={styles.cart_sub_info}>
                  <p>Color: White</p>
                  <p>Size: 01/XL</p>
                </div>
              </div>
              <div className={styles.cart_item_quantity}>
                <button>-</button>
                <p>{cartItems[product.id]}</p>
                <button>+</button>
              </div>
              <div className={styles.cart_item_prices}>
                {/* <p>Total:{product.new_price * cartItems[product.id]}</p> */}
                <p className={styles.cart_item_price}>${product.new_price}</p>
                <button
                  onClick={() => {
                    removeFromCart(product.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default CartItems;
