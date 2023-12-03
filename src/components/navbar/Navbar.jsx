import React from "react";
import styles from "./Navbar.module.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faYoutube,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const Navbar = () => {
  const btn = useRef(null);
  const mobile_menu = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const screenWidth = window.innerWidth;

  const variants = {
    open: {
      width: 480,
      height: 650,
      top: "1vw",
      right: "1vw",
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: 100,
      height: 40,
      top: "3vw",
      right: "3vw",
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
  };

  useEffect(() => {
    if (screenWidth > 1000) {
      gsap.to(btn.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight,
          onLeave: () => {
            gsap.to(btn.current, {
              scale: 1,
              duration: 0.25,
              ease: "power1.out",
            });
          },
          onEnterBack: () => {
            gsap.to(btn.current, {
              scale: 0,
              duration: 0.25,
              ease: "power1.out",
            });
          },
        },
      });
      gsap.to(mobile_menu.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight,
          onLeave: () => {
            gsap.to(mobile_menu.current, {
              scale: 1,
              duration: 0.25,
              ease: "power1.out",
            });
          },
          onEnterBack: () => {
            gsap.to(mobile_menu.current, {
              scale: 0,
              duration: 0.25,
              ease: "power1.out",
            });
          },
        },
      });
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <h1>American</h1>
        <h1>
          Apparel<span className={styles.registered}>&#174;</span>
        </h1>
      </div>
      <div className={styles.menu}>
        <ul>
          <li>
            <Link style={{ color: "#000", textDecoration: "none" }} to="/">
              Shop
            </Link>
          </li>
          <li>
            <Link style={{ color: "#000", textDecoration: "none" }} to="/men">
              Men
            </Link>
          </li>
          <li>
            <Link style={{ color: "#000", textDecoration: "none" }} to="/women">
              Women
            </Link>
          </li>
          <li>
            <Link style={{ color: "#000", textDecoration: "none" }} to="/kids">
              Kids
            </Link>
          </li>
          <li className={styles}>
            <Link
              style={{ textDecoration: "none" }}
              className={styles.cart}
              to="/cart"
            >
              <FontAwesomeIcon
                className={styles.cart_icon}
                icon={faCartShopping}
              />
              <span className={styles.cart_quantity}>
                <span></span>
                <span>2</span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div
        ref={btn}
        onClick={() => setIsActive(!isActive)}
        className={styles.mobile_btn}
      >
        <motion.div
          className={styles.slider}
          animate={{ top: isActive ? "-100%" : "0" }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className={styles.el}>
            <p>menu</p>
          </div>
          <div className={styles.el}>
            <p>close</p>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
        className={styles.mobile_menu}
        ref={mobile_menu}
      ></motion.div>
    </div>
  );
};

export default Navbar;
