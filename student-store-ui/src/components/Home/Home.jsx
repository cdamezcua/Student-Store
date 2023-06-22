import * as React from "react";
import "./Home.css";
import ProductGrid from "../ProductGrid/ProductGrid";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

export default function Home({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  const [selectedCategory, setSelectedCategory] = useState("all-categories");
  const [searchParameter, setSearchParameter] = useState("");
  return (
    <div className="home">
      <p>Home</p>
      <SearchBar searchParameter={searchParameter} setSearchParameter={setSearchParameter} />
      <CategoryMenu
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductGrid
        products={products.filter((product) => {
          let meetsSearchCriteria = true;
          if (searchParameter !== "") {
            const searchParameterLower = searchParameter.toLowerCase();
            const productNameLower = product.name.toLowerCase();
            const productDescriptionLower = product.description.toLowerCase();
            if (
              !productNameLower.includes(searchParameterLower) &&
              !productDescriptionLower.includes(searchParameterLower)
            ) {
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
    </div>
  );
}
