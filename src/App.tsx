import { Header } from '@/components/layout/Header'
import { CodeBlock } from '@/components/code/CodeBlock'

const exampleCode = `import { useState } from 'react'

interface CounterProps {
  initialValue?: number
}

export function Counter({ initialValue = 0 }: CounterProps) {
  const [count, setCount] = useState(initialValue)

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  )
}`

export default function App() {
  return (
    <>
      <Header />
      <main className="container p-6 space-y-6">
        <h1 className="text-2xl font-bold">Code Library</h1>

        <CodeBlock
          code={exampleCode}
          language="tsx"
          title="Counter.tsx"
          showLineNumbers
        />
      </main>
    </>
  )
}
