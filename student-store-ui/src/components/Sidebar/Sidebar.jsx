import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import ReceiptCard from "../ReceiptCard/ReceiptCard";

export default function Sidebar({
  isOpen,
  shoppingCart = {},
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle,
  checkoutFormErrorMessage,
  order,
}) {
  return (
    <section className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="toggle-button" onClick={handleOnToggle}>
        <i className="material-icons md-48">
          {isOpen ? "arrow_back" : "arrow_forward"}
        </i>
      </button>
      {isOpen ? (
        <ShoppingCart
          isOpen={isOpen}
          shoppingCart={shoppingCart}
          products={products}
        />
      ) : null}
      {isOpen && Object.keys(shoppingCart).length ? (
        <CheckoutForm
          shoppingCart={shoppingCart}
          products={products}
          checkoutForm={checkoutForm}
          handleOnCheckoutFormChange={handleOnCheckoutFormChange}
          handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
          checkoutFormErrorMessage={checkoutFormErrorMessage}
        />
      ) : null}
      {isOpen && order !== null ? (
        <ReceiptCard order={order} isDetailed={true} />
      ) : null}
    </section>
  );
}
