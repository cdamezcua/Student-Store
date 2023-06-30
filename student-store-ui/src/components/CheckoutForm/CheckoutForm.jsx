import * as React from "react";
import "./CheckoutForm.css";

export default function Sidebar({
  checkoutForm = { name: "", email: "" },
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  checkoutFormErrorMessage,
}) {
  return (
    <div className="checkout-form">
      <h2 className="checkout-form-title">Checkout Form</h2>
      <form className="form-group" onSubmit={handleOnSubmitCheckoutForm}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className="form-control"
          value={checkoutForm.name}
          onChange={(event) => {
            handleOnCheckoutFormChange(event);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          className="form-control"
          value={checkoutForm.email}
          onChange={(event) => {
            handleOnCheckoutFormChange(event);
          }}
        />
        <div className="ckeckbox-container">
          <input
            id="acceptTerms"
            name="acceptTerms"
            type="checkbox"
            className="form-control"
            value={checkoutForm.acceptTerms}
            onChange={(event) => {
              handleOnCheckoutFormChange(event);
            }}
          />
          <label htmlFor="acceptTerms">
            I agree to the terms and conditions
          </label>
        </div>
        {checkoutFormErrorMessage !== [] ? (
          checkoutFormErrorMessage.map((errorMessage) => {
            return <p className="error-message">{errorMessage}</p>;
          })
        ) : null}
        <button
          className="checkout-btn"
          onClick={(event) => handleOnSubmitCheckoutForm(event)}
        >
          Checkout
        </button>
      </form>
    </div>
  );
}
