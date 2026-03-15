import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { SearchDialog } from './SearchDialog'
import { ScrollRestoration } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      {/* Abstract Background Elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-5%] w-[30%] h-[40%] rounded-full bg-secondary/5 blur-[100px] -z-10 pointer-events-none" />

      <Header />
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      <Footer />
      <SearchDialog />
      <ScrollRestoration />
    </div>
  )
}
