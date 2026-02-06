import type { Snippet } from '@/types'

export const cssUtilitiesSnippets: Snippet[] = [
  {
    id: 'text-truncate',
    title: 'Text Truncate',
    description: 'Обрезка текста с многоточием. Однострочный и многострочный варианты с line-clamp.',
    language: 'css',
    level: 'beginner',
    tags: ['text', 'truncate', 'ellipsis', 'line-clamp'],
    code: `/* Однострочный truncate */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Многострочный truncate (2 строки) */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Многострочный truncate (3 строки) */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Использование */
<p class="truncate">Очень длинный текст в одну строку...</p>
<p class="line-clamp-2">Текст который обрежется после второй строки...</p>`,
    whyRelevant2026: 'line-clamp теперь стандарт CSS, работает без префиксов в современных браузерах.',
  },
  {
    id: 'aspect-ratio',
    title: 'Aspect Ratio',
    description: 'Контейнер с фиксированным соотношением сторон. Для видео, изображений, карточек.',
    language: 'css',
    level: 'beginner',
    tags: ['aspect-ratio', 'responsive', 'video', 'image'],
    code: `/* Современный способ - aspect-ratio */
.video-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}

.square {
  aspect-ratio: 1;
}

.portrait {
  aspect-ratio: 3 / 4;
}

/* С object-fit для изображений */
.image-cover {
  aspect-ratio: 16 / 9;
  width: 100%;
  object-fit: cover;
}

.image-contain {
  aspect-ratio: 1;
  width: 200px;
  object-fit: contain;
  background: #f0f0f0;
}

/* Fallback для старых браузеров (padding-trick) */
.aspect-ratio-box {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 */
}

.aspect-ratio-box > * {
  position: absolute;
  inset: 0;
}`,
    whyRelevant2026: 'aspect-ratio поддерживается везде. Padding-trick больше не нужен.',
  },
  {
    id: 'sticky-footer',
    title: 'Sticky Footer',
    description: 'Footer который всегда внизу страницы, даже если контента мало. Три способа реализации.',
    language: 'css',
    level: 'beginner',
    tags: ['layout', 'footer', 'sticky', 'flexbox', 'grid'],
    code: `/* Способ 1: Flexbox (рекомендуется) */
.page-flex {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-flex main {
  flex: 1;
}

/* Способ 2: Grid */
.page-grid {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

/* Способ 3: calc() */
.page-calc {
  min-height: 100vh;
}

.page-calc main {
  min-height: calc(100vh - 60px - 100px); /* header - footer */
}

/* HTML структура */
<div class="page-flex">
  <header>Header</header>
  <main>Content</main>
  <footer>Footer</footer>
</div>`,
    whyRelevant2026: 'Flexbox и Grid — стандарт. dvh единицы решают проблемы на мобильных.',
  },
  {
    id: 'glassmorphism',
    title: 'Glassmorphism',
    description: 'Эффект матового стекла с размытием фона. Популярный тренд UI дизайна.',
    language: 'css',
    level: 'intermediate',
    tags: ['effect', 'glass', 'blur', 'backdrop-filter'],
    code: `/* Базовый glassmorphism */
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
}

/* Светлая тема */
.glass-light {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* Тёмная тема */
.glass-dark {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* Цветной glass */
.glass-colored {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  backdrop-filter: blur(10px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.18);
}`,
    whyRelevant2026: 'backdrop-filter поддерживается везде. Используется в macOS, iOS, Windows 11.',
  },
  {
    id: 'gradient-border',
    title: 'Gradient Border',
    description: 'Рамка с градиентом. Несколько способов: border-image, background, mask.',
    language: 'css',
    level: 'intermediate',
    tags: ['border', 'gradient', 'effect', 'decoration'],
    code: `/* Способ 1: background + padding (рекомендуется) */
.gradient-border {
  position: relative;
  background: linear-gradient(135deg, #667eea, #764ba2);
  padding: 2px;
  border-radius: 12px;
}

.gradient-border-inner {
  background: white;
  border-radius: 10px;
  padding: 20px;
}

/* Способ 2: border-image (без border-radius!) */
.gradient-border-image {
  border: 3px solid;
  border-image: linear-gradient(135deg, #667eea, #764ba2) 1;
}

/* Способ 3: pseudo-element */
.gradient-border-pseudo {
  position: relative;
  background: white;
  border-radius: 12px;
}

.gradient-border-pseudo::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 14px;
  z-index: -1;
}

/* Анимированный gradient border */
.animated-border::before {
  background: linear-gradient(
    90deg, #ff0080, #7928ca, #ff0080
  );
  background-size: 200% 100%;
  animation: gradient-move 3s linear infinite;
}

@keyframes gradient-move {
  to { background-position: 200% 0; }
}`,
    whyRelevant2026: 'Gradient borders популярны в современном UI. @property позволяет анимировать градиенты.',
  },
  {
    id: 'custom-scrollbar',
    title: 'Custom Scrollbar',
    description: 'Стилизация скроллбара. Работает в Chrome, Edge, Safari. Firefox использует другие свойства.',
    language: 'css',
    level: 'beginner',
    tags: ['scrollbar', 'custom', 'webkit', 'styling'],
    code: `/* Webkit браузеры (Chrome, Safari, Edge) */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Firefox */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
}

/* Тонкий минималистичный scrollbar */
.thin-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.thin-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}

/* Скрыть scrollbar но оставить прокрутку */
.hidden-scrollbar {
  scrollbar-width: none;
}

.hidden-scrollbar::-webkit-scrollbar {
  display: none;
}`,
    whyRelevant2026: 'scrollbar-color и scrollbar-width стандартизированы. Webkit-свойства всё ещё нужны для кроссбраузерности.',
  },
  {
    id: 'loading-spinner',
    title: 'Loading Spinner',
    description: 'Анимированный спиннер загрузки на чистом CSS. Несколько вариантов дизайна.',
    language: 'css',
    level: 'beginner',
    tags: ['loading', 'spinner', 'animation', 'keyframes'],
    code: `/* Классический спиннер */
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Точки */
.dots {
  display: flex;
  gap: 8px;
}

.dots span {
  width: 12px;
  height: 12px;
  background: #3498db;
  border-radius: 50%;
  animation: bounce 1.4s ease-in-out infinite;
}

.dots span:nth-child(2) { animation-delay: 0.2s; }
.dots span:nth-child(3) { animation-delay: 0.4s; }

@keyframes bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}

/* Pulse ring */
.pulse-ring {
  width: 40px;
  height: 40px;
  border: 3px solid #3498db;
  border-radius: 50%;
  animation: pulse-ring 1.5s ease-out infinite;
}

@keyframes pulse-ring {
  0% { transform: scale(0.5); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
}

/* HTML */
<div class="spinner"></div>
<div class="dots"><span></span><span></span><span></span></div>`,
    whyRelevant2026: 'CSS спиннеры легче SVG/GIF. Легко кастомизировать цвета через CSS переменные.',
  },
]
