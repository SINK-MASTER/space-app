import { Button } from '@heroui/react'
import { WebviewWindow } from '@tauri-apps/api/webviewWindow'
import React from 'react'

const Home: React.FC = () => {
  const createWindos = () => {
    new WebviewWindow('about', {
      url: '/about',
      title: 'about',
      width: 1024,
      height: 800
    })
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-2">
      <Button
        className="border bg-gradient-to-tr from-pink-700 to-purple-700 bg-clip-text text-transparent"
        onPress={createWindos}
      >
        Create New Windows
      </Button>
    </div>
  )
}
export default Home
