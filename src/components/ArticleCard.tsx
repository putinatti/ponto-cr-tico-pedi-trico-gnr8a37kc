import { Link } from 'react-router-dom'
import { Calendar, ChevronRight } from 'lucide-react'
import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Article } from '@/types'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface ArticleCardProps {
  article: Article
  className?: string
}

export function ArticleCard({ article, className }: ArticleCardProps) {
  const isUTI = article.category === 'UTIP'

  return (
    <Link to={`/artigo/${article.slug}`} className="block h-full outline-none group">
      <Card
        className={cn(
          'h-full flex flex-col transition-all duration-300 hover:shadow-glow hover:-translate-y-1 bg-white/50 backdrop-blur-sm border-border/50',
          className,
        )}
      >
        <CardHeader className="p-5 pb-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex gap-2 items-center">
              <Badge
                variant="secondary"
                className={cn(
                  'font-medium',
                  isUTI
                    ? 'bg-primary/10 text-primary hover:bg-primary/20'
                    : 'bg-secondary/10 text-secondary hover:bg-secondary/20',
                )}
              >
                {article.category}
              </Badge>
              {article.isNew && (
                <Badge variant="default" className="bg-amber-500 hover:bg-amber-600">
                  Novo
                </Badge>
              )}
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="mr-1 h-3 w-3" />
              <time dateTime={article.date}>
                {format(parseISO(article.date), "dd 'de' MMM, yyyy", { locale: ptBR })}
              </time>
            </div>
          </div>
          <h3 className="font-display text-lg font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>
        </CardHeader>
        <CardContent className="p-5 pt-0 flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {article.excerpt}
          </p>
        </CardContent>
        <CardFooter className="p-5 pt-0 flex items-center justify-between border-t border-transparent group-hover:border-border/30 transition-colors">
          <span className="text-xs font-medium text-muted-foreground truncate max-w-[150px]">
            {article.journal}
          </span>
          <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            Ler Resumo <ChevronRight className="h-4 w-4" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  )
}
