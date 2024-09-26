import { Box, Typography } from '@mui/material'
import  { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import fetchData from './Api/fetchData'
import { useDispatch } from 'react-redux'


const FetchData =  () => {

    const dispatch = useDispatch()
    //Here we are getting the Post data from our redux store from the postsData state.
    const postsData = useSelector((state) => state.postsData);
    //Here these are some value that our postsData Provide to be used in the component.
    const {data, loading, error} = postsData
    console.log(postsData)


    

    useEffect(()=>{
        dispatch(fetchData())
    },[])
  return (
    <Box>
      {/* here we are using the ternary operator to dispay certain elements */}
        {loading ? 
            <Box>Loading....</Box>
        : 
        error ? 
        <Box> {error}</Box>
        : 
        data.slice(1, 10).map((dataItem)=>(
            <Typography fontSize={12}  key={dataItem.id}>
                <Typography>{dataItem.title}</Typography>
            </Typography>
          ))
    }
    </Box>
  )
}

export default FetchData
