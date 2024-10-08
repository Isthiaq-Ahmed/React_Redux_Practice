/* eslint-disable no-unused-vars */
import { Box, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../redux_manager/slices/cartCountSlice'


const AddToCart = () => {
      // Here we are using the dispact provided buy the redux to manipulate the values of our cartCount state using the actions like addToCart and removeFromCart.
    let dispatch = useDispatch()
   
  return (
    <Box  display={'flex'} flexDirection={'row'} justifyContent={'center'} marginTop={5} >
    <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} gap={2} p={4} bgcolor={'black'}>
    <Button  variant='contained' onClick={()=>{dispatch(addToCart())}}>Add to cart</Button>
    <Button variant='contained' onClick={()=>{dispatch(removeFromCart())}}>Remove from cart</Button>
    </Box>
    </Box>
  )
}

export default AddToCart
