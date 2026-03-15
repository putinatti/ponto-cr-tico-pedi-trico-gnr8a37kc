import heroImg from '@/assets/generatedimage_1773607389389-8494a.png'
import { Button } from '@/components/ui/button'
import { ArticleCard } from '@/components/ArticleCard'
import { articles } from '@/data/articles'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function Index() {
  const recentArticles = articles.slice(0, 3)

  return (
    <div className="space-y-20">
      <section className="relative w-full rounded-3xl overflow-hidden glass-panel border-white/10 mt-4 shadow-2xl">
        <div className="absolute inset-0 ekg-bg opacity-10 mix-blend-screen pointer-events-none" />
        <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16">
          <div className="space-y-6 z-10 animate-fade-in-up">
            <div className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent backdrop-blur-md">
              <span className="flex w-2 h-2 rounded-full bg-accent mr-2 animate-pulse" />
              Excelência Médica
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Ponto Crítico <br />
              <span className="text-primary text-glow">Pediátrico</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Proteção Técnica em Terapia Intensiva e Urgências Pediátricas. Acesso rápido a resumos
              e diretrizes atualizadas.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold rounded-full px-8 shadow-[0_0_20px_rgba(255,87,34,0.4)] hover:shadow-[0_0_30px_rgba(255,87,34,0.6)] transition-all h-12"
              >
                Explorar Artigos
              </Button>
              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 border-white/20 hover:bg-white/10 text-white h-12"
                >
                  Nossa Missão
                </Button>
              </Link>
            </div>
          </div>
          <div
            className="relative z-10 flex justify-center animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10 opacity-80" />
              <img
                src={heroImg}
                alt="Ponto Crítico Pediátrico Hero"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="glass p-4 rounded-xl border-white/20">
                  <p className="text-sm font-medium text-white/90">Destaque do Mês</p>
                  <p className="text-primary font-bold">Atualizações em Ventilação Mecânica</p>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </section>

      <section className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Artigos Recentes</h2>
            <p className="text-muted-foreground">Últimas atualizações e resumos clínicos.</p>
          </div>
          <Link
            to="/category/uti-pediatrica"
            className="hidden sm:flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Ver todos <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="sm:hidden flex justify-center mt-6">
          <Link to="/category/uti-pediatrica" className="w-full">
            <Button variant="outline" className="w-full rounded-full border-white/20">
              Ver todos os artigos
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
