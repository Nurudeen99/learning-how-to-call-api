import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CheckTime from './components/checktime/Checktime.jsx'
import Home from './components/home/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Home/>
  </React.StrictMode>,
)
