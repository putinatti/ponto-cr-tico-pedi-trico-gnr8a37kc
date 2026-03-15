import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Search, FileText } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { articles } from '@/data/articles'
import useSearchStore from '@/stores/useSearchStore'

export function SearchDialog() {
  const { isOpen, setIsOpen } = useSearchStore()
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const results =
    query.trim() === ''
      ? []
      : articles.filter(
          (a) =>
            a.title.toLowerCase().includes(query.toLowerCase()) ||
            a.category.toLowerCase().includes(query.toLowerCase()),
        )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen(!isOpen)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, setIsOpen])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px] bg-background/95 backdrop-blur-xl border-white/10 p-0 overflow-hidden shadow-2xl">
        <DialogHeader className="sr-only">
          <DialogTitle>Buscar Artigos</DialogTitle>
          <DialogDescription>Digite para buscar artigos por título ou categoria.</DialogDescription>
        </DialogHeader>
        <div className="flex items-center px-4 border-b border-white/10">
          <Search className="w-5 h-5 text-muted-foreground mr-2" />
          <Input
            placeholder="Buscar em Ponto Crítico..."
            className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-lg h-14 w-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {results.length > 0 ? (
            <div className="space-y-1">
              {results.map((article) => (
                <button
                  key={article.id}
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-white/5 flex items-center gap-3 transition-colors group"
                  onClick={() => {
                    setIsOpen(false)
                    navigate(`/article/${article.id}`)
                  }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-white">{article.title}</div>
                    <div className="text-xs text-muted-foreground">{article.category}</div>
                  </div>
                </button>
              ))}
            </div>
          ) : query.length > 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              Nenhum artigo encontrado para "{query}"
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground flex flex-col items-center">
              <Search className="w-12 h-12 opacity-20 mb-4" />
              <p>Comece a digitar para buscar resumos e diretrizes.</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
