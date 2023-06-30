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
import { Container } from "@mantine/core";
import Footer from "../Footer/Footer";
import SortSwitch from "../SortSwitch/SortSwitch";

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);
  const [shoppingCart, setShoppingCart] = useState({});
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
  const [isOpen, setIsOpen] = useState(false);
  const handleOnToggle = () => {
    setIsOpen((prev) => !prev);
  };
  const [checkoutForm, setCheckoutForm] = useState({
    name: "",
    email: "",
    acceptTerms: false,
  });
  const handleOnCheckoutFormChange = (event) => {
    const { name, value } = event.target;
    setCheckoutForm((prev) => {
      let ans = { ...prev };
      if (name === "acceptTerms") {
        ans[name] = !ans[name];
      } else {
        ans[name] = value;
      }
      return ans;
    });
  };
  const [sidebarOrder, setSidebarOrder] = useState(null);
  const fetchOrder = async () => {
    try {
      console.log("fetching order");
      const response = await fetch("http://localhost:3001/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            name: checkoutForm.name,
            email: checkoutForm.email,
          },
          shoppingCart: shoppingCart,
        }),
      });
      const order = await response.json();
      setSidebarOrder(order);
    } catch (error) {
      console.error(error);
    }
  };

  const [checkoutFormErrorMessage, setCheckoutFormErrorMessage] = useState([]);
  const handleOnSubmitCheckoutForm = (event) => {
    event.preventDefault();
    let ans = [];
    if (checkoutForm.name === "") {
      ans.push("Please enter your name");
    }
    if (checkoutForm.email === "") {
      ans.push("Please enter your email");
    }
    if (checkoutForm.acceptTerms === false) {
      ans.push("Please accept the terms and conditions");
    }
    setCheckoutFormErrorMessage(ans);
    if (ans.length === 0) {
      fetchOrder();
      setShoppingCart({});
      setCheckoutForm({ name: "", email: "", acceptTerms: false });
    }
  };
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar
            isOpen={isOpen}
            shoppingCart={shoppingCart}
            products={products}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            handleOnToggle={handleOnToggle}
            checkoutFormErrorMessage={checkoutFormErrorMessage}
            order={sidebarOrder}
          />
          <Container size="lg">
            <Hero />
            <SearchBar
              searchParameter={searchParameter}
              setSearchParameter={setSearchParameter}
            />
            <CategoryMenu
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <SortSwitch setProducts={setProducts} />
          </Container>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Container size="lg">
                    <Home
                      products={products}
                      handleAddItemToCart={handleAddItemToCart}
                      handleRemoveItemToCart={handleRemoveItemToCart}
                      searchParameter={searchParameter}
                      selectedCategory={selectedCategory}
                      shoppingCart={shoppingCart}
                    />
                  </Container>
                  <Footer />
                </>
              }
            />
            <Route
              path="/products/:productId"
              element={
                <Container size="lg">
                  <ProductDetail
                    handleAddItemToCart={handleAddItemToCart}
                    handleRemoveItemToCart={handleRemoveItemToCart}
                    shoppingCart={shoppingCart}
                  />
                </Container>
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
