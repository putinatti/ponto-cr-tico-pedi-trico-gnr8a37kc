import { useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import {
  ArrowLeft,
  Calendar,
  BookOpen,
  Share2,
  AlertCircle,
  CheckCircle2,
  Target,
  List,
} from 'lucide-react'
import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { mockArticles } from '@/data/articles'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>()
  const { toast } = useToast()

  const articleIndex = useMemo(() => mockArticles.findIndex((a) => a.slug === slug), [slug])
  const article = articleIndex !== -1 ? mockArticles[articleIndex] : null

  const prevArticle = articleIndex > 0 ? mockArticles[articleIndex - 1] : null
  const nextArticle = articleIndex < mockArticles.length - 1 ? mockArticles[articleIndex + 1] : null

  if (!article) {
    return <Navigate to="/404" replace />
  }

  const isUTI = article.category === 'UTIP'
  const accentColor = isUTI ? 'text-primary' : 'text-secondary'
  const accentBg = isUTI ? 'bg-primary/10' : 'bg-secondary/10'

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    toast({
      title: 'Link copiado!',
      description: 'O link para este artigo foi copiado para a área de transferência.',
    })
  }

  return (
    <article className="container mx-auto px-4 sm:px-8 py-8 md:py-12">
      {/* Back Button */}
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="-ml-2 text-muted-foreground">
          <Link to={isUTI ? '/uti-pediatrica' : '/emergencia'}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para {isUTI ? 'UTI Pediátrica' : 'Emergências'}
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-8 animate-fade-in-up">
          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge
                variant="secondary"
                className={cn(
                  'font-medium',
                  isUTI ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary',
                )}
              >
                {article.category}
              </Badge>
              {article.topics.map((topic) => (
                <Badge key={topic} variant="outline" className="text-muted-foreground">
                  {topic}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-6">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y py-4">
              <div className="flex items-center">
                <BookOpen className="mr-2 h-4 w-4" />
                <span className="font-medium text-foreground">{article.journal}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <time dateTime={article.date}>
                  {format(parseISO(article.date), "dd 'de' MMMM, yyyy", { locale: ptBR })}
                </time>
              </div>
              <div className="flex items-center">
                <AlertCircle className="mr-2 h-4 w-4" />
                Evidência: {article.evidenceLevel}
              </div>
            </div>
          </header>

          {/* Content Sections */}
          <div className="space-y-12 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            <section className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className={cn('p-2 rounded-lg', accentBg)}>
                  <Target className={cn('h-5 w-5', accentColor)} />
                </div>
                <h2 className="text-2xl font-display font-bold text-foreground">Contexto</h2>
              </div>
              <p>{article.context}</p>
            </section>

            <section className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className={cn('p-2 rounded-lg', accentBg)}>
                  <List className={cn('h-5 w-5', accentColor)} />
                </div>
                <h2 className="text-2xl font-display font-bold text-foreground">Metodologia</h2>
              </div>
              <p>{article.methodology}</p>
            </section>

            <section className="bg-muted/30 p-6 sm:p-8 rounded-2xl border">
              <h2 className="text-xl font-display font-bold text-foreground mb-6 flex items-center">
                <CheckCircle2 className={cn('mr-3 h-6 w-6', accentColor)} />
                Pontos Chave
              </h2>
              <ul className="space-y-4">
                {article.keyPoints.map((point, i) => (
                  <li key={i} className="flex gap-4">
                    <span className={cn('font-bold text-lg leading-none mt-1', accentColor)}>
                      {i + 1}.
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="relative overflow-hidden">
              <div
                className={cn(
                  'absolute inset-y-0 left-0 w-1 rounded-full',
                  isUTI ? 'bg-primary' : 'bg-secondary',
                )}
              ></div>
              <div className="pl-6">
                <h2 className="text-2xl font-display font-bold text-foreground mb-4">
                  Conclusão Prática
                </h2>
                <p className="font-medium text-foreground">{article.conclusion}</p>
              </div>
            </section>
          </div>

          {/* Bottom Navigation */}
          <Separator className="my-10" />
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prevArticle ? (
              <Button
                variant="outline"
                className="justify-start h-auto py-3 px-4 flex-1 text-left"
                asChild
              >
                <Link to={`/artigo/${prevArticle.slug}`}>
                  <ArrowLeft className="mr-2 h-4 w-4 shrink-0" />
                  <div className="truncate">
                    <span className="block text-xs text-muted-foreground mb-1 font-normal">
                      Anterior
                    </span>
                    <span className="block truncate max-w-[200px]">{prevArticle.title}</span>
                  </div>
                </Link>
              </Button>
            ) : (
              <div className="flex-1"></div>
            )}

            {nextArticle ? (
              <Button
                variant="outline"
                className="justify-end h-auto py-3 px-4 flex-1 text-right"
                asChild
              >
                <Link to={`/artigo/${nextArticle.slug}`}>
                  <div className="truncate">
                    <span className="block text-xs text-muted-foreground mb-1 font-normal">
                      Próximo
                    </span>
                    <span className="block truncate max-w-[200px]">{nextArticle.title}</span>
                  </div>
                  <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                </Link>
              </Button>
            ) : (
              <div className="flex-1"></div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div
            className="sticky top-24 space-y-8 animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            <div className="bg-card border rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Ações</h3>
              <Button onClick={copyLink} variant="secondary" className="w-full justify-start">
                <Share2 className="mr-2 h-4 w-4" />
                Copiar Link
              </Button>
            </div>

            <div className="bg-card border rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold mb-4 text-lg">Artigos Relacionados</h3>
              <div className="space-y-4">
                {mockArticles
                  .filter((a) => a.id !== article.id && a.category === article.category)
                  .slice(0, 3)
                  .map((related) => (
                    <div key={related.id} className="group cursor-pointer">
                      <Link to={`/artigo/${related.slug}`}>
                        <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {related.title}
                        </h4>
                        <span className="text-xs text-muted-foreground mt-1 block">
                          {format(parseISO(related.date), 'MMM yyyy', { locale: ptBR })}
                        </span>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>

            <div
              className={cn(
                'rounded-xl p-6 text-white text-center shadow-soft',
                isUTI ? 'bg-primary' : 'bg-secondary',
              )}
            >
              <h3 className="font-bold text-lg mb-2">Não perca nenhuma atualização</h3>
              <p className="text-sm opacity-90 mb-4">
                Receba resumos semanais direto no seu e-mail.
              </p>
              <Button variant="secondary" className="w-full font-semibold">
                Assinar Newsletter Grátis
              </Button>
            </div>
          </div>
        </aside>
      </div>
    </article>
  )
}

export default ArticlePage
