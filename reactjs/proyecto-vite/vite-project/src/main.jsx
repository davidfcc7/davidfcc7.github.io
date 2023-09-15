import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' //se coloca App dentro de llabes porque indica 
//que se va a exportar mas de una funcion en el archivo de App.jsx y debe llevar el 
//mismo nombre de la funcion
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
)
