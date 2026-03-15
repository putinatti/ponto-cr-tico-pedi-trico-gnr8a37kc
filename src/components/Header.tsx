import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Search, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { SearchDialog } from './SearchDialog'
import { Button } from '@/components/ui/button'
import logoImg from '@/assets/generatedimage_1773607393240-f55fc.png'
import useSearchStore from '@/stores/useSearchStore'

export function Header() {
  const location = useLocation()
  const { setIsOpen } = useSearchStore()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Início' },
    { path: '/category/uti-pediatrica', label: 'UTI Pediátrica' },
    { path: '/category/urgencias', label: 'Urgências' },
    { path: '/about', label: 'Sobre' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'glass-header shadow-md border-white/10 py-3'
          : 'bg-transparent border-transparent py-5',
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md group-hover:bg-primary/40 transition-colors" />
              <img
                src={logoImg}
                alt="Logo"
                className="w-10 h-10 rounded-xl relative z-10 shadow-sm border border-white/10 object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg leading-none tracking-tight text-white">
                Ponto Crítico
              </span>
              <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                Pediátrico
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary relative py-1',
                  location.pathname === link.path ? 'text-primary' : 'text-muted-foreground',
                )}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-fade-in" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(true)}
              className="text-muted-foreground hover:text-white hover:bg-white/5 rounded-full"
              aria-label="Buscar"
            >
              <Search className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-muted-foreground hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-header border-b border-white/10 py-4 px-4 animate-slide-down">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'text-base font-medium px-4 py-2 rounded-lg transition-colors',
                  location.pathname === link.path
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-white/5 hover:text-white',
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
      <SearchDialog />
    </header>
  )
}
