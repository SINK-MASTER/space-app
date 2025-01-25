import { Switch } from '@heroui/react'
import { useTheme } from '@heroui/use-theme'
import { Moon, Sun } from 'lucide-react'
import React from 'react'

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Switch
      height={2}
      defaultValue={theme}
      color="default"
      size="sm"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? <Sun className={className} /> : <Moon className={className} />
      }
      onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    />
  )
}

export default ThemeSwitcher
