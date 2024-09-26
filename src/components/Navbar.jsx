import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'


const Navbar = () => {
  // Here we are getting the value of cartCount state from our redux store and displaying it the Navbar.

    let cartCount = useSelector(state => state.cartCount)
   

  return (
    <Box p={2} display={'flex'} justifyContent={'space-evenly'} bgcolor={'black'} sx={{width: 'full',  color: 'white'}}>
      <Typography >Redux Usage</Typography>
      <Typography>Cart Count : {cartCount.value}  </Typography>
    </Box>
  )
}

export default Navbar
