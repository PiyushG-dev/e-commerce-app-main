import React from "react";
import styles from "./Acknowledge.module.css";

const Footer = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1>
          thank you for giving us the oppurtunity to serve you, we are an all
          american brand, made and establisted in the usa.
        </h1>
        <h2>since 1994</h2>
        <div className={styles.button}>shop with us</div>
      </div>
    </section>
  );
};

export default Footer;
