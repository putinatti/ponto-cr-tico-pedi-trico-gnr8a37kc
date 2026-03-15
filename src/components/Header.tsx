import { Link, useLocation } from 'react-router-dom'
import { Activity, Search, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useSearchStore } from '@/stores/useSearchStore'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/uti-pediatrica', label: 'UTI Pediátrica' },
  { href: '/emergencia', label: 'Emergências' },
  { href: '/sobre', label: 'Sobre' },
]

export function Header() {
  const location = useLocation()
  const setIsOpen = useSearchStore((state) => state.setIsOpen)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full glass-header">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-90">
          <div className="bg-primary/10 p-1.5 rounded-lg">
            <Activity className="h-6 w-6 text-primary" />
          </div>
          <span className="font-display font-bold text-lg hidden sm:inline-block">
            Ponto Crítico <span className="text-primary">Pediátrico</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                location.pathname === link.href ? 'text-primary' : 'text-muted-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(true)}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Buscar"
          >
            <Search className="h-5 w-5" />
          </Button>

          <Button className="hidden sm:flex bg-primary hover:bg-primary/90 text-white shadow-soft">
            Newsletter
          </Button>

          {/* Mobile Nav Trigger */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 justify-left">
                  <Activity className="h-5 w-5 text-primary" />
                  <span>Navegação</span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'text-lg font-medium px-2 py-1 rounded-md transition-colors',
                      location.pathname === link.href
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-muted',
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button className="mt-4 w-full">Assinar Newsletter</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
