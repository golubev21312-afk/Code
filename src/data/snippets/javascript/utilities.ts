import type { Snippet } from '@/types'

export const utilitiesSnippets: Snippet[] = [
  {
    id: 'relative-time',
    title: 'relativeTime',
    description: 'Форматирует дату в относительный формат: "2 часа назад", "через 3 дня". Использует Intl.RelativeTimeFormat для локализации.',
    language: 'ts',
    level: 'intermediate',
    tags: ['date', 'intl', 'format', 'utility'],
    code: `function relativeTime(date: Date, locale = 'ru'): string {
  const now = Date.now()
  const diff = date.getTime() - now
  const absDiff = Math.abs(diff)

  const units: [Intl.RelativeTimeFormatUnit, number][] = [
    ['year', 31536000000],
    ['month', 2592000000],
    ['week', 604800000],
    ['day', 86400000],
    ['hour', 3600000],
    ['minute', 60000],
    ['second', 1000],
  ]

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' })

  for (const [unit, ms] of units) {
    if (absDiff >= ms || unit === 'second') {
      const value = Math.round(diff / ms)
      return rtf.format(value, unit)
    }
  }

  return rtf.format(0, 'second')
}

// Примеры
relativeTime(new Date(Date.now() - 3600000))  // "1 час назад"
relativeTime(new Date(Date.now() + 86400000)) // "завтра"
relativeTime(new Date(Date.now() - 120000))   // "2 минуты назад"`,
    whyRelevant2026: 'Intl.RelativeTimeFormat поддерживается во всех браузерах. Не нужны библиотеки типа moment.js или date-fns для простого форматирования.',
  },
  {
    id: 'slugify',
    title: 'slugify',
    description: 'Преобразует строку в URL-friendly slug. Поддерживает кириллицу, удаляет спецсимволы, заменяет пробелы на дефисы.',
    language: 'ts',
    level: 'beginner',
    tags: ['string', 'url', 'slug', 'utility'],
    code: `function slugify(str: string): string {
  const cyrillic: Record<string, string> = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
    'е': 'e', 'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i',
    'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
    'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
    'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch',
    'ш': 'sh', 'щ': 'sch', 'ъ': '', 'ы': 'y', 'ь': '',
    'э': 'e', 'ю': 'yu', 'я': 'ya',
  }

  return str
    .toLowerCase()
    .split('')
    .map(char => cyrillic[char] ?? char)
    .join('')
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '')
    .replace(/[^a-z0-9\\s-]/g, '')
    .trim()
    .replace(/\\s+/g, '-')
    .replace(/-+/g, '-')
}

// Примеры
slugify('Привет Мир!')        // "privet-mir"
slugify('Hello World!')       // "hello-world"
slugify('Café & Résumé')      // "cafe-resume"
slugify('  Multiple   Spaces  ') // "multiple-spaces"`,
    whyRelevant2026: 'Чистая функция без зависимостей. Полезна для генерации URL из заголовков статей, имён файлов.',
  },
  {
    id: 'shuffle-array',
    title: 'shuffle',
    description: 'Перемешивает массив случайным образом используя алгоритм Fisher-Yates. Возвращает новый массив, не мутирует исходный.',
    language: 'ts',
    level: 'beginner',
    tags: ['array', 'random', 'algorithm', 'utility'],
    code: `function shuffle<T>(array: T[]): T[] {
  const result = [...array]

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }

  return result
}

// Примеры
shuffle([1, 2, 3, 4, 5])
// [3, 1, 5, 2, 4] (случайный порядок)

shuffle(['a', 'b', 'c'])
// ['c', 'a', 'b'] (случайный порядок)

// Исходный массив не изменяется
const original = [1, 2, 3]
const shuffled = shuffle(original)
console.log(original) // [1, 2, 3]`,
    whyRelevant2026: 'Fisher-Yates — оптимальный алгоритм O(n). Иммутабельность важна для React и функционального подхода.',
  },
  {
    id: 'chunk-array',
    title: 'chunk',
    description: 'Разбивает массив на части заданного размера. Последний чанк может быть меньше если элементов не хватает.',
    language: 'ts',
    level: 'beginner',
    tags: ['array', 'split', 'pagination', 'utility'],
    code: `function chunk<T>(array: T[], size: number): T[][] {
  if (size <= 0) throw new Error('Size must be positive')

  const result: T[][] = []

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }

  return result
}

// Примеры
chunk([1, 2, 3, 4, 5], 2)
// [[1, 2], [3, 4], [5]]

chunk(['a', 'b', 'c', 'd'], 3)
// [['a', 'b', 'c'], ['d']]

chunk([1, 2, 3], 5)
// [[1, 2, 3]]

// Полезно для пагинации
const items = Array.from({ length: 100 }, (_, i) => i)
const pages = chunk(items, 10) // 10 страниц по 10 элементов`,
    whyRelevant2026: 'Часто используется для пагинации, batch-обработки, разбиения данных для параллельной загрузки.',
  },
  {
    id: 'group-by',
    title: 'groupBy',
    description: 'Группирует элементы массива по ключу. Возвращает объект где ключи — результат функции, значения — массивы элементов.',
    language: 'ts',
    level: 'intermediate',
    tags: ['array', 'object', 'group', 'utility'],
    code: `function groupBy<T, K extends string | number>(
  array: T[],
  keyFn: (item: T) => K
): Record<K, T[]> {
  return array.reduce((acc, item) => {
    const key = keyFn(item)
    acc[key] = acc[key] ?? []
    acc[key].push(item)
    return acc
  }, {} as Record<K, T[]>)
}

// Примеры
const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Carol', role: 'admin' },
]

groupBy(users, u => u.role)
// {
//   admin: [{ name: 'Alice', role: 'admin' }, { name: 'Carol', role: 'admin' }],
//   user: [{ name: 'Bob', role: 'user' }]
// }

// Группировка чисел по чётности
groupBy([1, 2, 3, 4, 5], n => n % 2 === 0 ? 'even' : 'odd')
// { odd: [1, 3, 5], even: [2, 4] }`,
    whyRelevant2026: 'Object.groupBy() добавлен в ES2024, но ещё не везде поддерживается. Эта функция — надёжный полифил.',
  },
  {
    id: 'key-by',
    title: 'keyBy',
    description: 'Создаёт объект из массива, где ключи — уникальные значения поля. Полезно для быстрого поиска по ID.',
    language: 'ts',
    level: 'intermediate',
    tags: ['array', 'object', 'index', 'utility'],
    code: `function keyBy<T, K extends string | number>(
  array: T[],
  keyFn: (item: T) => K
): Record<K, T> {
  return array.reduce((acc, item) => {
    acc[keyFn(item)] = item
    return acc
  }, {} as Record<K, T>)
}

// Примеры
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Carol' },
]

const usersById = keyBy(users, u => u.id)
// {
//   1: { id: 1, name: 'Alice' },
//   2: { id: 2, name: 'Bob' },
//   3: { id: 3, name: 'Carol' }
// }

// Быстрый доступ O(1)
usersById[2] // { id: 2, name: 'Bob' }

// Индекс по email
const usersByEmail = keyBy(users, u => u.name.toLowerCase())
usersByEmail['alice'] // { id: 1, name: 'Alice' }`,
    whyRelevant2026: 'Нормализация данных — ключевой паттерн в Redux/Zustand. Позволяет избежать O(n) поиска в массивах.',
  },
]
