import { Navigation } from '@/components'
import { useTheme } from '@heroui/use-theme'
import { Outlet } from 'react-router'

const App: React.FC = () => {
  const { theme } = useTheme()

  return (
    <main className={`${theme} w-full h-dvh select-none`}>
      <div className="w-full h-full flex flex-row p-1">
        <Navigation />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </main>
  )
}
export default App
