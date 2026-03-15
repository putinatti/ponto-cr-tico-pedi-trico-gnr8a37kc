export type ArticleCategory = 'UTIP' | 'Emergência'

export interface Article {
  id: string
  slug: string
  title: string
  journal: string
  date: string
  category: ArticleCategory
  excerpt: string
  context: string
  methodology: string
  keyPoints: string[]
  conclusion: string
  evidenceLevel: 'Alta' | 'Moderada' | 'Baixa'
  topics: string[]
  isNew?: boolean
}
