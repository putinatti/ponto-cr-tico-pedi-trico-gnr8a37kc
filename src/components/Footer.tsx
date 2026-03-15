import { Link } from 'react-router-dom'
import { Activity } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 pt-12 pb-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Activity className="h-6 w-6 text-primary" />
              <span className="font-display font-bold text-lg">Ponto Crítico Pediátrico</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm mb-4 leading-relaxed">
              Resumos baseados em evidências das publicações mais relevantes em Terapia Intensiva e
              Emergências Pediátricas para atualização médica rápida.
            </p>
            <p className="text-xs text-muted-foreground/80 max-w-sm">
              * O conteúdo deste site tem caráter puramente educacional e não substitui o julgamento
              clínico individualizado na beira do leito.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/uti-pediatrica"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  UTI Pediátrica
                </Link>
              </li>
              <li>
                <Link
                  to="/emergencia"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Emergências
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre o Projeto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Conecte-se</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Twitter (X)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Ponto Crítico Pediátrico. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">
              Termos de Uso
            </a>
            <a href="#" className="hover:underline">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
