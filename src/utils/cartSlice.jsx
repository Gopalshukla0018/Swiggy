import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    /**
     * Action to add an item to the cart for the first time.
     * It adds a 'quantity: 1' property to the item object.
     */
    addItem: (state, action) => {
      const newItem = { ...action.payload, quantity: 1 };
      state.items.push(newItem);
    },

    /**
     * Action to increment the quantity of an item already in the cart.
     * It finds the item by its ID and increases its quantity by 1.
     */
    incrementQuantity: (state, action) => {
      const itemToIncrement = state.items.find(
        (item) => item.card.info.id === action.payload.id
      );
      if (itemToIncrement) {
        itemToIncrement.quantity += 1;
      }
    },

    /**
     * Action to decrement the quantity of an item.
     * - If quantity > 1, it decreases the quantity by 1.
     * - If quantity is 1, it removes the item completely from the cart.
     */
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