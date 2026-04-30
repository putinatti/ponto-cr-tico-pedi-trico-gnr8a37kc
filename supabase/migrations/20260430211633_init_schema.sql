DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM auth.users WHERE email = 'pputinatti@gmail.com') THEN
    INSERT INTO auth.users (
      id, instance_id, email, encrypted_password, email_confirmed_at,
      created_at, updated_at, raw_app_meta_data, raw_user_meta_data,
      is_super_admin, role, aud,
      confirmation_token, recovery_token, email_change_token_new,
      email_change, email_change_token_current,
      phone, phone_change, phone_change_token, reauthentication_token
    ) VALUES (
      '00000000-0000-0000-0000-000000000000'::uuid,
      '00000000-0000-0000-0000-000000000000',
      'pputinatti@gmail.com',
      crypt('Skip@Pass', gen_salt('bf')),
      NOW(), NOW(), NOW(),
      '{"provider": "email", "providers": ["email"]}',
      '{"name": "Admin"}',
      false, 'authenticated', 'authenticated',
      '', '', '', '', '', NULL, '', '', ''
    );
  END IF;
END $$;

CREATE TABLE IF NOT EXISTS public.categories (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    bg_x TEXT DEFAULT '0%',
    bg_y TEXT DEFAULT '0%',
    description TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.navigation_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    href TEXT NOT NULL,
    order_index INT NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.articles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    content TEXT,
    excerpt TEXT,
    author TEXT,
    category_id TEXT REFERENCES public.categories(id),
    tag TEXT,
    date TEXT,
    read_time TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.navigation_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "authenticated_select_categories" ON public.categories;
CREATE POLICY "authenticated_select_categories" ON public.categories FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "authenticated_select_navigation" ON public.navigation_items;
CREATE POLICY "authenticated_select_navigation" ON public.navigation_items FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "authenticated_select_articles" ON public.articles;
CREATE POLICY "authenticated_select_articles" ON public.articles FOR SELECT TO authenticated USING (true);

INSERT INTO public.categories (id, name, bg_x, bg_y, description) VALUES
('uti-pediatrica', 'UTI Pediátrica', '0%', '0%', 'Protocolos e manejos em Unidade de Terapia Intensiva.'),
('emergencias-pediatricas', 'Emergências Pediátricas', '50%', '0%', 'Atendimentos de urgência e emergência no pronto-socorro.'),
('sepse', 'Sepse', '100%', '0%', 'Reconhecimento precoce e tratamento da sepse na pediatria.'),
('ventilacao-mecanica', 'Ventilação Mecânica', '50%', '50%', 'Parâmetros e estratégias de ventilação mecânica.'),
('choque', 'Choque', '100%', '50%', 'Tipos de choque, reposição volêmica e drogas vasoativas.'),
('artigo-comentado', 'Artigo Comentado', '0%', '100%', 'Análises aprofundadas sobre a literatura médica recente.'),
('ponto-critico', 'Ponto Crítico', '50%', '100%', 'Dicas rápidas e insights valiosos para a beira do leito.')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.navigation_items (id, title, href, order_index) VALUES
(gen_random_uuid(), 'Resumos', '/resumos', 1),
(gen_random_uuid(), 'Artigos', '/artigos', 2),
(gen_random_uuid(), 'Calculadoras', '/calculadoras', 3),
(gen_random_uuid(), 'Protocolos', '/protocolos', 4),
(gen_random_uuid(), 'Drogas', '/drogas', 5),
(gen_random_uuid(), 'Sobre', '/sobre', 6)
ON CONFLICT DO NOTHING;

INSERT INTO public.articles (id, title, date, author, category_id, read_time, tag, excerpt, content) VALUES
('11111111-1111-1111-1111-111111111111'::uuid, 'Manejo Inicial do Choque Séptico em Pediatria', '10 Mar 2026', 'Dr. Silva', 'sepse', '5 min', 'Resumo', 'O reconhecimento precoce e a intervenção rápida são fundamentais para reduzir a mortalidade no choque séptico pediátrico.', '
<h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Reconhecimento Inicial</h2>
<p class="mb-6 leading-relaxed">
  A tríade clássica de febre, taquicardia e alteração da perfusão periférica deve levantar
  imediatamente a suspeita de sepse em crianças. A hipotensão é um sinal tardio e indica
  descompensação grave, não devendo ser aguardada para o início das medidas terapêuticas.
</p>
<div class="bg-orange-50/50 border border-orange-200 p-6 rounded-2xl mb-8 relative overflow-hidden">
  <div class="absolute top-0 left-0 w-1.5 h-full bg-orange-500"></div>
  <p class="text-orange-800 m-0 leading-relaxed">
    <strong>Ponto de Atenção:</strong> Não aguarde a hipotensão para iniciar o tratamento. O tempo capilar prolongado (> 3s) e alterações do estado mental são sinais cruciais na avaliação inicial da pediatria.
  </p>
</div>
<h2 class="text-2xl font-bold text-slate-900 mt-10 mb-4">Pacote da Primeira Hora (Bundle)</h2>
<p class="mb-4">As intervenções a seguir devem ser idealmente completadas em até 60 minutos após o reconhecimento:</p>
<ul class="list-disc pl-6 mb-8 space-y-3 marker:text-teal-600">
  <li>Obtenção de acesso vascular em até 5 minutos.</li>
  <li>Coleta de hemoculturas antes do início dos antibióticos.</li>
  <li>Administração de antibióticos de amplo espectro.</li>
  <li>Ressuscitação volêmica com cristaloides balanceados.</li>
  <li>Início de drogas vasoativas se refratário a fluidos.</li>
</ul>
'),
('22222222-2222-2222-2222-222222222222'::uuid, 'Ventilação Mecânica Não Invasiva na Bronquiolite', '15 Mar 2026', 'Dra. Almeida', 'ventilacao-mecanica', '10 min', 'Artigo', 'Revisão sistemática sobre a eficácia da VNI e cateter nasal de alto fluxo na prevenção da intubação em lactentes graves.', '<p>O uso de suporte não invasivo tem crescido exponencialmente no manejo de lactentes com bronquiolite viral aguda grave...</p>'),
('33333333-3333-3333-3333-333333333333'::uuid, 'Drogas Vasoativas: Qual escolher e quando?', '10 Fev 2026', 'Dr. Costa', 'choque', '7 min', 'Protocolo', 'Guia prático para a escolha de aminas no choque pediátrico, diferenciando os perfis hemodinâmicos.', '<p>A escolha da droga vasoativa inicial depende do perfil hemodinâmico do paciente...</p>')
ON CONFLICT DO NOTHING;
