import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './app.css'
import CityTimeProvider from './Context/CityTimeContext'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <React.StrictMode>
      <CityTimeProvider>
         <App />
      </CityTimeProvider>
   </React.StrictMode>
)
