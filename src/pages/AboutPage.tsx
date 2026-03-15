import { BookOpen } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center max-w-2xl mx-auto">
      <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
        <BookOpen className="w-10 h-10 text-teal-700" />
      </div>
      <h1 className="text-4xl font-bold text-slate-900 mb-6">Sobre o Ponto Crítico</h1>
      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        Ponto Crítico Pediátrico é uma iniciativa focada em fornecer resumos diretos e baseados em
        evidências sobre terapia intensiva e emergências pediátricas. Nosso objetivo é auxiliar
        profissionais de saúde na tomada de decisão à beira do leito, salvando pequenas vidas.
      </p>
    </div>
  )
}
