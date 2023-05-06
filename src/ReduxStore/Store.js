import { configureStore,  } from "@reduxjs/toolkit";
import  cartReducer  from "./Cart";


const Store = configureStore({
    reducer: {
        Cart : cartReducer,
    }
})

export default Store;