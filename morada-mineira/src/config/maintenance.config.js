// =============================================
// TAREFAS PRÉ-DEFINIDAS DE MANUTENÇÃO — PADARIA
// =============================================
// Lista de tarefas padrão que podem ser rapidamente
// criadas pelo gerente. Adicione ou remova conforme
// necessário para a operação da padaria.
// =============================================

export const MAINTENANCE_TEMPLATES = [
  // ── LIMPEZA ──
  {
    title: "Limpeza do salão de atendimento",
    category: "limpeza",
    priority: "media",
    description: "Varrer, passar pano no chão, limpar mesas e cadeiras, limpar vidros.",
    requiresEvidence: true,
  },
  {
    title: "Limpeza da cozinha / área de produção",
    category: "limpeza",
    priority: "alta",
    description: "Lavar bancadas, desinfetar superfícies, limpar piso e ralos.",
    requiresEvidence: true,
  },
  {
    title: "Limpeza dos banheiros",
    category: "limpeza",
    priority: "alta",
    description: "Lavar pisos, vasos, pias. Repor sabonete, papel higiênico e papel toalha.",
    requiresEvidence: true,
  },
  {
    title: "Limpeza da fachada e calçada",
    category: "limpeza",
    priority: "baixa",
    description: "Lavar calçada, limpar fachada, verificar iluminação externa.",
    requiresEvidence: true,
  },

  // ── PRODUÇÃO ──
  {
    title: "Conferência de mise en place",
    category: "producao",
    priority: "alta",
    description: "Verificar todos os ingredientes e utensílios preparados para a produção do dia.",
    requiresEvidence: false,
  },
  {
    title: "Verificar validade dos insumos",
    category: "producao",
    priority: "urgente",
    description: "Checar data de validade de todos os insumos na área de produção e estoque.",
    requiresEvidence: true,
  },

  // ── ESTOQUE ──
  {
    title: "Inventário de estoque semanal",
    category: "estoque",
    priority: "media",
    description: "Contar itens do estoque e comparar com sistema. Listar itens a comprar.",
    requiresEvidence: true,
  },
  {
    title: "Organizar estoque seco",
    category: "estoque",
    priority: "baixa",
    description: "Organizar prateleiras, etiquetas FIFO, verificar vencimentos.",
    requiresEvidence: true,
  },
  {
    title: "Recebimento de mercadorias",
    category: "estoque",
    priority: "alta",
    description: "Conferir NF, qualidade dos produtos, armazenar corretamente.",
    requiresEvidence: true,
  },

  // ── EQUIPAMENTOS ──
  {
    title: "Manutenção preventiva da masseira",
    category: "equipamentos",
    priority: "media",
    description: "Lubrificar, verificar correias, limpar interna e externamente.",
    requiresEvidence: true,
  },
  {
    title: "Verificar funcionamento da balança",
    category: "equipamentos",
    priority: "alta",
    description: "Calibrar balança, verificar precisão com peso padrão.",
    requiresEvidence: true,
  },
  {
    title: "Limpeza da modeladora de pão",
    category: "equipamentos",
    priority: "media",
    description: "Limpar rolos, verificar ajuste, lubrificar partes móveis.",
    requiresEvidence: true,
  },

  // ── REFRIGERAÇÃO ──
  {
    title: "Verificar temperatura das geladeiras",
    category: "refrigeracao",
    priority: "urgente",
    description: "Registrar temperatura de todas as geladeiras e freezers. Faixa ideal: 0-5°C (geladeira) e -18°C (freezer).",
    requiresEvidence: true,
  },
  {
    title: "Limpeza dos freezers",
    category: "refrigeracao",
    priority: "media",
    description: "Descongelar, limpar internamente, organizar produtos.",
    requiresEvidence: true,
  },
  {
    title: "Manutenção do ar condicionado",
    category: "refrigeracao",
    priority: "baixa",
    description: "Limpar filtros, verificar funcionamento, agendar manutenção se necessário.",
    requiresEvidence: true,
  },

  // ── FORNOS ──
  {
    title: "Limpeza dos fornos",
    category: "forno",
    priority: "alta",
    description: "Limpar interior do forno, bandejas, verificar borrachas de vedação.",
    requiresEvidence: true,
  },
  {
    title: "Verificar pedra refratária",
    category: "forno",
    priority: "media",
    description: "Inspecionar pedras refratárias, verificar rachaduras ou desgaste.",
    requiresEvidence: true,
  },

  // ── VITRINE ──
  {
    title: "Organização da vitrine",
    category: "vitrine",
    priority: "alta",
    description: "Arrumar produtos na vitrine, verificar preços, repor etiquetas.",
    requiresEvidence: true,
  },
  {
    title: "Limpeza do balcão refrigerado",
    category: "vitrine",
    priority: "media",
    description: "Limpar vidros, verificar iluminação, conferir temperatura.",
    requiresEvidence: true,
  },

  // ── HIGIENE / SANITIZAÇÃO ──
  {
    title: "Dedetização programada",
    category: "higiene",
    priority: "urgente",
    description: "Agendar e acompanhar serviço de dedetização. Guardar certificado.",
    requiresEvidence: true,
  },
  {
    title: "Troca de armadilhas de pragas",
    category: "higiene",
    priority: "media",
    description: "Verificar e substituir armadilhas para insetos e roedores.",
    requiresEvidence: true,
  },
  {
    title: "Limpeza da caixa de gordura",
    category: "higiene",
    priority: "media",
    description: "Limpar caixa de gordura, verificar escoamento.",
    requiresEvidence: true,
  },

  // ── ELÉTRICA ──
  {
    title: "Verificar iluminação geral",
    category: "eletrica",
    priority: "baixa",
    description: "Trocar lâmpadas queimadas, verificar reatores e fiação exposta.",
    requiresEvidence: true,
  },

  // ── HIDRÁULICA ──
  {
    title: "Verificar torneiras e descargas",
    category: "hidraulica",
    priority: "baixa",
    description: "Testar todas as torneiras, verificar vazamentos, consertar descargas.",
    requiresEvidence: true,
  },

  // ── GERAL ──
  {
    title: "Manutenção geral do prédio",
    category: "geral",
    priority: "baixa",
    description: "Verificar pintura, portas, janelas, fechaduras, piso.",
    requiresEvidence: true,
  },
];
