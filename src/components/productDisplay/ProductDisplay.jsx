import React from "react";
import { useContext } from "react";
import styles from "./ProductDisplay.module.css";
import { ShopContext } from "../../context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.product_image_container}>
        <img className={styles.product_image} src={product.image} alt="image" />
      </div>
      <div className={styles.product_info_container}>
        <div className={styles.product_name_container}>
          <h3>essentials</h3>
          <h1>T-shirt american apparel</h1>
          <p>$40.00</p>
          <p>*limited quantity</p>
          <hr />
        </div>
        <div className={styles.product_size_container}>
          <div className={styles.select_size}>
            <p>select size</p>
            <p>size guide</p>
          </div>
          <div className={styles.sizes}>
            <div className={styles.size}>XS</div>
            <div className={styles.size}>S</div>
            <div className={styles.size}>M</div>
            <div className={styles.size}>L</div>
            <div className={styles.size}>XL</div>
          </div>
          <hr />
        </div>
        <div className={styles.product_details_container}>
          <p>details</p>
          <p>Ribbed sleeve cuffs and waistband</p>
          <p>Cotton drawcord with knotted ends</p>
          <p>Kangaroo pocket on front body</p>
          <p>All-over print</p>
          <p>Machine wash with like colours</p>
          <hr />
        </div>
        <div className={styles.product_shipping_container}>
          <p>shipping</p>
          <p>
            shipping usually takes 3-5 business days but on heavy traffic and
            festive seasons it might take around 10 days
          </p>
          <hr />
        </div>
        <button
          className={styles.addToCart_btn}
          onClick={() => {
            addToCart(product.id);
          }}
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
