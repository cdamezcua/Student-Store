import * as React from "react";
import "./ReceiptCard.css";
import { Card } from "@mantine/core";
import { Link } from "react-router-dom";

export default function ReceiptCard({ order, isDetailed }) {
  console.log("order: ", order);
  return (
    <div className="receipt-card">
      <Link to={`/orders/${order.id}`} className="receipt-card-link">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            {isDetailed ? (
              <div className="receipt-container">
                <h2>RECEIPT #{order.id}</h2>
                <p>Date: {order.date}</p>
                <h4>Customer Information</h4>
                <p>Name: {order.user.name}</p>
                <p>Email: {order.user.email}</p>
                <table>
                  <thead>
                    <tr>
                      <td>Quantity</td>
                      <td>Product</td>
                      <td>Cost</td>
                    </tr>
                  </thead>
                  <tbody>
                    {order.shoppingCart.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.quantity}</td>
                          <td> {item.name}</td>
                          <td>${item.cost.toFixed(2)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>Subtotal</td>
                      <td></td>
                      <td>${order.subtotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>Tax</td>
                      <td></td>
                      <td>${order.tax.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td></td>
                      <td>${order.total.toFixed(2)}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            ) : (
              <div className="receipt-container">
                <h2>RECEIPT #{order.id}</h2>
                <p>Date: {order.date}</p>
                <h4>Customer Information</h4>
                <p>Name: {order.user.name}</p>
                <p>Email: {order.user.email}</p>
                <p>Total: ${order.total.toFixed(2)}</p>
              </div>
            )}
          </Card.Section>
        </Card>
      </Link>
    </div>
  );
}
