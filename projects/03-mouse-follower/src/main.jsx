import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode no funciona en producción.
  // En dev, ejecuta los efectos los monta y desmonta para comprobar que funcionan correctamente.
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
