import React, { useContext } from "react";
import styles from "../pages/css/ShopCategory.module.css";
import { ShopContext } from "../context/ShopContext";
import Item from "../components/item/Item";
import Banner from "../components/banner/Banner";
import ProductText from "../components/productText/ProductText";

const ShopCategory = ({ category, banner1, banner2 }) => {
  const { all_product } = useContext(ShopContext);

  return (
    <>
      <Banner category={category} banner1={banner1} banner2={banner2} />
      <ProductText />
      <section className={styles.wrapper}>
        {all_product.map((item, i) => {
          if (category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                img={item.image}
                old_price={item.old_price}
                new_price={item.new_price}
                name={item.name}
              />
            );
          } else {
            return null;
          }
        })}
      </section>
    </>
  );
};

export default ShopCategory;
