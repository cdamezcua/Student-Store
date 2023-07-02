import * as React from "react";
import "./ReceiptDetail.css";
import { useEffect } from "react";
import ReceiptCard from "../ReceiptCard/ReceiptCard";

export default function ProductDetail({ orders }) {
  const orderId = window.location.pathname.split("/").pop();
  const [order, setOrder] = React.useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3001/orders/${orderId}`);
        const data = await response.json();
        setOrder(data.order);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, []);
  return (
    <div className="order-detail">
      {order ? <ReceiptCard order={order} isDetailed={true} /> : null}
    </div>
  );
}
