import React from "react";
import styles from "./NewCollection.module.css";
import collection from "../../assets/new_collections";
import Item from "../item/Item";

const NewCollection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.heading}>
        <h1>NEW COLLECTIONS</h1>
        <hr />
      </div>
      <div className={styles.container}>
        {collection.map((item, i) => {
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
        })}
      </div>
    </section>
  );
};

export default NewCollection;
