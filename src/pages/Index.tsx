import { Link } from 'react-router-dom'
import { ArrowRight, Activity, BookOpen, Stethoscope } from 'lucide-react'
import spriteImg from '@/assets/editedimage_1773608286853-085b3.png'

const CATEGORIES = [
  { id: 'uti-pediatrica', name: 'UTI Pediátrica', bgX: '0%', bgY: '0%' },
  { id: 'emergencias-pediatricas', name: 'Emergências Pediátricas', bgX: '50%', bgY: '0%' },
  { id: 'sepse', name: 'Sepse', bgX: '100%', bgY: '0%' },
  { id: 'ventilacao-mecanica', name: 'Ventilação Mecânica', bgX: '50%', bgY: '50%' },
  { id: 'choque', name: 'Choque', bgX: '100%', bgY: '50%' },
  { id: 'artigo-comentado', name: 'Artigo Comentado', bgX: '0%', bgY: '100%' },
  { id: 'ponto-critico', name: 'Ponto Crítico', bgX: '50%', bgY: '100%' },
]

export default function Index() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <section className="bg-teal-900 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-800/50 border border-teal-700/50 mb-6">
            <Activity className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-teal-100">Atualizado para 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl">
            Decisões rápidas salvam{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
              pequenas vidas.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-teal-100 mb-10 max-w-2xl leading-relaxed">
            Resumos práticos e baseados em evidências sobre terapia intensiva e emergências
            pediátricas, direto ao ponto para a beira do leito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#categorias"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors gap-2 shadow-lg shadow-orange-500/20"
            >
              Explorar Temas <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/sobre"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-teal-800 text-white font-semibold hover:bg-teal-700 transition-colors gap-2 border border-teal-700 shadow-sm"
            >
              <BookOpen className="w-4 h-4" /> Sobre o Projeto
            </Link>
          </div>
        </div>
      </section>

      <section id="categorias" className="py-20 px-4 max-w-6xl mx-auto w-full">
        <div className="mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 mb-4 text-teal-800 shadow-sm">
            <Stethoscope className="w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Navegue por Categorias
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Acesse rapidamente os protocolos, resumos e artigos mais relevantes para sua prática
            clínica na pediatria.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/categoria/${cat.id}`}
              className="group relative block w-full aspect-square overflow-hidden rounded-[2rem] shadow-md transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl hover:shadow-teal-900/20 bg-teal-900 text-center"
            >
              <div
                className="absolute inset-0 w-full h-full bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${spriteImg})`,
                  backgroundSize: '300% 300%',
                  backgroundPosition: `${cat.bgX} ${cat.bgY}`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 z-10 backdrop-blur-[2px]" />

              <div className="absolute inset-0 flex flex-col justify-end items-center p-6 md:p-8 z-20 text-center"></div>

              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] z-30 pointer-events-none" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
