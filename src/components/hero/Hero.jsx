import React from "react";
import styles from "./Hero.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const textOne = useRef(null);
  const textTwo = useRef(null);
  const textThree = useRef(null);
  const textFour = useRef(null);
  const tagline = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textOne.current,
      { y: 200, opacity: 0 },
      { y: 0, duration: 0.5, opacity: 1 }
    );
    gsap.fromTo(
      textTwo.current,
      { y: 200, opacity: 0 },
      { y: 0, duration: 0.5, opacity: 1, delay: 0.2 }
    );
    gsap.fromTo(
      textThree.current,
      { y: 200, opacity: 0 },
      { y: 0, duration: 0.5, opacity: 1, delay: 0.4 }
    );
    gsap.fromTo(
      textFour.current,
      { y: 200, opacity: 0 },
      { y: 0, duration: 0.5, opacity: 1, delay: 0.6 }
    );
    gsap.fromTo(
      tagline.current,
      { y: 200, opacity: 0 },
      { y: 0, duration: 0.5, opacity: 1, delay: 0.8 }
    );
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.hero_text_container}>
        <div className={styles.hero_line_one}>
          <h1 ref={textOne}>bad</h1>
          <h1 ref={textTwo}>ideas</h1>
        </div>
        <div className={styles.hero_line_two}>
          <h1 ref={textThree}>good</h1>
          <h1 ref={textFour}>stories</h1>
        </div>
      </div>
      <div className={styles.tagline_container}>
        <h2 ref={tagline}>we make art into clothing</h2>
      </div>
    </section>
  );
};

export default Hero;
