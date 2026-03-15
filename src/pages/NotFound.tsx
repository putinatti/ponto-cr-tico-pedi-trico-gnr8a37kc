import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 animate-fade-in-up">
      <div className="text-9xl font-extrabold text-primary/10 mb-4 tracking-tighter drop-shadow-lg">
        404
      </div>
      <h1 className="text-4xl font-bold text-white mb-4">Página não encontrada</h1>
      <p className="text-muted-foreground max-w-md mx-auto mb-8 text-lg">
        A página que você está procurando pode ter sido removida, teve seu nome alterado ou está
        temporariamente indisponível.
      </p>
      <Link to="/">
        <Button
          size="lg"
          className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
        >
          Voltar para o Início
        </Button>
      </Link>
    </div>
  )
}
