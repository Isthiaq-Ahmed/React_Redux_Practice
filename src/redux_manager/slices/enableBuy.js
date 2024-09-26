import { createSlice } from "@reduxjs/toolkit";

// This is a slice for enableBuy component which have a state value of bool it can either be ture or false the initial value of this state is false . we can change the value of the state with setBuyComp action.

const initialState = {
    value: false
}
const enableBuySlice = createSlice({
    name:'enableBuy',
    initialState,
    reducers:{
        setBuyComp: (state, value) =>{ state.value = value.payload},
      
    }
})

export const {setBuyComp} = enableBuySlice.actions
export default enableBuySlice.reducer