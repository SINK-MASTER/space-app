import '@/styles/global.css'
import { HeroUIProvider } from '@heroui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import AppRouter from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
        <AppRouter />
      </HeroUIProvider>
    </BrowserRouter>
  </React.StrictMode>
)
