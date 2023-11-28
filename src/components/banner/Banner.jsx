import React from "react";
import styles from "./Banner.module.css";

const Banner = ({ category, banner1, banner2 }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.left}>
        <h1>for {category}</h1>
        <h2>
          Step into the future with our avant-garde designs that blend modern
          aesthetics with a nod to the digital age.
        </h2>
        <p>shop with us</p>
      </div>
      <div className={styles.center}>
        <img src={banner1} alt="img" />
      </div>
      <div className={styles.right}>
        <img src={banner2} alt="img" />
      </div>
    </section>
  );
};

export default Banner;
