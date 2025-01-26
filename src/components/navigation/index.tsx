import { ThemeSwitcher } from '@/components'
import { CircleAlert, House } from 'lucide-react'
import React from 'react'
import NavLinkItem from './nav-link-item'

const Navigation: React.FC = () => {
  return (
    <div data-tauri-drag-region className="w-[70px] h-full pt-8 border-r-1 dark:border-neutral-700 text-[12px]">
      <div data-tauri-drag-region className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-4 justify-center items-center ">
          <div className="cursor-pointer">
            <NavLinkItem icon={<House className="h-5" />} link="/home" label="home" />
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center pb-4">
          <div className="cursor-pointer">
            <NavLinkItem icon={<CircleAlert className="h-5" />} link="/about" />
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  )
}
export default Navigation
