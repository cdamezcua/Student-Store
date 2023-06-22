import * as React from "react";
import "./ProductDetail.css";

export default function ProductDetail({
  handleAddItemToCart,
  handleRemoveItemToCart,
}) {
  const [product, setProduct] = React.useState(null);
  const productId = window.location.pathname.split("/").pop();
  return (
    <div className="product-detail">
      <h1>Product details of product with id: {productId}</h1>
    </div>
  );
}
