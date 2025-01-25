import '@/styles/global.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)
