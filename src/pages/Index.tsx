import { Link } from 'react-router-dom'
import { Search, ChevronRight, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import brandImage from '@/assets/ponto-critico-42ebb.png'
import { useState, useEffect } from 'react'
import { getNavigationItems, getArticles } from '@/services/content'
import useSearchStore from '@/stores/useSearchStore'

export default function Index() {
  const [navItems, setNavItems] = useState<any[]>([])
  const [latestArticles, setLatestArticles] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const { setIsOpen } = useSearchStore()

  useEffect(() => {
    Promise.all([getNavigationItems(), getArticles()]).then(([navs, arts]) => {
      setNavItems(navs)
      setLatestArticles(arts.slice(0, 3))
      setLoading(false)
    })
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header / Hero Section */}
      <header className="bg-teal-900 text-white pt-16 pb-20 px-4 md:px-6 lg:px-8 text-center rounded-b-[2.5rem] shadow-sm">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Ponto Crítico Pediátrico
        </h1>
        <p className="text-teal-100 max-w-2xl mx-auto text-lg md:text-xl mb-10 leading-relaxed">
          Resumos atualizados e práticos sobre terapia intensiva pediátrica e urgências, feitos para
          quem está na linha de frente.
        </p>
        <div
          className="max-w-xl mx-auto relative group cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <Input
            type="search"
            placeholder="Buscar resumos, artigos, calculadoras..."
            className="w-full pl-14 pr-4 py-7 rounded-2xl text-slate-900 bg-white border-none shadow-xl focus-visible:ring-4 focus-visible:ring-teal-500/30 text-lg transition-all pointer-events-none"
            readOnly
          />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6 group-focus-within:text-teal-600 transition-colors" />
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 md:px-6 py-16">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-teal-700">
            <Activity className="w-10 h-10 animate-spin mb-4" />
            <p>Carregando conteúdos...</p>
          </div>
        ) : (
          <>
            {/* Compact Navigation Menu */}
            <section className="mb-20">
              <h2 className="sr-only">Navegação Principal</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 justify-items-center max-w-4xl mx-auto">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.href}
                    className="flex flex-col items-center group focus:outline-none"
                  >
                    <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-[2rem] bg-white shadow-sm hover:shadow-md border border-slate-100 flex items-center justify-center p-6 sm:p-8 transition-all duration-300 group-hover:scale-110 group-focus-visible:scale-110 group-focus-visible:ring-4 group-focus-visible:ring-teal-500/30">
                      <img
                        src={brandImage}
                        alt={`Ícone para ${item.title}`}
                        className="w-full h-full object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span className="mt-6 text-base sm:text-lg font-bold text-slate-700 group-hover:text-teal-700 transition-colors text-center">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Latest Publications Section */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-slate-800">Últimas Publicações</h2>
                <Button
                  variant="ghost"
                  className="text-teal-700 hover:text-teal-800 hover:bg-teal-50 font-semibold"
                >
                  Ver todas <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestArticles.map((item) => (
                  <Link
                    to={`/artigo/${item.id}`}
                    key={item.id}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {item.tag && (
                        <span className="bg-teal-50 text-teal-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          {item.tag}
                        </span>
                      )}
                      <span className="text-slate-400 text-xs font-medium">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 leading-snug group-hover:text-teal-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="mt-auto flex items-center text-teal-700 text-sm font-bold group-hover:translate-x-1 transition-transform">
                      Ler material completo <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 text-center px-4">
        <p className="text-sm font-medium">
          © 2026 Ponto Crítico Pediátrico. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-3 max-w-md mx-auto text-slate-500">
          Este site é para fins educacionais voltado para profissionais de saúde e não substitui o
          julgamento clínico.
        </p>
      </footer>
    </div>
  )
}
