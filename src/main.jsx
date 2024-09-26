
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'

//Here we are importing the redux store that we have created in reduxStore.js file.
import reduxStore from './redux_manager/reduxStore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* the redux provider have the prop of store so we pass it our store */}
    <Provider store={reduxStore}>
    <App />
    </Provider>
  </StrictMode>,
)
