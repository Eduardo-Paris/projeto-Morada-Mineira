
# Morada Mineira - Sistema de Gestão de Tarefas

## 🚀 Guia de Implantação

Este projeto utiliza **Next.js** e **Supabase**. Siga os passos abaixo para rodar o ambiente localmente.

### 1. Pré-requisitos
* Node.js (versão 18 ou superior)
* Conta no Supabase (com projeto criado e tabelas configuradas)

### 2. Configuração de Variáveis de Ambiente
Crie um arquivo chamado `.env.local` na raiz do projeto e adicione as chaves de API do seu banco de dados Supabase:

NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase_aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anon_aqui

### 3. Instalação e Execução
Abra o terminal na pasta do projeto e rode os comandos:

# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev


O sistema estará disponível em `http://localhost:3000`.