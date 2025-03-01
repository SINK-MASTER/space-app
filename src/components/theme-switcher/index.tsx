import { useSwitch, VisuallyHidden } from '@heroui/react'
import { useTheme } from '@heroui/use-theme'
import { useLocalStorageState } from 'ahooks'
import { MoonIcon, SunDimIcon } from 'lucide-react'
import React, { memo } from 'react'

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [themeCache, setThemeCache] = useLocalStorageState<string>('theme')

  React.useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    setTheme(themeCache || systemTheme)
  }, [])

  const { Component, slots, isSelected, getBaseProps, getInputProps, getWrapperProps } = useSwitch({
    isSelected: theme === 'light',
    onChange: () => {
      setTheme(theme === 'light' ? 'dark' : 'light')
      setThemeCache(theme === 'light' ? 'dark' : 'light')
    }
  })

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: ['h-auto w-auto', 'rounded-lg', 'flex items-center justify-center', 'pt-px', 'bg-transparent']
          })}
        >
          {isSelected ? <SunDimIcon width={20} /> : <MoonIcon width={20} />}
        </div>
      </Component>
    </div>
  )
}

export default memo(ThemeSwitcher)
