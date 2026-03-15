import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, User, Activity, ShieldAlert } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ArticlePage() {
  const { articleId } = useParams()

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-white border-b border-slate-200 pt-12 pb-12 px-4 shadow-sm relative z-10">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-teal-700 hover:text-teal-800 mb-8 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Voltar ao Início
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-sm font-medium mb-4 border border-teal-100">
            <Activity className="w-4 h-4" /> Artigo Clínico {articleId ? `#${articleId}` : ''}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Manejo Inicial do Choque Séptico em Pediatria
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 font-medium">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-slate-400" /> 10 Mar 2026
            </span>
            <span className="flex items-center gap-2">
              <User className="w-4 h-4 text-slate-400" /> Dr. Silva
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-teal md:prose-lg max-w-none text-slate-700">
          <p className="lead text-xl text-slate-600 mb-8 leading-relaxed">
            O reconhecimento precoce e a intervenção rápida são fundamentais para reduzir a
            mortalidade no choque séptico pediátrico. Este artigo revisa as diretrizes mais recentes
            aplicadas à beira do leito.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Reconhecimento Inicial</h2>
          <p className="mb-6 leading-relaxed">
            A tríade clássica de febre, taquicardia e alteração da perfusão periférica deve levantar
            imediatamente a suspeita de sepse em crianças. A hipotensão é um sinal tardio e indica
            descompensação grave, não devendo ser aguardada para o início das medidas terapêuticas.
          </p>

          <div className="bg-orange-50/50 border border-orange-200 p-6 rounded-2xl mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-500" />
            <div className="flex items-center gap-3 mb-3">
              <ShieldAlert className="w-6 h-6 text-orange-600" />
              <h3 className="text-lg font-bold text-orange-900 m-0">Ponto de Atenção</h3>
            </div>
            <p className="text-orange-800 m-0 leading-relaxed">
              Não aguarde a hipotensão para iniciar o tratamento. O tempo capilar prolongado ({'>'}{' '}
              3s) e alterações do estado mental são sinais cruciais na avaliação inicial da
              pediatria.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
            Pacote da Primeira Hora (Bundle)
          </h2>
          <p className="mb-4">
            As intervenções a seguir devem ser idealmente completadas em até 60 minutos após o
            reconhecimento:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-3 marker:text-teal-600">
            <li>Obtenção de acesso vascular (Intravenoso ou Intraósseo) em até 5 minutos.</li>
            <li>
              Coleta de hemoculturas antes do início dos antibióticos (sem atrasar o tratamento em
              caso de dificuldade no acesso).
            </li>
            <li>Administração de antibióticos de amplo espectro.</li>
            <li>
              Ressuscitação volêmica com cristaloides balanceados (10-20 mL/kg em bolus, avaliando
              resposta clínica a cada etapa).
            </li>
            <li>
              Início de drogas vasoativas (ex: Epinefrina ou Norepinefrina) se refratário a fluidos.
            </li>
          </ul>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="gap-2 rounded-full border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            <Link to="/">
              <ArrowLeft className="w-4 h-4" /> Explorar mais artigos
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
