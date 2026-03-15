import { Link } from 'react-router-dom'
import { Clock, User, Activity, ChevronRight } from 'lucide-react'

export interface Article {
  id: number | string
  title: string
  date: string
  author: string
  categoryId: string
  readTime: string
}

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      to={`/artigo/${article.id}`}
      className="group block p-5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-teal-200 hover:shadow-md transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-800 group-hover:text-teal-700 transition-colors mb-2">
            {article.title}
          </h3>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" /> {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Activity className="w-4 h-4" /> {article.readTime} leitura
            </span>
          </div>
        </div>
        <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
          <ChevronRight className="w-5 h-5" />
        </div>
      </div>
    </Link>
  )
}
