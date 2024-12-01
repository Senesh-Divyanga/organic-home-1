import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductView.css";

const ProductView = ({ addToCart }) => {
  const { id } = useParams(); // Get the product ID from the URL

  // Dummy product data
  const products = [
    {
      id: 1,
      title: "Brinjal Moju",
      price: 10.0,
      description: "Delicious homemade Brinjal Moju.",
      detailedDescription: "Brinjal Moju is a unique Sri Lankan dish made with brinjal...",
      mainImage: "/images/brinjal.jfif",
      sideImages: ["/images/star.png", "/images/overlay.png", "/images/about.jpg"],
    },
    {
      id: 2,
      title: "Pineapple Jam",
      price: 7.5,
      description: "Fresh and organic pineapple jam.",
      detailedDescription: "This pineapple jam is made with ripe, organic pineapples...",
      mainImage: "/images/pineapple.jpeg",
      sideImages: ["/images/about.jpg", "/images/star.png", "/images/overlay.png"],
    },
    {
      id: 3,
      title: "Mango Pickle",
      price: 8.0,
      description: "Spicy and tangy mango pickle.",
      detailedDescription: "Our Mango Pickle is made from the finest green mangoes...",
      mainImage: "/images/mango.jpeg",
      sideImages: ["/images/star.png", "/images/overlay.png", "/images/about.jpg"],
    },
    {
      id: 4,
      title: "Mixed Veges",
      price: 12.0,
      description: "Healthy and fresh mixed vegetables.",
      detailedDescription: "A variety of farm-fresh vegetables...",
      mainImage: "/images/vege.jpeg",
      sideImages: ["/images/about.jpg", "/images/star.png", "/images/overlay.png"],
    },
  ];

  // Find the product by ID
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const [mainImage, setMainImage] = useState(product.mainImage);

  const handleImageClick = (imageSrc) => {
    setMainImage(imageSrc); // Update main image
  };

  return (
    <div className="product-view">
      <div className="content">
        <div className="image-side">
          <div className="main-image">
            <img src={mainImage} alt="Main product view" />
          </div>
          <div className="side-images">
            {product.sideImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Side view ${index + 1}`}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
        <div className="product-details">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h2>${product.price.toFixed(2)}</h2>
          <p>{product.detailedDescription}</p>
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
