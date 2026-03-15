import { Outlet, Link } from 'react-router-dom'
import { Activity } from 'lucide-react'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <div className="bg-teal-700 text-white p-1.5 rounded-lg shadow-sm">
              <Activity className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              Ponto Crítico <span className="text-teal-700">Pediátrico</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors"
            >
              Início
            </Link>
            <Link
              to="/sobre"
              className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors"
            >
              Sobre
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-teal-500" />
            <span className="font-bold text-xl text-white tracking-tight">
              Ponto Crítico Pediátrico
            </span>
          </div>
          <p className="mb-6 max-w-md mx-auto leading-relaxed">
            Conteúdo educacional médico. Não substitui o julgamento clínico no atendimento ao
            paciente.
          </p>
          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} Ponto Crítico Pediátrico. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
