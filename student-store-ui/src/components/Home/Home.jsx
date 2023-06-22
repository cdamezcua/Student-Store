import * as React from "react";
import "./Home.css";
import ProductGrid from "../ProductGrid/ProductGrid";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import { useState } from "react";

export default function Home({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  const [selectedCategory, setSelectedCategory] = useState("all-categories");
  return (
    <div className="home">
      <p>Home</p>
      <CategoryMenu
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductGrid
        products={products.filter((product) => {
          if (selectedCategory === "all-categories") {
            return true;
          }
          return product.category === selectedCategory;
        })}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
      />
    </div>
  );
}
