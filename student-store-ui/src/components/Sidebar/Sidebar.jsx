import * as React from "react";
import "./Sidebar.css";

export default function Sidebar({
  isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange = () => {},
  handleOnSubmitCheckoutForm = () => {},
  handleOnToggle= () => {},
}) {
  return (
    <section className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="toggle-button" onClick={handleOnToggle}>
        <i class="material-icons md-48">{isOpen ? "arrow_back" : "arrow_forward"}</i>
      </button>
    </section>
  );
}
