import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Detalle del Producto {id}</h1>
      <p>Descripción del producto aquí.</p>
    </div>
  );
};

export default ProductDetail;

