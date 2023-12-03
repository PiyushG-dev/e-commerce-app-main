import React from "react";
import Hero from "../components/hero/Hero";
import Popular from "../components/popular/Popular";
import Gallery from "../components/gallery/Gallery";
import Collection from "../components/collection/Collection";
import About from "../components/about/About";
import Acknowledge from "../components/acknowledge/Acknowledge";

const Shop = () => {
  return (
    <>
      <Hero />
      <Collection />
      <About />
      <Popular />
      {/* <Gallery /> */}
      <Acknowledge />
    </>
  );
};

export default Shop;
