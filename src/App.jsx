import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import ProductView from "./pages/ProductView/ProductView";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [cart, setCart] = useState([]); // Manage cart state
  const homeRef = useRef(null); // Ref for the Home component
  const footerRef = useRef(null); // Ref for the Footer
  const navigate = useNavigate();

  const scrollToSection = (section) => {
    if (section === "contact-us") {
      footerRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      homeRef.current?.scrollToSection(section); // Delegate to Home component
    }
  };

  // Function to add product to the cart and navigate to Cart page
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Add product to cart
    navigate("/cart"); // Navigate to Cart page
  };

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} scrollToSection={scrollToSection} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home ref={homeRef} />} />
            <Route
              path="/cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
            <Route path="/order" element={<PlaceOrder />} />
            <Route
              path="/product-view/:id"
              element={<ProductView addToCart={handleAddToCart} />}
            />
          </Routes>
        </div>
        <div ref={footerRef}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
