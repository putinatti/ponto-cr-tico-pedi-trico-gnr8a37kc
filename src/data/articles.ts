import { Article } from '@/types'

export const mockArticles: Article[] = [
  {
    id: '1',
    slug: 'ventilacao-protetora-sdra-pediatrica',
    title: 'Ventilação Protetora na Síndrome do Desconforto Respiratório Agudo (SDRA) Pediátrica',
    journal: 'Pediatric Critical Care Medicine',
    date: '2023-11-15',
    category: 'UTIP',
    excerpt:
      'Análise das estratégias de ventilação mecânica protetora e seu impacto na mortalidade de pacientes pediátricos com SDRA.',
    context:
      'A Síndrome do Desconforto Respiratório Agudo (SDRA) continua sendo uma causa significativa de morbimortalidade na UTIP. Estratégias de ventilação protetora, bem estabelecidas em adultos, ainda geram debates sobre os parâmetros ideais na população pediátrica, especialmente quanto ao volume corrente e titulação da PEEP.',
    methodology:
      'Estudo multicêntrico, retrospectivo de coorte, analisando dados de 450 crianças (1 mês a 16 anos) diagnosticadas com SDRA moderada a grave, avaliando as configurações do ventilador nas primeiras 48 horas de intubação.',
    keyPoints: [
      'Uso de volume corrente ≤ 6 mL/kg de peso ideal foi associado a maior número de dias livres de ventilador.',
      'A titulação da PEEP guiada pela tabela PEEP/FiO2 do protocolo PALICC mostrou-se superior à titulação empírica.',
      'Pressões de platô > 28 cmH2O foram preditores independentes de mortalidade.',
    ],
    conclusion:
      'A adoção rigorosa de estratégias de ventilação protetora, limitando volumes correntes e pressões de platô, é crucial. A aplicação das diretrizes PALICC melhora desfechos clinicamente relevantes na SDRA pediátrica.',
    evidenceLevel: 'Alta',
    topics: ['Ventilação Mecânica', 'Respiratório'],
    isNew: true,
  },
  {
    id: '2',
    slug: 'manejo-choque-septico-sala-emergencia',
    title: 'Atualizações no Manejo da Fluido-Terapia no Choque Séptico na Sala de Emergência',
    journal: 'Annals of Emergency Medicine',
    date: '2023-10-22',
    category: 'Emergência',
    excerpt:
      'Comparação entre ressuscitação volêmica restritiva vs. liberal nas primeiras horas de atendimento ao choque séptico.',
    context:
      'Historicamente, a recomendação para o choque séptico pediátrico envolvia bôlus agressivos de fluidos (até 60mL/kg). Recentes estudos levantaram preocupações sobre a sobrecarga hídrica e seus efeitos deletérios, sugerindo uma abordagem mais cautelosa e guiada por metas.',
    methodology:
      'Ensaio clínico randomizado (ECR) envolvendo 200 pacientes pediátricos apresentando choque séptico não-dengue em departamentos de emergência, comparando bôlus de 10-20 mL/kg vs. bôlus padronizado antigo.',
    keyPoints: [
      'A estratégia restritiva não resultou em aumento de mortalidade comparada à liberal.',
      'Pacientes no grupo restritivo necessitaram de menos dias de suporte ventilatório.',
      'O uso precoce de inotrópicos (antes do 3º bôlus de fluido) acelerou a reversão do choque.',
    ],
    conclusion:
      'A ressuscitação fluídica deve ser criteriosa e individualizada. Avaliar a resposta hemodinâmica após cada bôlus de 10-20 mL/kg e considerar a introdução precoce de drogas vasoativas é a melhor prática atual.',
    evidenceLevel: 'Alta',
    topics: ['Choque', 'Sepse', 'Hemodinâmica'],
    isNew: true,
  },
  {
    id: '3',
    slug: 'cetoacidose-diabetica-protocolos-fluidos',
    title: 'Dois Sacos ou Um? Protocolos de Reposição na Cetoacidose Diabética',
    journal: 'Journal of Pediatrics',
    date: '2023-09-05',
    category: 'Emergência',
    excerpt:
      'Avaliação da eficácia e segurança do sistema de dois sacos (two-bag system) na correção da CAD pediátrica.',
    context:
      'O manejo da CAD exige ajustes frequentes na taxa de infusão de glicose para evitar hipoglicemia enquanto se mantém a infusão de insulina. O sistema de dois sacos promete maior agilidade nesses ajustes na emergência e enfermaria.',
    methodology:
      'Estudo quase-experimental antes e depois da implementação do protocolo de dois sacos em um hospital pediátrico terciário (n=120).',
    keyPoints: [
      'Tempo significativamente menor para o primeiro ajuste da taxa de glicose no sistema de dois sacos.',
      'Redução na incidência de hipoglicemia iatrogênica (glicemia < 70 mg/dL).',
      'Tempo de resolução da acidose (pH > 7.3) foi semelhante em ambos os grupos.',
    ],
    conclusion:
      'O sistema de dois sacos é uma estratégia segura, custo-efetiva e que reduz a carga de trabalho da enfermagem, minimizando flutuações glicêmicas indesejadas durante o tratamento da CAD.',
    evidenceLevel: 'Moderada',
    topics: ['Endocrinologia', 'Metabólico'],
    isNew: false,
  },
  {
    id: '4',
    slug: 'sedacao-analgesia-dexmedetomidina',
    title: 'Uso Precoce de Dexmedetomidina para Poupar Opioides na UTIP',
    journal: 'Intensive Care Medicine',
    date: '2023-08-12',
    category: 'UTIP',
    excerpt:
      'O impacto da dexmedetomidina na redução da síndrome de abstinência e tempo de ventilação mecânica.',
    context:
      'A sedação prolongada com opioides e benzodiazepínicos na UTIP está associada à síndrome de abstinência, delirium e aumento do tempo de internação. A dexmedetomidina, um agonista alfa-2, surge como alternativa poupadora.',
    methodology:
      'Revisão sistemática e meta-análise de 12 estudos controlados envolvendo crianças em ventilação mecânica por mais de 48 horas.',
    keyPoints: [
      'A infusão precoce de dexmedetomidina reduziu a dose cumulativa de fentanil em 35%.',
      'Menor incidência de delirium pediátrico avaliado pelo CAPD.',
      'Bradicardia foi o evento adverso mais comum, raramente exigindo intervenção farmacológica.',
    ],
    conclusion:
      'A dexmedetomidina é eficaz como sedativo adjuvante para poupar opioides, melhorando o perfil de despertar do paciente, desde que monitorada a resposta cronotrópica.',
    evidenceLevel: 'Alta',
    topics: ['Sedação', 'Neurologia'],
    isNew: false,
  },
  {
    id: '5',
    slug: 'trauma-cranioencefalico-alvos-osmoterapia',
    title: 'Solução Salina Hipertônica vs Manitol no TCE Grave Pediátrico',
    journal: 'Pediatric Emergency Care',
    date: '2023-07-30',
    category: 'Emergência',
    excerpt:
      'Diretrizes práticas para o manejo da hipertensão intracraniana aguda na sala de trauma.',
    context:
      'O controle da pressão intracraniana (PIC) é vital no TCE grave. A escolha do agente osmótico inicial na sala de emergência frequentemente varia entre Salina Hipertônica (SSH) e Manitol.',
    methodology:
      'Estudo de coorte observacional pareado por escore de propensão em centros de trauma pediátrico nível I.',
    keyPoints: [
      'A SSH 3% em bôlus demonstrou redução mais rápida e sustentada da PIC em comparação ao Manitol.',
      'O Manitol esteve associado a maior risco de instabilidade hemodinâmica (hipotensão) em pacientes politraumatizados.',
      'Não houve diferença significativa na sobrevida em 30 dias.',
    ],
    conclusion:
      'A Solução Salina Hipertônica (3%) deve ser considerada o agente osmolar de primeira linha na emergência pediátrica para suspeita de hipertensão intracraniana, especialmente na presença de choque hipovolêmico concomitante.',
    evidenceLevel: 'Moderada',
    topics: ['Trauma', 'Neurologia'],
    isNew: false,
  },
  {
    id: '6',
    slug: 'nutricao-enteral-precoce-instabilidade',
    title: 'Nutrição Enteral Precoce em Pacientes Pediátricos com Instabilidade Hemodinâmica',
    journal: 'Clinical Nutrition',
    date: '2023-06-18',
    category: 'UTIP',
    excerpt:
      'Segurança e viabilidade da nutrição enteral trófica durante o uso de drogas vasoativas.',
    context:
      'O início da nutrição enteral costuma ser atrasado em pacientes chocados devido ao medo de isquemia mesentérica. No entanto, o jejum prolongado afeta a integridade da barreira intestinal.',
    methodology:
      'Estudo prospectivo observacional em crianças recebendo baixas a moderadas doses de inotrópicos (escore inotrópico < 15).',
    keyPoints: [
      'A nutrição trófica (10-20 mL/kg/dia) iniciada nas primeiras 48h foi bem tolerada.',
      'A incidência de isquemia intestinal foi < 1%, sem diferença para o grupo em jejum.',
      'Associação com menor tempo para atingir a meta calórica total após a estabilização.',
    ],
    conclusion:
      'A nutrição enteral trófica é segura em crianças com suporte hemodinâmico estável, mesmo em uso de drogas vasoativas, e deve ser encorajada precocemente.',
    evidenceLevel: 'Baixa',
    topics: ['Nutrição', 'Gastroenterologia'],
    isNew: false,
  },
]
