import { createSlice } from "@reduxjs/toolkit";


const initialCartState = {cartVisible : false,}


const cartSlice = createSlice({
    name: "Cart",
    initialState: initialCartState,
    reducers: {
        cartOpenClose(state) {
            state.cartVisible = !state.cartVisible;
            console.log(state.cartVisible)
        }
    }
})

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;