"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { COMPANY } from "@/config/company.config";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { login, users, isAuthenticated } = useAuth();
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/painel");
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated) {
    return null;
  }

  const filteredUsers = selectedRole ? users.filter((u) => u.role === selectedRole) : [];

  function handleRoleSelect(role) {
    setSelectedRole(role);
    const roleUsers = users.filter((u) => u.role === role);
    if (roleUsers.length === 1) {
      setSelectedUser(roleUsers[0]);
    } else {
      setSelectedUser(null);
    }
  }

  function handleLogin() {
    if (!selectedUser) return;
    login(selectedUser);
    router.push("/painel");
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div
          className="login-logo"
          style={{
            background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "white", fontWeight: 800, fontFamily: "var(--font-heading)", fontSize: "1.5rem",
          }}
        >
          MM
        </div>
        <h1 className="login-title">{COMPANY.name}</h1>
        <p className="login-subtitle">{COMPANY.description}</p>

        {/* Role Selection */}
        <div className="login-roles">
          <button
            className={`login-role-btn ${selectedRole === "gerente" ? "selected" : ""}`}
            onClick={() => handleRoleSelect("gerente")}
          >
            <span className="login-role-icon">👔</span>
            <div className="login-role-info">
              <h3>Gerente</h3>
              <p>Criar tarefas, aprovar evidências, ver relatórios</p>
            </div>
          </button>

          <button
            className={`login-role-btn ${selectedRole === "funcionario" ? "selected" : ""}`}
            onClick={() => handleRoleSelect("funcionario")}
          >
            <span className="login-role-icon">👷</span>
            <div className="login-role-info">
              <h3>Funcionário</h3>
              <p>Executar tarefas, enviar evidências fotográficas</p>
            </div>
          </button>
        </div>

        {/* User Selection */}
        {selectedRole && filteredUsers.length > 0 && (
          <div className="login-users animate-fade">
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: 8 }}>
              Selecione seu perfil:
            </p>
            {filteredUsers.map((u) => (
              <button
                key={u.id}
                className={`login-user-btn ${selectedUser?.id === u.id ? "selected" : ""}`}
                onClick={() => setSelectedUser(u)}
              >
                <span style={{ fontSize: "1.3rem" }}>{u.avatar}</span>
                <span style={{ fontWeight: 500 }}>{u.name}</span>
              </button>
            ))}
          </div>
        )}

        {selectedUser && (
          <button className="btn btn-primary btn-lg w-full animate-fade" onClick={handleLogin}>
            Entrar como {selectedUser.name}
          </button>
        )}

        <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: 24 }}>
          © {new Date().getFullYear()} {COMPANY.name}
        </p>
      </div>
    </div>
  );
}
