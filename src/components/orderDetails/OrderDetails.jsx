import React from "react";
import styles from "./OrderDetails.module.css";

const OrderDetails = () => {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Order details</p>
      <div className={styles.sub_total}>
        <p>Subtotal</p>
        <p>$334</p>
      </div>
      <div className={styles.other_fees}>
        <p>Shipping and handling fees</p>
        <p>$16</p>
      </div>
      <hr />
      <div className={styles.grand_total}>
        <p>Grand Total</p>
        <p>$350</p>
      </div>
      <button>Proceed to payment</button>
    </div>
  );
};

export default OrderDetails;
