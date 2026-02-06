# Code Library

Библиотека 215+ сниппетов и примеров кода для современной веб-разработки.

## Tech Stack

- **React 19** + TypeScript
- **Vite 7** — сборка
- **Tailwind CSS v4** — стили (CSS-first конфигурация)
- **shadcn/ui** — UI компоненты
- **React Router** — навигация
- **Zustand** — state management
- **react-syntax-highlighter** — подсветка кода
- **PWA** — работа офлайн

## Возможности

- 🏠 Главная страница с приветствием и статистикой
- 📚 Каталог сниппетов с поиском и фильтрами
- ❤️ Страница избранного с анимацией сердечка
- 🎯 Quiz режим — угадай что делает код
- 🌓 Тёмная/светлая/системная тема
- 📋 Копирование кода в буфер обмена
- 🔍 Фильтрация по категориям и уровню сложности
- 📊 Группировка и статистика по уровням
- 🎨 Подсветка синтаксиса для TypeScript, JavaScript, React, CSS, HTML
- ✨ Анимации: floating icons, skeleton loading, heart pop
- 📱 PWA — установка как приложение, работа офлайн

## Сниппеты (215+ шт.)

### TypeScript (50 сниппетов)
- **Utility Types** — Partial, Required, Pick, Omit, Record
- **Generics** — Generic Functions, Constraints, Conditional Types
- **Advanced** — Discriminated Unions, Type Guards, Template Literals
- **Decorators** — Class, Method, Field, Accessor Decorators
- **Patterns** — Builder, Factory, Strategy, Observer, State Machine

### JavaScript (59 сниппетов)
- **ES2025+** — Array.at, findLast, Object.groupBy, Promise.withResolvers
- **Async** — async/await, Promise.all/allSettled/race, AbortController
- **Web APIs** — Fetch, IntersectionObserver, Web Storage, Clipboard
- **Utilities** — debounce, throttle, deepClone, memoize, pipe/compose
- **Advanced** — retry backoff, EventEmitter, UUID, number formatting

### React (48 сниппетов)
- **Hooks** — useState, useEffect, useMemo, useCallback, useRef
- **Custom Hooks** — useDebounce, useLocalStorage, useMediaQuery, useClickOutside
- **Patterns** — Suspense, Error Boundaries, Compound Components, Portal
- **Server Components** — RSC, Client Components, Server Actions
- **Performance** — memo, Virtualization, Code Splitting

### CSS/Tailwind (37 сниппетов)
- **Selectors** — :has(), :is(), :where(), :not(), nth-child
- **Animations** — View Transitions, Scroll-driven, Keyframes
- **Utilities** — truncate, aspect-ratio, glassmorphism, gradient border
- **Tailwind v4** — CSS Config, Dark Mode, Custom Variants

### HTML (21 сниппет)
- **Semantic** — Document Structure, Forms, Media, Dialog, Popover
- **Accessibility** — ARIA Landmarks, Live Regions, Keyboard Navigation

## Разработка

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

## Структура проекта

```
src/
├── components/
│   ├── ui/           # shadcn/ui компоненты
│   ├── code/         # CodeBlock с подсветкой
│   ├── snippets/     # SnippetCard, SnippetsByLevel, Skeleton
│   ├── home/         # HeroSection, CategoryShowcase
│   ├── animations/   # FloatingIcons, AnimatedCard
│   ├── common/       # LanguageIcon, TechIcons
│   └── layout/       # Header, RootLayout
├── data/snippets/    # 215+ сниппетов по категориям
├── pages/            # Home, Snippets, Favorites, Quiz
├── router/           # React Router конфигурация
├── providers/        # ThemeProvider
├── store/            # Zustand (theme, favorites)
├── types/            # TypeScript типы
└── lib/              # Утилиты
```

## Лицензия

MIT
