"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { NAV_ITEMS } from "@/config/roles.config";
import { COMPANY } from "@/config/company.config";

export default function Sidebar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();

  if (!user) return null;

  const navItems = NAV_ITEMS[user.role] || [];

  return (
    <aside className="sidebar desktop-only">
      <div className="sidebar-header">
        <div
          className="sidebar-logo"
          style={{ background: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 800, fontFamily: "var(--font-heading)", fontSize: "1.1rem" }}
        >
          MM
        </div>
        <div className="sidebar-brand">
          <h2>{COMPANY.name}</h2>
          <p>{COMPANY.slogan}</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`sidebar-link ${pathname === item.href ? "active" : ""}`}
          >
            <span className="sidebar-link-icon">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <span style={{ fontSize: "1.5rem" }}>{user.avatar}</span>
          <div>
            <div style={{ fontWeight: 600, fontSize: "0.85rem" }}>{user.name}</div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
              {user.role === "gerente" ? "Gerente" : "Funcionário"}
            </div>
          </div>
        </div>
        <button className="btn btn-secondary btn-sm w-full" onClick={logout}>
          Sair
        </button>
      </div>
    </aside>
  );
}
