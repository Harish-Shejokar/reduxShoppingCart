import { configureStore,  } from "@reduxjs/toolkit";
import toggleReducer from "./UI";
import cartReducer from "./Cart";


const Store = configureStore({
    reducer: {
        ui: toggleReducer,
        cart : cartReducer,
        
    }
})

export default Store;