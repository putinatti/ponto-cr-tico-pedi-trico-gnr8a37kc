import { useMemo, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { HeartPulse, Stethoscope, FilterX } from 'lucide-react'
import { mockArticles } from '@/data/articles'
import { ArticleCard } from '@/components/ArticleCard'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { ArticleCategory } from '@/types'

const CategoryPage = () => {
  const location = useLocation()

  const categoryInfo = useMemo(() => {
    if (location.pathname.includes('uti-pediatrica')) {
      return {
        id: 'UTIP' as ArticleCategory,
        title: 'UTI Pediátrica',
        icon: HeartPulse,
        color: 'text-primary',
        bg: 'bg-primary/10',
      }
    }
    return {
      id: 'Emergência' as ArticleCategory,
      title: 'Urgência & Emergência',
      icon: Stethoscope,
      color: 'text-secondary',
      bg: 'bg-secondary/10',
    }
  }, [location.pathname])

  const [selectedTopics, setSelectedTopics] = useState<string[]>([])

  const allTopics = useMemo(() => {
    const topics = new Set<string>()
    mockArticles
      .filter((a) => a.category === categoryInfo.id)
      .forEach((a) => {
        a.topics.forEach((t) => topics.add(t))
      })
    return Array.from(topics).sort()
  }, [categoryInfo.id])

  const filteredArticles = useMemo(() => {
    return mockArticles.filter((article) => {
      if (article.category !== categoryInfo.id) return false
      if (selectedTopics.length > 0) {
        if (!article.topics.some((t) => selectedTopics.includes(t))) return false
      }
      return true
    })
  }, [categoryInfo.id, selectedTopics])

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic],
    )
  }

  const Icon = categoryInfo.icon

  return (
    <div className="container mx-auto px-4 sm:px-8 py-10 flex-1">
      {/* Page Header */}
      <div className="mb-10 animate-fade-in-up">
        <div className="flex items-center gap-4 mb-4">
          <div className={`${categoryInfo.bg} p-3 rounded-xl`}>
            <Icon className={`h-8 w-8 ${categoryInfo.color}`} />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold">{categoryInfo.title}</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Navegue pelos resumos focados em evidências essenciais para o cuidado intensivo e
          emergencial.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside
          className="w-full lg:w-64 shrink-0 animate-fade-in-up"
          style={{ animationDelay: '100ms' }}
        >
          <div className="sticky top-24 bg-card border rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Filtros</h3>
              {selectedTopics.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedTopics([])}
                  className="h-8 px-2 text-xs"
                >
                  Limpar
                </Button>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-3 text-muted-foreground">Tópicos</h4>
                <div className="space-y-2.5">
                  {allTopics.map((topic) => (
                    <div key={topic} className="flex items-center space-x-2">
                      <Checkbox
                        id={`topic-${topic}`}
                        checked={selectedTopics.includes(topic)}
                        onCheckedChange={() => toggleTopic(topic)}
                      />
                      <Label
                        htmlFor={`topic-${topic}`}
                        className="text-sm cursor-pointer font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {topic}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Results List */}
        <div className="flex-1 min-w-0">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.map((article, index) => (
                <div
                  key={article.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${(index % 6) * 50 + 150}ms` }}
                >
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center border rounded-xl bg-card/50 border-dashed animate-fade-in">
              <FilterX className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
              <h3 className="text-lg font-medium mb-2">Nenhum artigo encontrado</h3>
              <p className="text-muted-foreground max-w-sm mb-6">
                Tente remover alguns filtros para ver mais resultados nesta categoria.
              </p>
              <Button onClick={() => setSelectedTopics([])} variant="outline">
                Limpar Filtros
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CategoryPage
