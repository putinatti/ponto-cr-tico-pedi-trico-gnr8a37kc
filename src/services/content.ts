import { supabase } from '@/lib/supabase/client'

export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('created_at', { ascending: true })
  if (error) {
    console.error(error)
    return []
  }
  return data
}

export async function getNavigationItems() {
  const { data, error } = await supabase
    .from('navigation_items')
    .select('*')
    .order('order_index', { ascending: true })
  if (error) {
    console.error(error)
    return []
  }
  return data
}

export async function getArticles(categoryId?: string) {
  let query = supabase.from('articles').select('*').order('created_at', { ascending: false })
  if (categoryId) {
    query = query.eq('category_id', categoryId)
  }
  const { data, error } = await query
  if (error) {
    console.error(error)
    return []
  }
  return data.map((d: any) => ({
    ...d,
    categoryId: d.category_id,
    readTime: d.read_time,
  }))
}

export async function getArticleById(id: string) {
  const { data, error } = await supabase.from('articles').select('*').eq('id', id).single()
  if (error) {
    console.error(error)
    return null
  }
  return {
    ...data,
    categoryId: data.category_id,
    readTime: data.read_time,
  }
}
