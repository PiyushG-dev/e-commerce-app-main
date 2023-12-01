import React from "react";
import styles from "./css/Cart.module.css";
import CartItems from "../components/cartItems/CartItems";
import OrderDetails from "../components/orderDetails/OrderDetails";
import Acknowledge from "../components/acknowledge/Acknowledge";

const Cart = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <CartItems />
        <OrderDetails />
      </div>
      <Acknowledge />
    </div>
  );
};

export default Cart;
