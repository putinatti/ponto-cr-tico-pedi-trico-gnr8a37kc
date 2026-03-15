import { useParams, Link } from 'react-router-dom'
import { articles } from '@/data/articles'
import { Button } from '@/components/ui/button'
import { ArrowLeft, CalendarDays, Clock, Tag } from 'lucide-react'

export default function ArticlePage() {
  const { id } = useParams()
  const article = articles.find((a) => a.id === id)

  if (!article) return <div className="text-center py-20 text-white">Artigo não encontrado.</div>

  return (
    <div className="max-w-3xl mx-auto animate-fade-in-up">
      <Link to="/">
        <Button
          variant="ghost"
          className="mb-6 text-muted-foreground hover:text-white hover:bg-white/5"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
        </Button>
      </Link>
      <article className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[60px]" />
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
            <span className="flex items-center text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              <Tag className="w-3 h-3 mr-2" />
              {article.category}
            </span>
            <span className="flex items-center">
              <CalendarDays className="w-4 h-4 mr-2" /> {article.date}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" /> {article.readTime}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
            {article.title}
          </h1>
          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-primary">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed font-medium">
              {article.summary}
            </p>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />
            <p className="text-foreground/90 leading-relaxed">{article.content}</p>
            <h3 className="text-2xl font-bold mt-10 mb-6">Pontos Chave e Diretrizes</h3>
            <ul className="list-disc pl-5 space-y-3 text-foreground/90">
              <li>Monitoramento contínuo dos sinais vitais e estabilização imediata.</li>
              <li>Avaliação rápida do estado neurológico e perfusão periférica.</li>
              <li>Intervenção guiada por metas baseada nos protocolos mais recentes.</li>
              <li>Documentação detalhada e reavaliação seriada da conduta adotada.</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  )
}
