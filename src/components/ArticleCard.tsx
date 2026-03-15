import { Link } from 'react-router-dom'
import { Article } from '@/data/articles'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { CalendarDays, Clock, ArrowRight } from 'lucide-react'

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link to={`/article/${article.id}`} className="block h-full">
      <Card className="glass-card flex flex-col h-full overflow-hidden group border-white/10 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-50 group-hover:opacity-100 transition-opacity" />

        <CardHeader className="pb-4">
          <div className="flex justify-between items-start mb-2">
            <Badge
              variant="outline"
              className="bg-primary/10 text-primary border-primary/20 backdrop-blur-md"
            >
              {article.category}
            </Badge>
            {article.isNew && (
              <Badge className="bg-accent/20 text-accent border-accent/20 hover:bg-accent/30">
                Novo
              </Badge>
            )}
          </div>
          <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors text-foreground">
            {article.title}
          </h3>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground text-sm line-clamp-3">{article.summary}</p>
        </CardContent>
        <CardFooter className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <CalendarDays className="mr-1 h-3 w-3" />
              {article.date}
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              {article.readTime}
            </div>
          </div>
          <div className="flex items-center text-primary font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
            Ler <ArrowRight className="ml-1 h-3 w-3" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
