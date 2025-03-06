import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/";
import { removeFromCart } from "store/";
import ProductList from "./ProductList";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <ProductList />

      <div>
        <h2>Carrito de Compras</h2>
        <ul>
          {cart.cartItems.map((item: CartItem) => (
            <li key={item.id}>
              {item.title} - ${item.price} x {item.quantity}
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
        <p>
          Total: $
          {cart.cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          )}
        </p>
      </div>
    </>
  );
};

export default Cart;
