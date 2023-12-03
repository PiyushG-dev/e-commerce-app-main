import React, { useRef } from "react";
import styles from "./Gallery.module.css";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import g1_img from "../../image/12.jpeg";
import g2_img from "../../image/11.jpeg";
import g3_img from "../../image/3.jpeg";
import g4_img from "../../image/6.jpeg";
import g5_img from "../../image/20.jpeg";
import g6_img from "../../image/1.jpeg";
import g7_img from "../../image/9.jpeg";
import g8_img from "../../image/17.jpeg";
import g9_img from "../../image/8.jpeg";
import g10_img from "../../image/10.jpeg";
import g11_img from "../../image/15.jpeg";
import g12_img from "../../image/7.jpeg";

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
        <img src={g1_img} alt="img" />
        <img src={g2_img} alt="img" />
        <img src={g3_img} alt="img" />
      </div>
      <div ref={col_two} className={styles.col_two}>
        <img src={g4_img} alt="img" />
        <img src={g5_img} alt="img" />
        <img src={g6_img} alt="img" />
      </div>
      <div ref={col_three} className={styles.col_three}>
        <img src={g7_img} alt="img" />
        <img src={g8_img} alt="img" />
        <img src={g9_img} alt="img" />
      </div>
      <div ref={col_four} className={styles.col_four}>
        <img src={g10_img} alt="img" />
        <img src={g11_img} alt="img" />
        <img src={g12_img} alt="img" />
      </div>
    </section>
  );
};

export default Gallery;
