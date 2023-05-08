import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { cartVisible: false ,notification:null};

const toggleSlice = createSlice({
  name: "toggle",
  initialState: initialCartState,
  reducers: {
    cartOpenClose(state) {
      state.cartVisible = !state.cartVisible;
    //   console.log(state.cartVisible);
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      };
    }
  },
});

export const uiAction = toggleSlice.actions;

export default toggleSlice.reducer;
