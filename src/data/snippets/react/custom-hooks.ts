import type { Snippet } from '@/types'

export const customHooksSnippets: Snippet[] = [
  {
    id: 'use-debounce',
    title: 'useDebounce',
    description: 'Хук для debounce значения. Возвращает значение только после паузы в изменениях. Идеально для поиска.',
    language: 'tsx',
    level: 'intermediate',
    tags: ['hook', 'debounce', 'performance', 'search'],
    code: `import { useState, useEffect } from 'react'

function useDebounce<T>(value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}

// Использование
function SearchInput() {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 500)

  useEffect(() => {
    if (debouncedQuery) {
      // API вызов только после 500ms паузы
      fetchResults(debouncedQuery)
    }
  }, [debouncedQuery])

  return <input value={query} onChange={e => setQuery(e.target.value)} />
}`,
    whyRelevant2026: 'Базовый паттерн оптимизации. Уменьшает количество API запросов и ререндеров.',
  },
  {
    id: 'use-local-storage',
    title: 'useLocalStorage',
    description: 'Хук для синхронизации state с localStorage. Автоматически сериализует/десериализует JSON.',
    language: 'tsx',
    level: 'intermediate',
    tags: ['hook', 'storage', 'persistence', 'state'],
    code: `import { useState, useEffect } from 'react'

function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error('localStorage error:', error)
    }
  }, [key, value])

  return [value, setValue] as const
}

// Использование
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  const [user, setUser] = useLocalStorage('user', { name: '' })

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Тема: {theme}
    </button>
  )
}`,
    whyRelevant2026: 'Персистентность без бэкенда. Работает с SSR если добавить проверку typeof window.',
  },
  {
    id: 'use-media-query',
    title: 'useMediaQuery',
    description: 'Хук для отслеживания медиа-запросов. Реагирует на изменение размера окна в реальном времени.',
    language: 'tsx',
    level: 'intermediate',
    tags: ['hook', 'responsive', 'media-query', 'breakpoint'],
    code: `import { useState, useEffect } from 'react'

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia(query).matches
      : false
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches)

    mediaQuery.addEventListener('change', handler)
    setMatches(mediaQuery.matches)

    return () => mediaQuery.removeEventListener('change', handler)
  }, [query])

  return matches
}

// Использование
function Navigation() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')

  return isMobile ? <MobileNav /> : <DesktopNav />
}

// Хелперы
const useIsMobile = () => useMediaQuery('(max-width: 768px)')
const useIsTablet = () => useMediaQuery('(min-width: 769px) and (max-width: 1024px)')
const useIsDesktop = () => useMediaQuery('(min-width: 1025px)')`,
    whyRelevant2026: 'CSS-in-JS уходит, но JS всё ещё нужен для условного рендеринга компонентов.',
  },
  {
    id: 'use-click-outside',
    title: 'useClickOutside',
    description: 'Хук для обработки клика вне элемента. Используется для закрытия модалок, dropdown, popover.',
    language: 'tsx',
    level: 'intermediate',
    tags: ['hook', 'click', 'modal', 'dropdown'],
    code: `import { useEffect, useRef } from 'react'

function useClickOutside<T extends HTMLElement>(
  handler: () => void
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler()
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [handler])

  return ref
}

// Использование
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false))

  return (
    <div ref={ref}>
      <button onClick={() => setIsOpen(true)}>Открыть</button>
      {isOpen && <div className="dropdown">Контент</div>}
    </div>
  )
}`,
    whyRelevant2026: 'Необходим для любых выпадающих элементов. Popover API не покрывает все кейсы.',
  },
  {
    id: 'use-infinite-scroll',
    title: 'useInfiniteScroll',
    description: 'Хук для бесконечной прокрутки с IntersectionObserver. Вызывает callback когда элемент появляется в viewport.',
    language: 'tsx',
    level: 'advanced',
    tags: ['hook', 'scroll', 'pagination', 'intersection-observer'],
    code: `import { useEffect, useRef, useCallback } from 'react'

function useInfiniteScroll(
  callback: () => void,
  options?: IntersectionObserverInit
) {
  const targetRef = useRef<HTMLDivElement>(null)

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0]?.isIntersecting) {
        callback()
      }
    },
    [callback]
  )

  useEffect(() => {
    const target = targetRef.current
    if (!target) return

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.1,
      rootMargin: '100px',
      ...options,
    })

    observer.observe(target)
    return () => observer.disconnect()
  }, [handleIntersect, options])

  return targetRef
}

// Использование
function Feed() {
  const [items, setItems] = useState<Item[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const loadMore = useCallback(async () => {
    if (loading) return
    setLoading(true)
    const newItems = await fetchItems(page)
    setItems(prev => [...prev, ...newItems])
    setPage(p => p + 1)
    setLoading(false)
  }, [page, loading])

  const loaderRef = useInfiniteScroll(loadMore)

  return (
    <div>
      {items.map(item => <Card key={item.id} {...item} />)}
      <div ref={loaderRef}>{loading && <Spinner />}</div>
    </div>
  )
}`,
    whyRelevant2026: 'IntersectionObserver эффективнее scroll event. Стандарт для лент и каталогов.',
  },
  {
    id: 'use-copy-to-clipboard',
    title: 'useCopyToClipboard',
    description: 'Хук для копирования текста в буфер обмена. Возвращает функцию копирования и статус.',
    language: 'tsx',
    level: 'beginner',
    tags: ['hook', 'clipboard', 'copy', 'utility'],
    code: `import { useState, useCallback } from 'react'

function useCopyToClipboard() {
  const [copied, setCopied] = useState(false)

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      return true
    } catch (err) {
      console.error('Copy failed:', err)
      setCopied(false)
      return false
    }
  }, [])

  return { copy, copied }
}

// Использование
function CodeBlock({ code }: { code: string }) {
  const { copy, copied } = useCopyToClipboard()

  return (
    <div>
      <pre>{code}</pre>
      <button onClick={() => copy(code)}>
        {copied ? '✓ Скопировано' : 'Копировать'}
      </button>
    </div>
  )
}`,
    whyRelevant2026: 'Clipboard API асинхронный и требует обработки ошибок. Хук инкапсулирует логику.',
  },
  {
    id: 'portal-component',
    title: 'Portal',
    description: 'Компонент для рендеринга children вне DOM-иерархии родителя. Для модалок, тултипов, нотификаций.',
    language: 'tsx',
    level: 'intermediate',
    tags: ['component', 'portal', 'modal', 'overlay'],
    code: `import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: React.ReactNode
  containerId?: string
}

function Portal({ children, containerId = 'portal-root' }: PortalProps) {
  const [container, setContainer] = useState<HTMLElement | null>(null)

  useEffect(() => {
    let el = document.getElementById(containerId)

    if (!el) {
      el = document.createElement('div')
      el.id = containerId
      document.body.appendChild(el)
    }

    setContainer(el)

    return () => {
      if (el?.childNodes.length === 0) {
        el.remove()
      }
    }
  }, [containerId])

  if (!container) return null

  return createPortal(children, container)
}

// Использование
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null

  return (
    <Portal>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </Portal>
  )
}`,
    whyRelevant2026: 'Порталы решают проблему z-index и overflow. Основа для любых overlay компонентов.',
  },
  {
    id: 'skeleton-component',
    title: 'Skeleton',
    description: 'Компонент-заглушка для loading state. Показывает анимированный placeholder вместо контента.',
    language: 'tsx',
    level: 'beginner',
    tags: ['component', 'loading', 'skeleton', 'placeholder'],
    code: `interface SkeletonProps {
  width?: string | number
  height?: string | number
  circle?: boolean
  className?: string
}

function Skeleton({
  width = '100%',
  height = '1rem',
  circle = false,
  className = '',
}: SkeletonProps) {
  return (
    <div
      className={\`skeleton \${className}\`}
      style={{
        width,
        height,
        borderRadius: circle ? '50%' : '0.25rem',
      }}
    />
  )
}

// CSS (добавить в стили)
// .skeleton {
//   background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
//   background-size: 200% 100%;
//   animation: shimmer 1.5s infinite;
// }
// @keyframes shimmer {
//   0% { background-position: 200% 0; }
//   100% { background-position: -200% 0; }
// }

// Использование
function UserCardSkeleton() {
  return (
    <div className="card">
      <Skeleton circle width={48} height={48} />
      <Skeleton width="60%" height="1.25rem" />
      <Skeleton width="80%" />
      <Skeleton width="40%" />
    </div>
  )
}

function UserCard({ user, loading }) {
  if (loading) return <UserCardSkeleton />
  return <div>{user.name}</div>
}`,
    whyRelevant2026: 'Skeleton UI улучшает воспринимаемую скорость загрузки. Стандарт для современных интерфейсов.',
  },
]
