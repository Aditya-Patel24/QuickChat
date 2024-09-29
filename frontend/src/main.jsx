import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/Authprovider.jsx'
import { SocketProvider } from './context/SocketContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <SocketProvider>
    <App />
    </SocketProvider>
  </AuthProvider>  
)
