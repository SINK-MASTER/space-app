import { CircleAlert, House } from 'lucide-react'
import React from 'react'
import NavLinkItem from './nav-link-item'

const Navigation: React.FC = () => {
  return (
    <div data-tauri-drag-region className="w-[70px] h-full pt-8 border-r-1 border-neutral-700 text-[12px]">
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="cursor-pointer">
          <NavLinkItem icon={<House className="text-neutral-400 h-5" />} link="/home" label="home" />
        </div>
        <div className="cursor-pointer">
          <NavLinkItem icon={<CircleAlert className="text-neutral-400 h-5" />} link="/about" label="about" />
        </div>
      </div>
    </div>
  )
}
export default Navigation
