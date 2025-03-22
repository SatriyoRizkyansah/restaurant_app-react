import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Fetch cart data dari API saat pertama kali
  const fetchCart = async () => {
    try {
      const res = await axios.get("http://localhost:3000/carts");
      setCart(res.data);
    } catch (err) {
      console.error("Gagal ambil cart:", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return <CartContext.Provider value={{ cart, setCart, fetchCart }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
