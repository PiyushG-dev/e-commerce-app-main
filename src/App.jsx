import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import men_banner1 from "./image/6.jpeg";
import men_banner2 from "./image/17.jpeg";
import women_banner1 from "./assets/product_2.jpeg";
import women_banner2 from "./image/25.jpeg";
import Footer from "./components/footer/Footer";

const App = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={
              <ShopCategory
                banner1={men_banner1}
                banner2={men_banner2}
                category="men"
              />
            }
          />
          <Route
            path="/women"
            element={
              <ShopCategory
                banner1={women_banner1}
                banner2={women_banner2}
                category="women"
              />
            }
          />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
