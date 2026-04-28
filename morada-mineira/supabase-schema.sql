-- =============================================
-- SCHEMA SQL — MORADA MINEIRA
-- =============================================
-- Execute este SQL no painel do Supabase:
-- Dashboard → SQL Editor → New Query → Cole e execute
-- =============================================

-- Tabela de usuários
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('gerente', 'funcionario')),
  avatar TEXT DEFAULT '👷',
  email TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela de tarefas
CREATE TABLE IF NOT EXISTS tasks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL DEFAULT 'geral',
  priority TEXT NOT NULL DEFAULT 'media',
  status TEXT NOT NULL DEFAULT 'pendente',
  recurrence TEXT DEFAULT 'unica',
  "requiresEvidence" BOOLEAN DEFAULT true,
  assigned_to UUID REFERENCES users(id),
  assigned_to_name TEXT,
  created_by UUID REFERENCES users(id),
  created_by_name TEXT,
  due_date DATE,
  evidence_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela de evidências
CREATE TABLE IF NOT EXISTS evidences (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  task_id UUID NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'pendente' CHECK (status IN ('pendente', 'aprovada', 'rejeitada')),
  rejection_reason TEXT,
  captured_by TEXT,
  captured_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices
CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);
CREATE INDEX IF NOT EXISTS idx_tasks_category ON tasks(category);
CREATE INDEX IF NOT EXISTS idx_tasks_assigned ON tasks(assigned_to);
CREATE INDEX IF NOT EXISTS idx_evidences_task ON evidences(task_id);
CREATE INDEX IF NOT EXISTS idx_evidences_status ON evidences(status);

-- Habilitar RLS (Row Level Security)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE evidences ENABLE ROW LEVEL SECURITY;

-- Políticas permissivas (ajuste conforme necessidade)
CREATE POLICY "Allow all for users" ON users FOR ALL USING (true);
CREATE POLICY "Allow all for tasks" ON tasks FOR ALL USING (true);
CREATE POLICY "Allow all for evidences" ON evidences FOR ALL USING (true);

-- Dados iniciais
INSERT INTO users (name, role, avatar) VALUES
  ('Gerente', 'gerente', '👔'),
  ('João Silva', 'funcionario', '👷'),
  ('Maria Santos', 'funcionario', '👷')
ON CONFLICT DO NOTHING;

-- Storage bucket para evidências (execute separadamente no painel Storage)
-- Crie um bucket chamado "evidencias" com acesso público
