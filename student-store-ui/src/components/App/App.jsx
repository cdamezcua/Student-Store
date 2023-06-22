import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";

export default function App() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
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
          <Home products={products} />
        </main>
      </BrowserRouter>
    </div>
  );
}
