import { Link } from 'react-router-dom'
import logoImg from '@/assets/generatedimage_1773607393240-f55fc.png'

export function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-white/5 py-12 mt-16 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-primary/10 rounded-t-full blur-3xl z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3">
            <img src={logoImg} alt="Logo" className="w-8 h-8 rounded-lg opacity-80" />
            <span className="font-semibold text-lg text-white/90">Ponto Crítico Pediátrico</span>
          </div>
          <div className="text-sm text-muted-foreground flex gap-4">
            <Link to="/" className="hover:text-primary transition-colors">
              Início
            </Link>
            <Link to="/about" className="hover:text-primary transition-colors">
              Sobre
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors">
              Contato
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Ponto Crítico Pediátrico. Proteção Técnica. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  )
}
