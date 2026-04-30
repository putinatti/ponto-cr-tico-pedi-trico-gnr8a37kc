import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, User, Activity, ShieldAlert } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { getArticleById } from '@/services/content'

export default function ArticlePage() {
  const { articleId } = useParams()
  const [article, setArticle] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (articleId) {
      setLoading(true)
      getArticleById(articleId)
        .then(setArticle)
        .finally(() => setLoading(false))
    }
  }, [articleId])

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center text-teal-700">
        <Activity className="w-10 h-10 animate-spin mb-4" />
        <p>Carregando artigo...</p>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Artigo não encontrado</h2>
        <Button asChild>
          <Link to="/">Voltar ao Início</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-white border-b border-slate-200 pt-12 pb-12 px-4 shadow-sm relative z-10">
        <div className="max-w-3xl mx-auto">
          <Link
            to={article.categoryId ? `/categoria/${article.categoryId}` : '/'}
            className="inline-flex items-center text-teal-700 hover:text-teal-800 mb-8 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Voltar
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-4 border border-teal-100">
            <Activity className="w-4 h-4" /> {article.tag || 'Artigo Clínico'}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 font-medium">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-400" /> {article.date || 'Data não informada'}
            </span>
            <span className="flex items-center gap-2">
              <User className="w-4 h-4 text-slate-400" /> {article.author || 'Autor Anônimo'}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-teal md:prose-lg max-w-none text-slate-700">
          {article.excerpt && (
            <p className="lead text-xl text-slate-600 mb-8 leading-relaxed">{article.excerpt}</p>
          )}

          {article.content ? (
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          ) : (
            <div className="text-center text-slate-500 py-10">
              Conteúdo detalhado indisponível para este artigo.
            </div>
          )}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 rounded-full border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            <Link to="/">
              <ArrowLeft className="w-4 h-4" /> Explorar mais artigos
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
