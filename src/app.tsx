import { Navigation } from '@/components'
import { Outlet } from 'react-router'

const App: React.FC = () => {
  return (
    <main className="bg-neutral-800 w-full h-dvh select-none">
      <div className="w-full h-full flex flex-row p-1 text-white">
        <Navigation />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </main>
  )
}
export default App
