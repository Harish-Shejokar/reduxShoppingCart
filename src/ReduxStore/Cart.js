import { createSlice } from "@reduxjs/toolkit";

const cartItemIntialState = { cartItems: [], totalQuantity: 0,changed:false };

const cartSlice = createSlice({
  name: "cartItems",
  initialState: cartItemIntialState,
  reducers: {
    replaceCart(state, action) {
      state.cartItems = action.payload.cartItems;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addItemsToCart(state, action) {
      state.changed = true;
      const newItem = action.payload;
      //   console.log(newItem);
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
        );
        state.totalQuantity++;
        if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
      }
    },
    removeItemFromCart(state, action) {
      state.changed = true;
      const Id = action.payload;
      const existingItem = state.cartItems.find((item) => {
        // console.log(Id, item.id);
        return Id === item.id;
      });

      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== Id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;
