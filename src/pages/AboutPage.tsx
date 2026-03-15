import logoImg from '@/assets/generatedimage_1773607393240-f55fc.png'

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Sobre o <span className="text-primary text-glow">Ponto Crítico</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Nossa missão é fornecer proteção técnica e conhecimento baseado em evidências para
          profissionais que atuam na terapia intensiva e urgências pediátricas.
        </p>
      </div>
      <div className="glass-panel p-8 md:p-12 rounded-3xl grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Conhecimento que Salva Vidas</h2>
          <p className="text-muted-foreground leading-relaxed">
            Acreditamos que a atualização constante é a chave para a excelência no atendimento
            pediátrico crítico. Nossa plataforma reúne os protocolos mais recentes e resumos focados
            na prática clínica, permitindo decisões rápidas e seguras.
          </p>
          <ul className="space-y-3">
            {[
              'Protocolos Atualizados',
              'Resumos Clínicos Rápidos',
              'Diretrizes Baseadas em Evidências',
            ].map((item, i) => (
              <li key={i} className="flex items-center text-foreground font-medium">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 text-primary border border-primary/30">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-white/10 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 ekg-bg opacity-30"></div>
            <div className="w-48 h-48 rounded-2xl overflow-hidden relative shadow-2xl border border-white/20 transform group-hover:scale-105 transition-transform duration-500">
              <img src={logoImg} alt="Brand Shield" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
