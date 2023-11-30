import React from "react";
import styles from "./ProductText.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProductText = () => {
  const intro = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      intro.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        duration: 0.5,
        opacity: 1,
        scrollTrigger: {
          trigger: intro.current,
          start: "top 90%",
        },
      }
    );
  }, []);
  return (
    <div ref={intro} className={styles.product_intro}>
      Step into the future with our avant-grade designs that blend modern
      aesthetics with a nod to the digital age.
    </div>
  );
};

export default ProductText;
