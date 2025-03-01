import App from '@/app'
import About from '@/pages/about'
import Home from '@/pages/home'
import { Route, Routes } from 'react-router'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}
