import { Sun, Moon, Monitor } from 'lucide-react'
import { useThemeStore, type Theme } from '@/store/themeStore'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const themeOptions: { value: Theme; icon: React.ReactNode; label: string }[] = [
  { value: 'light', icon: <Sun className="h-4 w-4" />, label: 'Светлая тема' },
  { value: 'dark', icon: <Moon className="h-4 w-4" />, label: 'Тёмная тема' },
  { value: 'system', icon: <Monitor className="h-4 w-4" />, label: 'Системная тема' },
]

function ThemeToggle() {
  const { theme, setTheme } = useThemeStore()

  const cycleTheme = () => {
    const themes: Theme[] = ['light', 'dark', 'system']
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  const currentOption = themeOptions.find((opt) => opt.value === theme)

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      className={cn('h-9 w-9')}
      title={currentOption?.label}
    >
      {currentOption?.icon}
      <span className="sr-only">{currentOption?.label}</span>
    </Button>
  )
}

export function Header() {
  return (
    <header className="border-b bg-background">
      <div className="container flex h-14 items-center justify-between">
        <div className="font-semibold">Code Library</div>
        <ThemeToggle />
      </div>
    </header>
  )
}
