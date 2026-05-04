-- Allow public access to navigation_items
DROP POLICY IF EXISTS "public_select_navigation" ON public.navigation_items;
CREATE POLICY "public_select_navigation" ON public.navigation_items FOR SELECT USING (true);

-- Allow public access to categories
DROP POLICY IF EXISTS "public_select_categories" ON public.categories;
CREATE POLICY "public_select_categories" ON public.categories FOR SELECT USING (true);

-- Allow public access to articles
DROP POLICY IF EXISTS "public_select_articles" ON public.articles;
CREATE POLICY "public_select_articles" ON public.articles FOR SELECT USING (true);
