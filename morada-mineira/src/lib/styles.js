export const TURNOS = ["Manhã", "Tarde", "Noite"];

export const SUGESTOES_IA = [
    "📊 Padrão identificado: tarefas de limpeza são frequentemente atrasadas às terças-feiras. Considere reforçar a equipe.",
    "⚡ Dica: O pré-preparo da massa às 05:45 reduz 18min no tempo de produção matinal.",
    "🔔 Alerta: Temperatura do refrigerador 2 está 2°C acima do ideal nas últimas 3 semanas.",
    "✅ Excelente! Esta semana teve 94% de conclusão de tarefas — melhor resultado do mês!",
    "🧠 Sugestão IA: Adicionar tarefa de verificação de gás às 06:00 com base em incidentes anteriores.",
];

export const CATEGORIAS_COR = {
    "Produção": { bg: "#FFF3E0", text: "#E65100", dot: "#FF6D00" },
    "Limpeza": { bg: "#E8F5E9", text: "#1B5E20", dot: "#2E7D32" },
    "Equipamentos": { bg: "#E3F2FD", text: "#0D47A1", dot: "#1565C0" },
    "Estoque": { bg: "#F3E5F5", text: "#4A148C", dot: "#6A1B9A" },
    "Controle": { bg: "#FFF8E1", text: "#F57F17", dot: "#F9A825" },
    "Atendimento": { bg: "#FCE4EC", text: "#880E4F", dot: "#AD1457" },
};

