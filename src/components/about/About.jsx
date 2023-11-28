import React from "react";
import styles from "./About.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const wrapper = useRef(null);
  const left = useRef(null);
  const p1 = useRef(null);
  const p2 = useRef(null);
  const p3 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      left.current,
      { x: -300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: wrapper.current,
          start: "top 70%",
        },
      }
    );
    gsap.fromTo(
      p1.current,
      { x: 300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: wrapper.current,
          start: "top 70%",
        },
      }
    );
    gsap.fromTo(
      p2.current,
      { x: 300, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.8,
        scrollTrigger: {
          trigger: wrapper.current,
          start: "top 70%",
        },
      }
    );
    gsap.fromTo(
      p3.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 1.1,
        scrollTrigger: {
          trigger: wrapper.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section ref={wrapper} className={styles.wrapper}>
      <div ref={left} className={styles.left}>
        <h1>We Believe in a story because we had one too</h1>
      </div>
      <div className={styles.right}>
        <p ref={p1}>
          We started from a garage with a sewing machine and a dream.
        </p>
        <p ref={p2}>
          Our apparel isn't for the faint-hearted; it's for the bold, the
          quirky, and the ones who think normal is overrated. Because who wants
          to be a basic algorithm when you can be the trendsetter, the
          head-turner, the talk-of-the-Twitterverse?
        </p>
        <p ref={p3}>shop with us</p>
      </div>
    </section>
  );
};

export default About;
