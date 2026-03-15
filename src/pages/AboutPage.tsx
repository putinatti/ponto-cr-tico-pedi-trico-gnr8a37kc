import { Activity } from 'lucide-react'

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8 py-12 md:py-20 max-w-3xl">
      <div className="animate-fade-in-up">
        <div className="flex justify-center mb-8">
          <div className="bg-primary/10 p-4 rounded-2xl">
            <Activity className="h-12 w-12 text-primary" />
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-display font-bold text-center mb-6">
          Sobre o Projeto
        </h1>

        <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground leading-relaxed">
          <p className="text-xl text-foreground font-medium text-center mb-10">
            Transformando o excesso de informação médica em conhecimento prático, direto ao ponto.
          </p>

          <h2 className="text-foreground font-display font-semibold text-2xl mt-8 mb-4">
            Nossa Missão
          </h2>
          <p>
            O <strong>Ponto Crítico Pediátrico</strong> nasceu da necessidade de médicos residentes,
            intensivistas e emergencistas pediátricos se manterem atualizados em meio a um volume
            assustador de novas publicações científicas mensais.
          </p>
          <p>
            Nossa missão é curar, analisar e resumir os artigos mais relevantes publicados nos
            principais periódicos mundiais (como PCCM, Intensive Care Medicine, Pediatrics),
            extraindo exatamente o que você precisa saber para aplicar na beira do leito.
          </p>

          <h2 className="text-foreground font-display font-semibold text-2xl mt-8 mb-4">
            Como Funciona
          </h2>
          <p>
            Nossa equipe editorial seleciona os artigos com maior potencial de impacto na prática
            clínica diária. Cada estudo passa por uma leitura crítica estruturada para extrair:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-foreground/80">
            <li>
              <strong>Contexto:</strong> O porquê do estudo.
            </li>
            <li>
              <strong>Metodologia:</strong> A validade e nível de evidência.
            </li>
            <li>
              <strong>Pontos Chave:</strong> Os resultados crus.
            </li>
            <li>
              <strong>Conclusão Prática:</strong> A mensagem principal a ser lembrada durante o
              plantão.
            </li>
          </ul>

          <div className="bg-muted p-6 rounded-xl border mt-10 text-center">
            <p className="text-sm font-medium text-foreground mb-0">
              Aviso Legal: O conteúdo deste site destina-se exclusivamente a profissionais de saúde
              e estudantes de medicina. Os resumos aqui apresentados têm caráter informativo e
              educacional, não substituindo a leitura do artigo original e, sob nenhuma
              circunstância, o julgamento clínico individualizado.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