export const styles = {
    shell: { minHeight: "100vh", background: "linear-gradient(135deg, #2C1A0E 0%, #5C3A1E 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, fontFamily: "'Georgia', serif" },
    phone: { width: 375, maxWidth: "100%", height: "90vh", minHeight: 720, background: "#FDF6EC", borderRadius: 40, overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2)", display: "flex", flexDirection: "column", position: "relative" },
    statusBar: { background: "#FDF6EC", padding: "12px 20px 4px", display: "flex", justifyContent: "space-between", alignItems: "center" },
    header: { background: "#3E2410", padding: "12px 20px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" },
    headerTitle: { color: "#F5CDA0", fontSize: 22, fontWeight: 700, letterSpacing: "-0.5px" },
    headerSub: { color: "#B0956A", fontSize: 11, marginTop: 2, textTransform: "capitalize" },
    avatar: { width: 38, height: 38, borderRadius: 19, background: "#C8853A", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", border: "2px solid #F5CDA0" },
    iaCard: { margin: "12px 16px 0", background: "linear-gradient(135deg, #7B1FA2 0%, #4A148C 100%)", borderRadius: 16, padding: "12px 14px", boxShadow: "0 4px 16px rgba(74,20,140,0.3)" },
    iaLabel: { color: "#E1BEE7", fontSize: 10, fontWeight: 700, letterSpacing: 1, marginBottom: 4 },
    iaText: { color: "#fff", fontSize: 12, lineHeight: 1.5, fontFamily: "system-ui, sans-serif" },
    closeBtn: { background: "none", border: "none", color: "#CE93D8", fontSize: 20, cursor: "pointer", padding: 0, lineHeight: 1 },
    tabs: { display: "flex", padding: "12px 16px 0", gap: 4 },
    tab: { flex: 1, padding: "8px 4px", border: "none", background: "transparent", fontSize: 11, color: "#B0956A", cursor: "pointer", borderBottom: "2px solid transparent", fontFamily: "system-ui, sans-serif", fontWeight: 500, textDecoration: "none", textAlign: "center" },
    tabAtivo: { color: "#C8853A", borderBottom: "2px solid #C8853A", fontWeight: 700 },
    content: { flex: 1, overflowY: "auto", padding: "12px 16px 8px", scrollbarWidth: "none" },
    bottomNav: { background: "#fff", borderTop: "1px solid #F0E4D0", padding: "8px 0 16px", display: "flex", justifyContent: "space-around" },
    navBtn: { display: "flex", flexDirection: "column", alignItems: "center", gap: 2, background: "none", border: "none", cursor: "pointer", padding: "4px 12px", textDecoration: "none" },
    navBtnAtivo: { color: "#C8853A" },
};

export const loginStyles = {
    bg: { flex: 1, background: "linear-gradient(180deg, #3E2410 0%, #FDF6EC 35%)", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 60 },
    logo: { fontSize: 64, marginBottom: 8 },
    title: { fontSize: 32, fontWeight: 800, color: "#fff", letterSpacing: "-1px" },
    sub: { fontSize: 13, color: "#B0956A", marginBottom: 8, fontFamily: "system-ui, sans-serif" },
    label: { fontSize: 13, fontWeight: 700, color: "#5C3A1E", marginBottom: 10, fontFamily: "system-ui, sans-serif" },
    userCard: { display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "#fff", borderRadius: 16, marginBottom: 8, cursor: "pointer", border: "2px solid #F0E4D0", transition: "all 0.2s" },
    userCardSel: { border: "2px solid #C8853A", background: "#FFF8F0" },
    userAvatar: { width: 40, height: 40, borderRadius: 20, background: "#3E2410", display: "flex", alignItems: "center", justifyContent: "center", color: "#F5CDA0", fontSize: 14, fontWeight: 700 },
    userName: { fontWeight: 700, color: "#2C1A0E", fontSize: 14, fontFamily: "system-ui, sans-serif" },
    userRole: { fontSize: 11, color: "#8B7355", fontFamily: "system-ui, sans-serif" },
    btn: { width: "100%", background: "#3E2410", color: "#F5CDA0", border: "none", borderRadius: 16, padding: "16px", fontSize: 15, fontWeight: 700, cursor: "pointer", marginTop: 16, fontFamily: "system-ui, sans-serif", transition: "opacity 0.2s" },
};

export const turnoStyles = {
    btn: { flex: 1, padding: "8px 4px", border: "1.5px solid #E8D5B0", background: "#fff", borderRadius: 12, fontSize: 11, color: "#8B7355", cursor: "pointer", fontFamily: "system-ui, sans-serif", fontWeight: 500, transition: "all 0.2s" },
    btnAtivo: { background: "#3E2410", color: "#F5CDA0", borderColor: "#3E2410", fontWeight: 700 },
};

export const checkStyles = {
    progressCard: { background: "#fff", borderRadius: 16, padding: "14px 16px", marginBottom: 14, boxShadow: "0 2px 12px rgba(62,36,16,0.08)" },
    progressLabel: { fontSize: 11, color: "#8B7355", fontFamily: "system-ui, sans-serif", fontWeight: 600 },
    progressCount: { fontSize: 20, fontWeight: 800, color: "#2C1A0E" },
    progressCircle: { width: 52, height: 52, borderRadius: 26, background: "#FFF8F0", border: "3px solid #F0E4D0", display: "flex", alignItems: "center", justifyContent: "center" },
    barBg: { height: 8, background: "#F0E4D0", borderRadius: 8, overflow: "hidden" },
    barFill: { height: "100%", borderRadius: 8, transition: "width 0.5s ease" },
    taskCard: { background: "#fff", borderRadius: 14, padding: "12px 12px", display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer", boxShadow: "0 2px 8px rgba(62,36,16,0.06)", userSelect: "none" },
    checkbox: { width: 22, height: 22, borderRadius: 11, border: "2px solid", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 },
    taskTitle: { fontSize: 13, fontWeight: 600, lineHeight: 1.4, fontFamily: "system-ui, sans-serif" },
    catBadge: { fontSize: 10, padding: "2px 7px", borderRadius: 10, fontWeight: 600, fontFamily: "system-ui, sans-serif" },
};

export const filterStyles = {
    btn: { padding: "5px 12px", border: "1.5px solid #E8D5B0", background: "#fff", borderRadius: 20, fontSize: 10, color: "#8B7355", cursor: "pointer", whiteSpace: "nowrap", fontFamily: "system-ui, sans-serif", fontWeight: 600, transition: "all 0.2s" },
};

export const relStyles = {
    titulo: { fontSize: 16, fontWeight: 800, color: "#2C1A0E", marginBottom: 14 },
    card: { borderRadius: 16, padding: "14px 16px", marginBottom: 10, textAlign: "center" },
    barBg: { height: 8, background: "rgba(0,0,0,0.1)", borderRadius: 8, overflow: "hidden", marginTop: 10 },
    barFill: { height: "100%", background: "#1565C0", borderRadius: 8 },
    turnoCard: { background: "#fff", borderRadius: 16, padding: "14px 16px", marginBottom: 10, boxShadow: "0 2px 8px rgba(62,36,16,0.06)" },
    pendente: { fontSize: 11, color: "#C62828", background: "#FFEBEE", padding: "4px 10px", borderRadius: 8, marginBottom: 4, fontFamily: "system-ui, sans-serif" },
    iaBox: { background: "linear-gradient(135deg, #F3E5F5, #EDE7F6)", borderRadius: 16, padding: 14, marginTop: 4 },
};

export const gestStyles = {
    card: { background: "#fff", borderRadius: 16, padding: "14px 16px", marginBottom: 12, boxShadow: "0 2px 8px rgba(62,36,16,0.06)" },
    userRow: { display: "flex", alignItems: "center", gap: 10, marginBottom: 10 },
    avatarSmall: { width: 34, height: 34, borderRadius: 17, background: "#3E2410", color: "#F5CDA0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700 },
    badge: { background: "#E8F5E9", color: "#2E7D32", fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 10 },
    alerta: { display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderRadius: 10, marginBottom: 6, border: "1.5px solid" },
};
