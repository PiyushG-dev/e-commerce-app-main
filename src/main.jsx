import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ShopContextProvider from "./context/ShopContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShopContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ShopContextProvider>
);
