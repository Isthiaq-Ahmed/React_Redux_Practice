import { createSlice } from "@reduxjs/toolkit";


// This slice is created to store the state value of our cart count we can use the provided action to increase or decrease the value of the state .
const initialState = {
    value: 0
}

const cartCountSlice = createSlice({
    name: 'cartCount',
    initialState,
    reducers:{
        addToCart: (state) => {state.value += 1},
        removeFromCart: (state) => {state.value -= 1},
    }


})
export const {addToCart, removeFromCart} = cartCountSlice.actions
export default cartCountSlice.reducer