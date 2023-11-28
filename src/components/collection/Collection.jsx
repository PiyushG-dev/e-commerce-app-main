import React from "react";
import styles from "./Collection.module.css";
import { useLayoutEffect, useRef } from "react";
import apparel_one from "../../assets/apparel_one.jpeg";
import apparel_two from "../../assets/apparel_two.jpeg";
import apparel_three from "../../assets/apparel_six.jpeg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Collection = () => {
  const apparels = useRef(null);
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      one.current,
      { y: 200 },
      {
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: apparels.current,
          start: "top 70%",
        },
      }
    );

    gsap.fromTo(
      two.current,
      { transform: "rotate(0)", left: 0, bottom: 0, opacity: 0 },
      {
        transform: "rotate(-10deg)",
        left: "-20rem",
        bottom: "2rem",
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: apparels.current,
          start: "top 70%",
        },
      }
    );
    gsap.fromTo(
      three.current,
      { transform: "rotate(0)", right: 0, bottom: 0, opacity: 0 },
      {
        transform: "rotate(10deg)",
        right: "-20rem",
        bottom: "2rem",
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: apparels.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section className={styles.wrapper}>
      <div ref={apparels} className={styles.apparel_container}>
        <img
          ref={one}
          className={styles.apparel_one}
          src={apparel_one}
          alt="apparel"
        />
        <img
          ref={two}
          className={styles.apparel_two}
          src={apparel_two}
          alt="apparel"
        />
        <img
          ref={three}
          className={styles.apparel_three}
          src={apparel_three}
          alt="apparel"
        />
      </div>
      <div data-scroll data-scroll-speed={0.1} className={styles.button}>
        shop with us
      </div>
    </section>
  );
};

export default Collection;
