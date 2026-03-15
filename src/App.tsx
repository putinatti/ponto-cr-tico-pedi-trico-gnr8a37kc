import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import Layout from './components/Layout'

import Index from './pages/Index'
import CategoryPage from './pages/CategoryPage'
import ArticlePage from './pages/ArticlePage'
import AboutPage from './pages/AboutPage'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Index /> },
      { path: '/uti-pediatrica', element: <CategoryPage /> },
      { path: '/emergencia', element: <CategoryPage /> },
      { path: '/artigo/:slug', element: <ArticlePage /> },
      { path: '/sobre', element: <AboutPage /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <RouterProvider router={router} />
  </TooltipProvider>
)

export default App
