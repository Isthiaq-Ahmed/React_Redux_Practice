import { useDispatch } from "react-redux"
import { Box, Typography } from "@mui/material"
import Navbar from "./components/Navbar"
import AddToCart from "./components/AddToCart"
import { useSelector } from "react-redux"
import BuyComp from "./components/BuyComp"
import CartFullMessage from "./components/cartFullMessage"
import { setBuyComp } from "./redux_manager/slices/enableBuy"
import FetchData from "./components/FetchData"



function App() {
  //Here we are using the Dispactch from the redux to update the state stored in the redux store.
  const dispatch = useDispatch()
  //Here we are getting the value of our cart from our redux store and storing it in the Variable cartCount
  const cartCount = useSelector(state => state.cartCount.value)
   //Here we are getting the value of our enableBuy state from our redux store and storing it in the Variable enableComp
  const enableComp = useSelector( state => state.enableBuy.value)
  //Here we are checking if the cartCount is less the 5 and then we will change the state of enbleBuy with the help of redux action that we create to set the value to false.
  if(cartCount < 5 ){dispatch(setBuyComp(false))}


  return (
    <Box textAlign={"center"}>
     <Navbar/>
      <Typography p={2} >Here we are using the cartCount state in two differenct components with the help of redux</Typography>
     <AddToCart/>
     <Typography p={2} >Here we display a message when cart value is greater or equal to 5</Typography>
     {/* here we are doing some check based on the differenct state to display the components. */}
     {cartCount >= 5 && 
     <CartFullMessage/>
     }
     {enableComp && 
     <BuyComp/>
     }
     <FetchData/>
    </Box>
  )
}

export default App
