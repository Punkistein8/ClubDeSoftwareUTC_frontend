import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'

import App from './App.jsx'
import { AuthProvider } from './context/AuthProvider.jsx'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HashRouter> */}
      {/* <BrowserRouter basename="/frontend"> */}
      <App />
      {/* </BrowserRouter> */}
    {/* </HashRouter> */}
  </React.StrictMode>
)
