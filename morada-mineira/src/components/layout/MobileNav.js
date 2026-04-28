"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { NAV_ITEMS } from "@/config/roles.config";
import { COMPANY } from "@/config/company.config";

export default function MobileNav() {
  const { user, logout } = useAuth();
  const pathname = usePathname();

  if (!user) return null;

  const navItems = NAV_ITEMS[user.role] || [];

  return (
    <>
      {/* Mobile Top Header */}
      <header className="mobile-header mobile-only">
        <div className="mobile-header-brand">
          <div
            style={{
              width: 32, height: 32, borderRadius: 8,
              background: "var(--color-primary)", display: "flex",
              alignItems: "center", justifyContent: "center",
              color: "white", fontWeight: 800, fontFamily: "var(--font-heading)", fontSize: "0.8rem",
            }}
          >
            MM
          </div>
          <h2>{COMPANY.name}</h2>
        </div>
        <div className="mobile-header-user">
          <span>{user.avatar}</span>
          <span style={{ fontSize: "0.8rem" }}>{user.name}</span>
          <button
            className="btn btn-ghost btn-sm"
            onClick={logout}
            style={{ padding: 4, fontSize: "0.75rem" }}
          >
            Sair
          </button>
        </div>
      </header>

      {/* Bottom Navigation Bar */}
      <nav className="mobile-nav mobile-only">
        <ul className="mobile-nav-items">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`mobile-nav-link ${pathname === item.href ? "active" : ""}`}
              >
                <span className="mobile-nav-link-icon">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
