import { Link } from 'react-router-dom'
import { Search, Stethoscope, HeartPulse, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ArticleCard } from '@/components/ArticleCard'
import { mockArticles } from '@/data/articles'
import { useSearchStore } from '@/stores/useSearchStore'

const Index = () => {
  const setIsSearchOpen = useSearchStore((state) => state.setIsOpen)
  const recentArticles = mockArticles.slice(0, 6)

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-8 py-16 md:py-24 flex flex-col items-center text-center">
        <div
          className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-8 animate-fade-in-up"
          style={{ animationDelay: '0ms' }}
        >
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          Atualizações Clínicas Semanais
        </div>

        <h1
          className="max-w-4xl text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: '100ms' }}
        >
          Excelência em <span className="text-primary">Terapia Intensiva</span> e Emergência
          Pediátrica
        </h1>

        <p
          className="max-w-2xl text-lg text-muted-foreground mb-10 animate-fade-in-up"
          style={{ animationDelay: '200ms' }}
        >
          Resumos práticos dos artigos científicos mais relevantes para sua prática clínica.
          Evidência direto ao ponto para salvar vidas.
        </p>

        {/* Fake Search Bar to open Command Dialog */}
        <div
          className="w-full max-w-xl relative group cursor-pointer animate-fade-in-up"
          style={{ animationDelay: '300ms' }}
          onClick={() => setIsSearchOpen(true)}
        >
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <div className="h-14 w-full rounded-full border border-input bg-background/50 backdrop-blur-sm px-12 py-3 text-left text-muted-foreground shadow-sm flex items-center group-hover:border-primary/50 group-hover:ring-2 group-hover:ring-primary/20 transition-all">
            Buscar temas (ex: ventilação, sepse, trauma)...
          </div>
          <div className="absolute inset-y-0 right-2 flex items-center">
            <kbd className="hidden sm:inline-flex h-8 items-center gap-1 rounded border bg-muted px-2 font-mono text-xs font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 sm:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Link to="/uti-pediatrica" className="group outline-none block">
            <div className="relative overflow-hidden rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-soft hover:-translate-y-1 hover:border-primary/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <HeartPulse className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-display font-bold mb-2">Terapia Intensiva (UTIP)</h2>
              <p className="text-muted-foreground mb-6">
                Ventilação mecânica, hemodinâmica, sedação e neurointensivismo.
              </p>
              <div className="flex items-center text-primary font-medium">
                Ver Artigos{' '}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          <Link to="/emergencia" className="group outline-none block">
            <div className="relative overflow-hidden rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-soft hover:-translate-y-1 hover:border-secondary/50">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
              <div className="bg-secondary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Stethoscope className="h-7 w-7 text-secondary" />
              </div>
              <h2 className="text-2xl font-display font-bold mb-2">Urgência & Emergência</h2>
              <p className="text-muted-foreground mb-6">
                Reanimação, trauma, intoxicações e manejo inicial de quadros agudos.
              </p>
              <div className="flex items-center text-secondary font-medium">
                Ver Artigos{' '}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Recent Summaries */}
      <section className="container mx-auto px-4 sm:px-8 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-display font-bold mb-2">Resumos Recentes</h2>
            <p className="text-muted-foreground">
              Mantenha-se atualizado com as últimas publicações.
            </p>
          </div>
          <Button variant="outline" className="hidden sm:flex" asChild>
            <Link to="/uti-pediatrica">Ver Todos</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentArticles.map((article, index) => (
            <div
              key={article.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ArticleCard article={article} />
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:hidden">
          <Button variant="outline" className="w-full" asChild>
            <Link to="/uti-pediatrica">Ver Todos</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Index
