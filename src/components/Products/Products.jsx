import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "Brinjal Moju",
      price: 10.0,
      description: "Delicious homemade Brinjal Moju.",
      image: "/images/brinjal.jfif",
    },
    {
      id: 2,
      title: "Pineapple Jam",
      price: 7.5,
      description: "Fresh and organic pineapple jam.",
      image: "/images/pineapple.jpeg",
    },
    {
      id: 3,
      title: "Mango Pickle",
      price: 8.0,
      description: "Spicy and tangy mango spicy pickle.",
      image: "/images/mango.jpeg",
    },
    {
      id: 4,
      title: "Mixed Veges",
      price: 12.0,
      description: "Healthy and fresh mixed vegetables.",
      image: "/images/vege.jpeg",
    },
  ];

  return (
    <div className="products">
      {products.map((product) => (
        <Link
          to={`/product-view/${product.id}`} // Dynamic route for each product
          key={product.id}
          className="product-link"
        >
          <div className="p1">
            <img src={product.image} className="product-image-1" alt={product.title} />
            <div className="stars">
              <img src="images/star.png" className="star" alt="" />
              <img src="images/star.png" className="star" alt="" />
              <img src="images/star.png" className="star" alt="" />
              <img src="images/star.png" className="star" alt="" />
              <img src="images/star.png" className="star" alt="" />
            </div>
            <div className="product-details">
              <h2 className="product-title">{product.title}</h2>
              <span className="product-price">${product.price.toFixed(2)}</span>
              <p>{product.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
