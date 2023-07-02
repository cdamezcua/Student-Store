import * as React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  shoppingCart,
  wishlist,
  handleAddItemToWishlist,
  handleRemoveItemToWishlist,
}) {
  return (
    <div className="product-grid">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            productId={product.id}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemToCart={handleRemoveItemToCart}
            showDescription={false}
            quantity={shoppingCart[product.id] || 0}
            isOnWishlist={wishlist[product.id] || false}
            handleAddItemToWishlist={handleAddItemToWishlist}
            handleRemoveItemToWishlist={handleRemoveItemToWishlist}
          />
        );
      })}
    </div>
  );
}
