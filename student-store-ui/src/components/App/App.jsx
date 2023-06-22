import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import { useState, useEffect } from "react";
import ProductDetail from "../ProductDetail/ProductDetail";
import { Route, Routes } from "react-router-dom";
import Hero from "../Hero/Hero";
import SearchBar from "../SearchBar/SearchBar";
import CategoryMenu from "../CategoryMenu/CategoryMenu";

export default function App() {
  const [products, setProducts] = useState([]);
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
  const [shoppingCart, setShoppingCart] = useState({});
  const [shoppingCartTotal, setshoppingCartTotal] = useState(0);
  const handleAddItemToCart = (productId) => {
    setShoppingCart((prev) => {
      const newCart = { ...prev };
      if (newCart[productId] === undefined) {
        newCart[productId] = 1;
      } else {
        newCart[productId] = newCart[productId] + 1;
      }
      console.log("New cart: ", newCart);
      return newCart;
    });
    setshoppingCartTotal(
      (prev) => prev + products.find((p) => p.id === productId).price
    );
  };
  const handleRemoveItemToCart = (productId) => {
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
  };
  const [searchParameter, setSearchParameter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all-categories");
  console.log("New cart total: ", shoppingCartTotal);
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <Hero />
          <SearchBar
            searchParameter={searchParameter}
            setSearchParameter={setSearchParameter}
          />
          <CategoryMenu
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemToCart={handleRemoveItemToCart}
                  searchParameter={searchParameter}
                  selectedCategory={selectedCategory}
                />
              }
            />
            <Route path="/products/:productId" element={<ProductDetail 
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemToCart={handleRemoveItemToCart}
            />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
