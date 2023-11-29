import React, { useRef } from "react";
import styles from "./Gallery.module.css";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Gallery = () => {
  const wrapper = useRef(null);
  const col_one = useRef(null);
  const col_two = useRef(null);
  const col_three = useRef(null);
  const col_four = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      col_one.current,
      { top: "-30%" },
      {
        top: "30%",
        scrollTrigger: {
          trigger: wrapper.current,
          scrub: 0.2,
        },
      }
    );
    gsap.fromTo(
      col_two.current,
      { top: "15%" },
      {
        top: "-5%",
        scrollTrigger: {
          trigger: wrapper.current,
          scrub: 0.2,
        },
      }
    );
    gsap.fromTo(
      col_three.current,
      { top: "-30%" },
      {
        top: "30%",
        scrollTrigger: {
          trigger: wrapper.current,
          scrub: 0.2,
        },
      }
    );
    gsap.fromTo(
      col_four.current,
      { top: "15%" },
      {
        top: "-5%",
        scrollTrigger: {
          trigger: wrapper.current,
          scrub: 0.2,
        },
      }
    );
  }, []);

  return (
    <section ref={wrapper} className={styles.wrapper}>
      <div ref={col_one} className={styles.col_one}>
        <img src="src/image/12.jpeg" alt="img" />
        <img src="src/image/11.jpeg" alt="img" />
        <img src="src/image/3.jpeg" alt="img" />
      </div>
      <div ref={col_two} className={styles.col_two}>
        <img src="src/image/6.jpeg" alt="img" />
        <img src="src/image/20.jpeg" alt="img" />
        <img src="src/image/1.jpeg" alt="img" />
      </div>
      <div ref={col_three} className={styles.col_three}>
        <img src="src/image/9.jpeg" alt="img" />
        <img src="src/image/17.jpeg" alt="img" />
        <img src="src/image/8.jpeg" alt="img" />
      </div>
      <div ref={col_four} className={styles.col_four}>
        <img src="src/image/10.jpeg" alt="img" />
        <img src="src/image/15.jpeg" alt="img" />
        <img src="src/image/7.jpeg" alt="img" />
      </div>
    </section>
  );
};

export default Gallery;
