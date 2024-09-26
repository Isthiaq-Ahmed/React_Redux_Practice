import { createAsyncThunk } from "@reduxjs/toolkit"


// Here we are using the createAsyncThunk function provided buy the redux toolkit which create asynchronours actions for managing the side effects like pending fullfilled or reject. 
const fetchData = createAsyncThunk(
    'postsData/gettingPostData', async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        return await response.json()
    }
)
 
export default fetchData