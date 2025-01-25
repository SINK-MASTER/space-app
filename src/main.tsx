import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import AppRouter from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)
