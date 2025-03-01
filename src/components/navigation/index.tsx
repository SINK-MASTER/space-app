import { Listbox, ListboxItem } from '@heroui/react'
import { BotIcon, CircleAlert } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router'
import ThemeSwitcher from '../theme-switcher'

const Navigation: React.FC = () => {
  return (
    <div data-tauri-drag-region className="h-full w-16 border-r border-default-100 pt-10">
      <div data-tauri-drag-region className="flex h-full w-full flex-col items-center overflow-auto">
        <div data-tauri-drag-region className="flex-1">
          <Listbox>
            <ListboxItem>
              <NavLink to="/home">
                <BotIcon size={20} />
              </NavLink>
            </ListboxItem>
          </Listbox>
        </div>
        <div data-tauri-drag-region className="flex h-fit w-full flex-col items-center justify-center gap-4 pb-4">
          <NavLink to="/about">
            <CircleAlert size={20} />
          </NavLink>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  )
}
export default Navigation
