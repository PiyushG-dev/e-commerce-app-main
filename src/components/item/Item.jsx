import React from "react";
import styles from "./Item.module.css";
import { Link } from "react-router-dom";

const Item = ({ img, old_price, new_price, name, id }) => {
  return (
    <div className={styles.item}>
      <Link to={`/product/${id}`}>
        <img src={img} alt="item" />
      </Link>
      <p className={styles.name}>{name}</p>
      <div className={styles.prices}>
        <p>${new_price}</p>
        <p>${old_price}</p>
      </div>
    </div>
  );
};

export default Item;
