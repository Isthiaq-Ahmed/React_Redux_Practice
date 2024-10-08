import { createSlice } from "@reduxjs/toolkit";
import fetchData from "../../components/Api/fetchData";

// This is our slice for the fetch request that we are doing to get the posts data from a web api.

const initialState ={
    data:  [],
    loading: false,
    error: null,
}
const fetchPostsData = createSlice({
    name: 'postsData',
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchData.pending, (state)=>{state.loading = true})
        .addCase(fetchData.fulfilled, (state, action)=>{
            state.loading = false
            state.data = action.payload})
        .addCase(fetchData.rejected,(state, action)=>{state.error = action.error.message})
    }

})

export const {} = fetchPostsData.actions
export default fetchPostsData.reducer