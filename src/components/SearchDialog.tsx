import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { Activity } from 'lucide-react'
import { useSearchStore } from '@/stores/useSearchStore'
import { mockArticles } from '@/data/articles'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'

export function SearchDialog() {
  const { isOpen, setIsOpen } = useSearchStore()
  const navigate = useNavigate()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen(!isOpen)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [isOpen, setIsOpen])

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      setIsOpen(false)
      command()
    },
    [setIsOpen],
  )

  return (
    <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
      <CommandInput placeholder="Buscar artigos por título, tema ou palavra-chave..." />
      <CommandList>
        <CommandEmpty>Nenhum artigo encontrado.</CommandEmpty>
        <CommandGroup heading="Artigos">
          {mockArticles.map((article) => (
            <CommandItem
              key={article.id}
              value={article.title + ' ' + article.topics.join(' ')}
              onSelect={() => runCommand(() => navigate(`/artigo/${article.slug}`))}
              className="flex flex-col items-start gap-1 py-3"
            >
              <div className="flex items-center gap-2 w-full">
                <Activity className="h-4 w-4 text-muted-foreground shrink-0" />
                <span className="font-medium line-clamp-1">{article.title}</span>
              </div>
              <span className="text-xs text-muted-foreground ml-6">
                {article.category} • {article.journal}
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
