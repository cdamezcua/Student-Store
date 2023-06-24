import * as React from "react";
import "./ProductDetail.css";
import { useState, useEffect } from "react";
import ProductView from "../ProductView/ProductView";

export default function ProductDetail({
  handleAddItemToCart,
  handleRemoveItemToCart,
  shoppingCart,
}) {
  const productId = window.location.pathname.split("/").pop();
  const [product, setProduct] = React.useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://codepath-store-api.herokuapp.com/store/${productId}`
        );
        const data = await response.json();
        setProduct(data.product);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, []);
  return (
    <div className="product-detail">
      {product ? (
        <ProductView
          product={product}
          productId={productId}
          quantity={shoppingCart[product.id] || 0}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
        />
      ) : null}
    </div>
  );
}
