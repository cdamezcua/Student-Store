import * as React from "react";
import "./Home.css";
import ProductGrid from "../ProductGrid/ProductGrid";
import { useState } from "react";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";

export default function Home({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  searchParameter,
  selectedCategory,
}) {
  return (
    <div className="home">
      <ProductGrid
        products={products.filter((product) => {
          let meetsSearchCriteria = true;
          if (searchParameter !== "") {
            const searchParameterLower = searchParameter.toLowerCase();
            const productNameLower = product.name.toLowerCase();
            if (!productNameLower.includes(searchParameterLower)) {
              meetsSearchCriteria = false;
            }
          }
          if (selectedCategory !== "all-categories") {
            if (product.category !== selectedCategory) {
              meetsSearchCriteria = false;
            }
          }
          return meetsSearchCriteria;
        })}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
      />
      <About />
      <ContactUs />
    </div>
  );
}
