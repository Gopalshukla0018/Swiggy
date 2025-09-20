import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
  
    addItem: (state, action) => {
      const newItem = { ...action.payload, quantity: 1 };
      state.items.push(newItem);
    },

    incrementQuantity: (state, action) => {
      const itemToIncrement = state.items.find(
        (item) => item.card.info.id === action.payload.id
      );
      if (itemToIncrement) {
        itemToIncrement.quantity += 1;
      }
    },

   
    decrementQuantity: (state, action) => {
      const itemToDecrement = state.items.find(
        (item) => item.card.info.id === action.payload.id
      );

      if (itemToDecrement) {
        if (itemToDecrement.quantity > 1) {
          itemToDecrement.quantity -= 1;
        } else {
          // If quantity is 1, filter it out from the array
          state.items = state.items.filter(
            (item) => item.card.info.id !== action.payload.id
          );
        }
      }
    },

    /**
     * Action to remove all items from the cart.
     */
    clearCart: (state) => {
      state.items.length = 0; // or state.items = [];
    },
  },
});

export const { addItem, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;