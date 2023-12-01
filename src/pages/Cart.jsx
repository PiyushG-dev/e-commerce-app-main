import React from "react";
import styles from "./css/Cart.module.css";
import CartItems from "../components/cartItems/CartItems";
import OrderDetails from "../components/orderDetails/OrderDetails";

const Cart = () => {
  return (
    <div className={styles.wrapper}>
      <CartItems />
      <OrderDetails />
    </div>
  );
};

export default Cart;
