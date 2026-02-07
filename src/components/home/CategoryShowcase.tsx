import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LanguageIcon } from '@/components/common/LanguageIcon'
import { AnimatedCard } from '@/components/animations/AnimatedCard'
import { HTMLIcon } from '@/components/common/TechIcons'
import { getSnippetsByCategory, getSnippetsStats } from '@/data/snippets'
import { cn } from '@/lib/utils'

const categoryConfig: Record<
  string,
  {
    label: string
    description: string
    language: string
    gradient: string
    glowColor: string
  }
> = {
  typescript: {
    label: 'TypeScript',
    description: 'Типизация, generics, utility types',
    language: 'ts',
    gradient: 'from-blue-500/10 to-blue-600/5',
    glowColor: 'rgba(49, 120, 198, 0.3)',
  },
  javascript: {
    label: 'JavaScript',
    description: 'ES2025+, async/await, Web APIs',
    language: 'js',
    gradient: 'from-yellow-500/10 to-yellow-600/5',
    glowColor: 'rgba(247, 223, 30, 0.25)',
  },
  react: {
    label: 'React',
    description: 'Hooks, patterns, Server Components',
    language: 'react',
    gradient: 'from-cyan-500/10 to-cyan-600/5',
    glowColor: 'rgba(97, 218, 251, 0.3)',
  },
  css: {
    label: 'CSS',
    description: 'Animations, selectors, Tailwind',
    language: 'css',
    gradient: 'from-purple-500/10 to-purple-600/5',
    glowColor: 'rgba(167, 139, 250, 0.3)',
  },
  html: {
    label: 'HTML',
    description: 'Semantic markup, accessibility',
    language: 'html',
    gradient: 'from-orange-500/10 to-orange-600/5',
    glowColor: 'rgba(228, 77, 38, 0.25)',
  },
}

export function CategoryShowcase() {
  const stats = getSnippetsStats()
  const categories = Object.keys(getSnippetsByCategory())

  return (
    <section className="py-20 relative z-10">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Categories</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Choose a technology and find ready solutions for your project
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {categories.map((category, index) => {
            const config = categoryConfig[category]
            if (!config) return null

            const count = stats.byCategory[category] ?? 0

            return (
              <AnimatedCard key={category} delay={index * 100}>
                <Link to="/snippets" className="block group">
                  <Card
                    className={cn(
                      'h-full card-glow',
                      'bg-gradient-to-br border-border/50',
                      config.gradient
                    )}
                    style={
                      {
                        '--card-glow-color': config.glowColor,
                      } as React.CSSProperties
                    }
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="space-y-3">
                          <LanguageIcon language={config.language} size="xl" />
                          <div>
                            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                              {config.label}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              {config.description}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold">{count}</span>
                          <p className="text-xs text-muted-foreground">
                            snippets
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Browse all
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedCard>
            )
          })}
        </div>

        {/* HTML Logo + All Snippets Button */}
        <HTMLLogoWithBreak />
      </div>
    </section>
  )
}

function HTMLLogoWithBreak() {
  const [isBreaking, setIsBreaking] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
    setIsBreaking(true)
    setTimeout(() => {
      navigate('/snippets?category=html')
    }, 400)
  }

  return (
    <div className="flex flex-col items-center gap-6 mt-14">
      <button
        onClick={handleClick}
        title="HTML snippets"
        className="logo-3d-container opacity-70 dark:opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
      >
        <div
          className={cn('logo-3d logo-break-container w-16 h-16 md:w-24 md:h-24', isBreaking && 'breaking')}
          style={
            {
              '--icon-glow-color': 'rgba(228, 77, 38, 0.5)',
              animationDelay: '0.5s',
              animationDuration: '12s',
            } as React.CSSProperties
          }
        >
          {!isBreaking && (
            <div className="logo-3d-icon w-full h-full overflow-hidden">
              <HTMLIcon className="w-full h-full" />
            </div>
          )}

          {isBreaking && (
            <>
              <div className="logo-half logo-half-left">
                <div className="logo-3d-icon w-[200%] h-full overflow-hidden">
                  <HTMLIcon className="w-full h-full" />
                </div>
              </div>
              <div className="logo-half logo-half-right">
                <div className="logo-3d-icon w-[200%] h-full overflow-hidden -translate-x-1/2">
                  <HTMLIcon className="w-full h-full" />
                </div>
              </div>
            </>
          )}
        </div>
      </button>

      <Button variant="outline" size="lg" className="gap-2 btn-glow" asChild>
        <Link to="/snippets">
          All Snippets
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  )
}
