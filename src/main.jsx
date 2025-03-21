import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HomePage from "./assets/components/pages/home.jsx";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/register" element={} />
        <Route path="/products" element={} />
        <Route path="/profile" element={} />
        <Route path="/product/:id" element={} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
