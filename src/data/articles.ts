export interface Article {
  id: string
  title: string
  summary: string
  content: string
  category: string
  date: string
  readTime: string
  isNew?: boolean
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'Manejo da Cetoacidose Diabética em Pediatria',
    summary:
      'Protocolo atualizado para hidratação, insulinoterapia e monitoramento de eletrólitos em pacientes pediátricos com CAD.',
    content:
      'A cetoacidose diabética (CAD) é uma complicação grave e potencialmente fatal do diabetes mellitus. Na pediatria, o manejo exige atenção rigorosa à reposição volêmica cautelosa para evitar edema cerebral. A infusão contínua de insulina deve ser iniciada apenas após a expansão de volume inicial. O monitoramento horário da glicemia capilar e gasometria venosa é essencial nas primeiras 12-24 horas. Reposição de potássio deve ser iniciada precocemente devido à depleção corporal total, mesmo com níveis séricos normais na admissão.',
    category: 'UTI Pediátrica',
    date: '15 Mar 2026',
    readTime: '8 min',
    isNew: true,
  },
  {
    id: '2',
    title: 'Reconhecimento Precoce da Sepse Pediátrica',
    summary:
      "Sinais de alerta, escores de triagem e o 'pacote de uma hora' para otimização da sobrevida em emergências.",
    content:
      "A sepse continua sendo uma das principais causas de mortalidade infantil globalmente. O reconhecimento precoce baseia-se na identificação rápida de sinais de disfunção orgânica, taquicardia desproporcional à febre e alteração do estado mental. A implementação do 'bundle' da primeira hora - que inclui obtenção de acessos, coleta de hemoculturas, administração de fluidos em bólus (10-20 mL/kg) e início de antibioticoterapia de amplo espectro - reduz significativamente a mortalidade.",
    category: 'Urgências',
    date: '10 Mar 2026',
    readTime: '6 min',
  },
  {
    id: '3',
    title: 'Ventilação Mecânica Protetora em Pediatria',
    summary:
      'Estratégias de ventilação mecânica para minimizar lesões induzidas pelo ventilador (VILI) em neonatos e lactentes.',
    content:
      'A ventilação protetora visa evitar o volutrauma, barotrauma e atelectrauma. Estratégias incluem o uso de volumes correntes fisiológicos (5-8 mL/kg), limitação da pressão de platô (< 28-30 cmH2O) e titulação adequada do PEEP para manter os alvéolos abertos sem causar superdistensão. A hipercapnia permissiva pode ser tolerada desde que o pH seja mantido > 7.20, exceto em pacientes com hipertensão intracraniana ou hipertensão pulmonar grave.',
    category: 'UTI Pediátrica',
    date: '05 Mar 2026',
    readTime: '12 min',
  },
  {
    id: '4',
    title: 'Manejo do Choque Anafilático',
    summary:
      'Diretrizes práticas para o tratamento imediato da anafilaxia no departamento de emergência pediátrica.',
    content:
      'A epinefrina intramuscular (0.01 mg/kg, máx 0.5 mg) na região ântero-lateral da coxa é o tratamento de primeira linha e deve ser administrada imediatamente em qualquer caso suspeito de anafilaxia com comprometimento respiratório ou cardiovascular. Terapias adjuvantes incluem anti-histamínicos H1 e H2, corticosteróides e broncodilatadores, porém nunca devem atrasar a administração da epinefrina. Monitoramento rigoroso por pelo menos 4-6 horas é necessário devido ao risco de reações bifásicas.',
    category: 'Urgências',
    date: '28 Fev 2026',
    readTime: '7 min',
  },
]

export const categories = ['Todos', 'UTI Pediátrica', 'Urgências']
