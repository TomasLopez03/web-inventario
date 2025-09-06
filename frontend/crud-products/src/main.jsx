import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ProductList } from './components/ProductList'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>    
  </StrictMode>,
)
