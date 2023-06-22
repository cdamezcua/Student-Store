import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { useState, useEffect } from "react";
import ProductDetail from "../ProductDetail/ProductDetail";

export default function App() {
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState({});
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://codepath-store-api.herokuapp.com/store"
        );
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <ProductDetail />
          <Home
            products={products}
            handleAddItemToCart={(productId) => {
              setShoppingCart((prev) => {
                const newCart = { ...prev };
                newCart[productId] =
                  newCart[productId] === undefined ? 1 : newCart[productId] + 1;
                console.log("New cart: ", newCart);
                return newCart;
              });
            }}
            handleRemoveItemToCart={(productId) => {
              setShoppingCart((prev) => {
                const newCart = { ...prev };
                if (newCart[productId] === undefined) {
                  console.log("Nothing to remove");
                  return newCart;
                }
                if (newCart[productId] > 1) {
                  newCart[productId] = newCart[productId] - 1;
                } else if (newCart[productId] === 1) {
                  delete newCart[productId];
                }
                console.log("New cart: ", newCart);
                return newCart;
              });
            }}
          />
        </main>
      </BrowserRouter>
    </div>
  );
}
