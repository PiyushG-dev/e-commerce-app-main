import React from "react";
import styles from "./Hero.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const head = useRef(null);
  const subHead = useRef(null);
  const tagline = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      head.current,
      { y: 200, opacity: 0 },
      { y: 0, duration: 0.5, opacity: 1 }
    );
    gsap.fromTo(
      subHead.current,
      { y: 200, opacity: 0 },
      { y: 0, duration: 0.5, opacity: 1, delay: 0.5 }
    );
    gsap.fromTo(
      tagline.current,
      { y: 200, opacity: 0 },
      { y: 0, duration: 0.5, opacity: 1, delay: 1 }
    );
  }, []);

  return (
    <section className={styles.wrapper}>
      <h1 ref={head}>Bad ideas</h1>
      <h1 ref={subHead}>Good stories</h1>
      <h2 data-scroll data-scroll-speed={0.1} ref={tagline}>
        we make art into clothing
      </h2>
    </section>
  );
};

export default Hero;
