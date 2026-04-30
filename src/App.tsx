import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import Layout from '@/components/Layout'
import Index from '@/pages/Index'
import CategoryPage from '@/pages/CategoryPage'
import ArticlePage from '@/pages/ArticlePage'
import AboutPage from '@/pages/AboutPage'
import NotFound from '@/pages/NotFound'
import { AuthProvider } from '@/hooks/use-auth'
import { AuthWrapper } from '@/components/AuthWrapper'

function App() {
  return (
    <AuthProvider>
      <AuthWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="categoria/:categoryId" element={<CategoryPage />} />
              <Route path="artigo/:articleId" element={<ArticlePage />} />
              <Route path="sobre" element={<AboutPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <Toaster />
        </BrowserRouter>
      </AuthWrapper>
    </AuthProvider>
  )
}

export default App
