import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import QueryProvider from './lib/react-query/QueryProvider.tsx'
import MobileProvider from './components/store/index.tsx'
import AuthProvider from './context/AuthContext.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <MobileProvider>
    <AuthProvider>
    <QueryProvider>
    <App />
    </QueryProvider>
    </AuthProvider>
    </MobileProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
