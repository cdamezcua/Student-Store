import * as React from "react";
import "./Sidebar.css";

export default function Sidebar({
  isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange = () => {},
  handleOnSubmitCheckoutForm = () => {},
  handleOnToggle,
}) {
  return (
    <section className="sidebar">
      <button className="toggle-button">
      <i class="material-icons md-48">add_shopping_cart</i>
      </button>
    </section>
  );
}
