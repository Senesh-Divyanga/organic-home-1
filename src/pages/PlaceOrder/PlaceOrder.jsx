import React, { useState } from "react";
import "./PlaceOrder.css";

const PlaceOrder = ({ cart, total }) => {
  const [orderDetails, setOrderDetails] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    paymentMethod: "credit-card",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully! Thank you for your purchase.");
    // Reset form
    setOrderDetails({
      name: "",
      address: "",
      email: "",
      phone: "",
      paymentMethod: "credit-card",
    });
  };

  return (
    <div className="place-order">
      <h1>Place Your Order</h1>
      <div className="order-container">
        {/* User Details Form */}
        <div className="user-details">
          <h2>Customer Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={orderDetails.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Delivery Address</label>
              <textarea
                id="address"
                name="address"
                value={orderDetails.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={orderDetails.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={orderDetails.phone}
                onChange={handleChange}
                required
              />
            </div>
            <h2>Payment Options</h2>
            <div className="form-group">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit-card"
                  checked={orderDetails.paymentMethod === "credit-card"}
                  onChange={handleChange}
                />
                Credit Card
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  onChange={handleChange}
                />
                PayPal
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash-on-delivery"
                  onChange={handleChange}
                />
                Cash on Delivery
              </label>
            </div>
            <button type="submit" className="submit-button">
              Confirm Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="order-items">
            {cart.map((item) => (
              <div className="order-item" key={item.id}>
                <img src={item.mainImage} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>Quantity: {item.quantity || 1}</p>
                  <p>
                    Price: $
                    {((parseFloat(item.price) || 0) * (item.quantity || 1)).toFixed(
                      2
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <h3 className="total">Total: ${total}</h3>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
