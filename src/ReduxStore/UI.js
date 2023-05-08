import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { cartVisible: false };

const toggleSlice = createSlice({
  name: "toggle",
  initialState: initialCartState,
  reducers: {
    cartOpenClose(state) {
      state.cartVisible = !state.cartVisible;
    //   console.log(state.cartVisible);
    },
  },
});

export const toggleAction = toggleSlice.actions;

export default toggleSlice.reducer;
