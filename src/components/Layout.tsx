import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div
          className="absolute top-[20%] w-full h-32 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 L80 50 L90 20 L100 80 L110 10 L120 90 L130 50 L200 50' stroke='%2300D2D3' fill='none' stroke-width='2' stroke-linejoin='round'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat-x',
            backgroundSize: '200px 100px',
          }}
        />
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full border border-primary/10 mix-blend-overlay" />
        <div className="absolute top-[5%] right-[5%] w-[20vw] h-[20vw] rounded-full border border-primary/20 mix-blend-overlay" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full border border-white/5 bg-primary/5 blur-3xl" />
      </div>

      <Header />
      <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
