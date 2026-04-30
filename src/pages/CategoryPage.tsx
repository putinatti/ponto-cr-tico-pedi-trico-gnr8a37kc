import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, Tag, Activity } from 'lucide-react'
import spriteImg from '@/assets/editedimage_1773608286853-085b3.png'
import { Button } from '@/components/ui/button'
import { ArticleCard } from '@/components/ArticleCard'
import { useEffect, useState } from 'react'
import { getCategories, getArticles } from '@/services/content'

export default function CategoryPage() {
  const { categoryId } = useParams()
  const [category, setCategory] = useState<any>(null)
  const [articles, setArticles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      if (!categoryId) return
      setLoading(true)
      try {
        const cats = await getCategories()
        const found = cats.find((c: any) => c.id === categoryId)
        setCategory(found)
        if (found) {
          const arts = await getArticles(categoryId)
          setArticles(arts)
        }
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [categoryId])

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center text-teal-700">
        <Activity className="w-10 h-10 animate-spin mb-4" />
        <p>Carregando categoria...</p>
      </div>
    )
  }

  if (!category) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Categoria não encontrada</h2>
        <p className="text-slate-600 mb-8">
          Não conseguimos localizar a categoria que você está procurando.
        </p>
        <Button asChild>
          <Link to="/">Voltar ao Início</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-teal-950 text-white pt-20 pb-24 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 filter blur-sm transform scale-110 pointer-events-none"
          style={{
            backgroundImage: `url(${spriteImg})`,
            backgroundSize: '300% 300%',
            backgroundPosition: `${category.bg_x || '0%'} ${category.bg_y || '0%'}`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent bottom-0 h-16 pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            to="/"
            className="inline-flex items-center text-teal-200 hover:text-white mb-8 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Voltar ao Início
          </Link>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div
              className="w-32 h-32 md:w-48 md:h-48 rounded-[2rem] shrink-0 shadow-2xl ring-4 ring-white/10"
              style={{
                backgroundImage: `url(${spriteImg})`,
                backgroundSize: '300% 300%',
                backgroundPosition: `${category.bg_x || '0%'} ${category.bg_y || '0%'}`,
              }}
            />
            <div className="text-center md:text-left pt-2 md:pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-sm font-medium mb-4 border border-orange-500/20">
                <Tag className="w-4 h-4" /> Categoria
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                {category.name}
              </h1>
              <p className="text-teal-100 text-lg md:text-xl max-w-xl leading-relaxed">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            Publicações Recentes
            <span className="bg-slate-100 text-slate-600 text-sm py-1 px-3 rounded-full font-medium ml-2">
              {articles.length}
            </span>
          </h2>

          {articles.length > 0 ? (
            <div className="space-y-4">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 px-4 bg-slate-50 rounded-xl border border-dashed border-slate-200">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-700 mb-2">
                Nenhum artigo encontrado
              </h3>
              <p className="text-slate-500">
                Ainda não há publicações nesta categoria. Volte em breve!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
