import React from "react";
import styles from "./Banner.module.css";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Banner = ({ category, banner1, banner2 }) => {
  const head = useRef(null);
  const subHead = useRef(null);
  const btn = useRef(null);
  const bannerOne = useRef(null);
  const bannerTwo = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      head.current,
      { x: -200, opacity: 0 },
      { x: 0, duration: 0.5, opacity: 1 }
    );
    gsap.fromTo(
      subHead.current,
      { x: -200, opacity: 0 },
      { x: 0, duration: 0.5, opacity: 1, delay: 0.5 }
    );
    gsap.fromTo(
      btn.current,
      { y: 100, opacity: 0 },
      { y: 0, duration: 0.5, opacity: 1, delay: 0.5 }
    );
    gsap.fromTo(
      bannerOne.current,
      { y: 200, opacity: 0 },
      { y: 0, duration: 0.5, opacity: 1, delay: 0.5 }
    );
    gsap.fromTo(
      bannerTwo.current,
      { y: 200, opacity: 0 },
      { y: 0, duration: 0.5, opacity: 1, delay: 0.5 }
    );
  }, []);
  return (
    <section className={styles.wrapper}>
      <div className={styles.left}>
        <h1 ref={head}>for {category}</h1>
        <h2 ref={subHead}>
          Step into the future with our avant-grade designs that blend modern
          aesthetics with a nod to the digital age.
        </h2>
        <p ref={btn}>shop with us</p>
      </div>
      <div className={styles.center}>
        <img ref={bannerOne} src={banner1} alt="img" />
      </div>
      <div className={styles.right}>
        <img ref={bannerTwo} src={banner2} alt="img" />
      </div>
    </section>
  );
};

export default Banner;
