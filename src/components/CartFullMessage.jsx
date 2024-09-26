import { Box, Button, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import {setBuyComp} from '../redux_manager/slices/enableBuy'

const CartFullMessage = () => {
  //Here we create a variable dispatch from the function useDispatch provided by the redux to acces the actions of the enbleBuy state to change it state.
    const dispatch = useDispatch()


  return (
    <Box display={'flex'} flexDirection={'column'} p={2} textAlign={'center'} justifyContent={'center'} sx={{color:'white'}} alignItems={'center'} >
      <Typography p={2} bgcolor={'black'} width={'fit-content'} >Your cart is full</Typography>
      <Button onClick={()=>{dispatch(setBuyComp(true))}}  variant='outlined' sx={{marginTop: '2rem'}}>Buy Now</Button>
    </Box>
  )
}

export default CartFullMessage
