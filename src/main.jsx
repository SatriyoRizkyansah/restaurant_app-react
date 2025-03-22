import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HomePage from "./assets/components/pages/home.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Footer from "./assets/components/Layouts/Footer.jsx";
import Navbar from "./assets/components/Layouts/Navbar.jsx";
import FoodsPage from "./assets/components/pages/foods.jsx";
import CartPage from "./assets/components/pages/carts.jsx";
import FoodDetailPage from "./assets/components/pages/food_detail.jsx";
import { CartProvider } from "./context/TotalCarts.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/foods" element={<FoodsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/foods/:id" element={<FoodDetailPage />} />
        </Routes>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
