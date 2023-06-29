import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart({ isOpen, shoppingCart = {}, products }) {
  return (
    <section className={`shopping-cart ${isOpen ? "open" : ""}`}>
      {isOpen ? <h2 className="shopping-cart-title">Shopping Cart</h2> : null}
      {isOpen && Object.keys(shoppingCart).length ? (
        <table className="shopping-cart-table">
          <thead className="shopping-cart-header">
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody className="shopping-cart-body">
            {Object.keys(shoppingCart).map((productId) => {
              const product = products.find(
                (product) => product.id === Number(productId)
              );
              return (
                <tr key={productId} className="shopping-cart-item">
                  <td>{product.name}</td>
                  <td>{shoppingCart[productId]}</td>
                  <td>{"$" + product.price.toFixed(2)}</td>
                  <td>
                    {"$" + (product.price * shoppingCart[productId]).toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">Subtotal</td>
              <td>
                {"$" +
                  Object.keys(shoppingCart)
                    .reduce(
                      (total, productId) =>
                        total +
                        products.find(
                          (product) => product.id === Number(productId)
                        ).price *
                          shoppingCart[productId],
                      0
                    )
                    .toFixed(2)}
              </td>
            </tr>
            <tr>
              <td colSpan="3">Tax</td>
              <td>
                {"$" +
                  Object.keys(shoppingCart)
                    .reduce(
                      (total, productId) =>
                        total +
                        products.find(
                          (product) => product.id === Number(productId)
                        ).price *
                          shoppingCart[productId] *
                          0.0875,
                      0
                    )
                    .toFixed(2)}
              </td>
            </tr>
            <tr>
              <td colSpan="3">Total</td>
              <td>
                {"$" +
                  Object.keys(shoppingCart)
                    .reduce(
                      (total, productId) =>
                        total +
                        products.find(
                          (product) => product.id === Number(productId)
                        ).price *
                          shoppingCart[productId] *
                          1.0875,
                      0
                    )
                    .toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      ) : null}
      {isOpen && !Object.keys(shoppingCart).length ? (
        <p className="shopping-cart-empty">
          No items added to cart yet. Start shopping now!
        </p>
      ) : null}
    </section>
  );
}
