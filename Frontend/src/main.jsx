import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/style.css'
import HouseContextProvider from './contexts/HouseContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HouseContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HouseContextProvider>
)