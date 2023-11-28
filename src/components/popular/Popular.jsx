import React from "react";
import styles from "./Popular.module.css";
import { useEffect, useRef } from "react";
import data from "../../assets/data";
import Item from "../item/Item";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Popular = () => {
  const wrapper = useRef(null);
  const head = useRef(null);
  const items = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      head.current,
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
      items.current,
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
  }, []);

  return (
    <section ref={wrapper} className={styles.wrapper}>
      <div className={styles.heading}>
        <h1 ref={head}>just in</h1>
      </div>
      <div ref={items} className={styles.container}>
        {data.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              img={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
              name={item.name}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Popular;
