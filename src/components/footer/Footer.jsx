import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.logo}>
        <h1>American</h1>
        <h1>
          Apparel<span className={styles.registered}>&#174;</span>
        </h1>
      </div>
      <div className={styles.copyright}>
        ©2023 American Apparel, Inc. All rights reserved. Terms of use.
      </div>
      <div className={styles.socials}>
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faSnapchat} />
      </div>
    </section>
  );
};

export default Footer;
