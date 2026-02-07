import { Link } from 'react-router-dom'
import { Code2, Sparkles, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getSnippetsStats } from '@/data/snippets'
import { htmlTags } from '@/data/tags/html-tags'
import { cssProperties } from '@/data/tags/css-properties'
import { popularTags } from '@/data/tags/popular-tags'

export function HeroSection() {
  const stats = getSnippetsStats()
  const tagsCount = htmlTags.length + cssProperties.length + popularTags.length

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-5 py-2 text-sm font-medium text-primary animate-fadeInUp"
          style={{ animationDelay: '0.1s' }}
        >
          <Sparkles className="h-4 w-4" />
          {stats.total}+ Snippets
        </div>

        {/* Main Title */}
        <h1 className="space-y-2">
          <span
            className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fadeInUp"
            style={{ animationDelay: '0.2s' }}
          >
            Code
          </span>
          <span
            className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gradient-shimmer animate-fadeInUp"
            style={{ animationDelay: '0.3s' }}
          >
            Library
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fadeInUp"
          style={{ animationDelay: '0.4s' }}
        >
          Modern patterns for TypeScript, React, CSS & JavaScript
        </p>

        {/* CTA Button */}
        <div
          className="pt-4 animate-fadeInUp"
          style={{ animationDelay: '0.5s' }}
        >
          <Button
            size="lg"
            className="gap-3 text-lg px-8 py-6 btn-glow"
            asChild
          >
            <Link to="/snippets">
              <Code2 className="h-5 w-5" />
              Browse Snippets
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div
          className="flex items-center justify-center gap-8 pt-8 text-muted-foreground animate-fadeInUp"
          style={{ animationDelay: '0.6s' }}
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">
              {stats.total}
            </span>
            <span className="text-sm">Snippets</span>
          </div>
          <div className="w-1 h-6 bg-border rounded-full" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">
              {tagsCount}
            </span>
            <span className="text-sm">Tags</span>
          </div>
          <div className="w-1 h-6 bg-border rounded-full" />
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">
              {stats.categories}
            </span>
            <span className="text-sm">Categories</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-fadeInUp"
        style={{ animationDelay: '0.8s' }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-scroll-indicator" />
      </div>
    </div>
  )
}
