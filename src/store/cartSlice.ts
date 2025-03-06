import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const { id, title, price } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      console.log("existingItem", action.payload);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItems.push({ id, title, price, quantity: 1 });
      }
    },
  },
});

export const { removeFromCart, addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
