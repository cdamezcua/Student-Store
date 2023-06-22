import * as React from "react";
import "./ProductDetail.css";

export default function ProductDetail({handleAddItemToCart, handleRemoveItemToCart}) {
  const [product, setProduct] = React.useState(null);
  return (
    <div className="product-detail">
      <h1>Product detail</h1>
    </div>
  );
}
