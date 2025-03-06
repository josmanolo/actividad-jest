import React from "react";

interface ProductProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button>Añadir al carrito</button>
    </div>
  );
};

export default Product;
