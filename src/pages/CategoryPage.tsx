import { useParams } from 'react-router-dom'
import { articles } from '@/data/articles'
import { ArticleCard } from '@/components/ArticleCard'
import { ShieldAlert, Stethoscope } from 'lucide-react'

export default function CategoryPage() {
  const { slug } = useParams()
  const isUti = slug === 'uti-pediatrica'

  const categoryName = isUti ? 'UTI Pediátrica' : 'Urgências'
  const Icon = isUti ? Stethoscope : ShieldAlert

  const filteredArticles = articles.filter((a) => a.category === categoryName)

  return (
    <div className="space-y-12 animate-fade-in-up">
      <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 flex items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center text-primary shadow-lg">
            <Icon className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">{categoryName}</h1>
            <p className="text-muted-foreground">
              Artigos, resumos e diretrizes focadas em {categoryName.toLowerCase()}.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => <ArticleCard key={article.id} article={article} />)
          ) : (
            <div className="col-span-full py-20 text-center text-muted-foreground">
              Nenhum artigo encontrado nesta categoria.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
