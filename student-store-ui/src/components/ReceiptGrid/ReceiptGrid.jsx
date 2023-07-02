import * as React from "react";
import "./ReceiptGrid.css";
import ReceiptCard from "../ReceiptCard/ReceiptCard";

export default function ReceiptGrid({ orders }) {
  return (
    <div className="receipt-grid">
      {orders.map((order) => {
        return <ReceiptCard order={order} isDetailed={false} />;
      })}
    </div>
  );
}
