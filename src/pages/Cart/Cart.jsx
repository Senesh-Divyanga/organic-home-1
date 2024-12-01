import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const updateQuantity = (id, action) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          let newQuantity = item.quantity || 1;
          if (action === "increase") {
            newQuantity += 1;
          } else if (action === "decrease" && newQuantity > 1) {
            newQuantity -= 1;
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cart
      .reduce(
        (total, item) =>
          total + (parseFloat(item.price) || 0) * (item.quantity || 1),
        0
      )
      .toFixed(2);
  };

  const goToProducts = () => {
    navigate("/#products");
  };

  const handleCheckout = () => {
    if (cart.length > 0) {
      navigate("/order"); // Navigate to the Place Order page
    } else {
      alert("Your cart is empty. Add some items before checking out.");
    }
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <div>
          <p>You didn't add any products to your cart.</p>
          <button onClick={goToProducts}>Go to Products</button>
        </div>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.mainImage}
                alt={item.title}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h2>{item.title}</h2>
                <p>${(parseFloat(item.price) || 0).toFixed(2)}</p>
                <div className="quantity-controls">
                  <button
                    onClick={() => updateQuantity(item.id, "decrease")}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, "increase")}>
                    +
                  </button>
                </div>
                <p>
                  Total: $
                  {(
                    (parseFloat(item.price) || 0) *
                    (item.quantity || 1)
                  ).toFixed(2)}
                </p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <>
          <div className="cart-total">
            <h3>Total: ${calculateTotal()}</h3>
          </div>
          <button className="checkout-button" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
