import { Navigation } from '@/components'
import { Outlet } from 'react-router'

const App: React.FC = () => {
  return (
    <main className={'h-dvh w-full select-none'}>
      <div className="flex h-full w-full flex-row px-1">
        <Navigation />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </main>
  )
}
export default App
