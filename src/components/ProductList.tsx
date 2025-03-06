import { addItemToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const products = [
  {
    id: 1,
    title: "Producto 1",
    price: 1233,
    description: "Descripción del producto 1",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Producto 2",
    price: 1233,
    description: "Descripción del producto 2",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Producto 3",
    price: 1233,
    description: "Descripción del producto 3",
    image: "https://via.placeholder.com/150",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleOnclick = (product: any) => {
    dispatch(addItemToCart(product));
  };

  return products.map((product) => {
    console.log("product", product);

    return (
      <div className="product-card" key={product.id}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button onClick={() => handleOnclick(product)}>
          Añadir al carrito
        </button>
      </div>
    );
  });
};

export default ProductList;
