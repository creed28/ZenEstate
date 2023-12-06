import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/style.css'
import HouseContextProvider from './contexts/HouseContext.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <HouseContextProvider>
        <React.StrictMode>
          <App /><ReactQueryDevtools initialIsOpen={false}/>
        </React.StrictMode>
      </HouseContextProvider>
    </AuthProvider>
  </QueryClientProvider>
)