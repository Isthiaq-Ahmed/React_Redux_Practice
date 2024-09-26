import { configureStore } from "@reduxjs/toolkit";
import cartCountReducer from "./slices/cartCountSlice";
import enableBuyReducer from "./slices/enableBuy";
import fetchPostReducer from "./slices/fetchPostsData";

//This is the setup of our redux store

const reduxStore = configureStore({
    reducer:{
        cartCount: cartCountReducer,
        enableBuy: enableBuyReducer,
        postsData: fetchPostReducer,
    }
})

export default reduxStore