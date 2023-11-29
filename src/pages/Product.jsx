import React from "react";
import styles from "./css/Product.module.css";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import ProductDisplay from "../components/productDisplay/ProductDisplay";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <section className={styles.wrapper}>
      {/* <Breadcrumb product={product} /> */}
      <ProductDisplay product={product} />
    </section>
  );
};

export default Product;
