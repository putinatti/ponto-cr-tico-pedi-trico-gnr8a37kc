import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import Layout from '@/components/Layout'
import Index from '@/pages/Index'
import CategoryPage from '@/pages/CategoryPage'
import ArticlePage from '@/pages/ArticlePage'
import AboutPage from '@/pages/AboutPage'
import NotFound from '@/pages/NotFound'

function App() {
  return (
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
  )
}

export default App
