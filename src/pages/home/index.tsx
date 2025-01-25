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
    <div className="p-2 h-full w-full flex flex-col justify-center items-center">
      <button className="rounded p-2 bg-neutral-900 cursor-pointer" onClick={createWindos}>
        <div className="bg-gradient-to-l from-pink-700 to-blue-500 text-transparent bg-clip-text">
          Create New Windows
        </div>
      </button>
    </div>
  )
}
export default Home
