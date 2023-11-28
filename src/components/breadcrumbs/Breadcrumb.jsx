import React from "react";
import styles from "./Breadcrumb.module.css";
import arrow_icon from "../../assets/breadcrum_arrow.png";

const Breadcrumb = ({ product }) => {
  return (
    <div className={styles.breadcrumb}>
      HOME <img src={arrow_icon} alt="arrow" /> SHOP
      <img src={arrow_icon} alt="arrow" />
      {product.category}
      <img src={arrow_icon} alt="arrow" /> {product.name}
    </div>
  );
};

export default Breadcrumb;
