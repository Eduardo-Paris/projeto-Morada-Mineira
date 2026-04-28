"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { storage } from "@/lib/storage";

const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [evidences, setEvidences] = useState([]);
  const [loading, setLoading] = useState(true);

  // Carregar dados iniciais
  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [taskList, evidenceList] = await Promise.all([
        storage.getTasks(),
        storage.getEvidences(),
      ]);
      setTasks(taskList || []);
      setEvidences(evidenceList || []);
    } catch (e) {
      console.error("Erro ao carregar dados:", e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    loadData();
  }, []);

  // ── CRUD de Tarefas ──

  const createTask = useCallback(async (taskData) => {
    const newTask = await storage.createTask({
      ...taskData,
      status: "pendente",
      evidence_count: 0,
    });
    if (newTask) {
      setTasks((prev) => [newTask, ...prev]);
    }
    return newTask;
  }, []);

  const updateTask = useCallback(async (id, updates) => {
    const updated = await storage.updateTask(id, updates);
    if (updated) {
      setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, ...updated } : t)));
    }
    return updated;
  }, []);

  const deleteTask = useCallback(async (id) => {
    const success = await storage.deleteTask(id);
    if (success) {
      setTasks((prev) => prev.filter((t) => t.id !== id));
    }
    return success;
  }, []);

  // ── CRUD de Evidências ──

  const addEvidence = useCallback(async (evidenceData) => {
    const newEvidence = await storage.createEvidence(evidenceData);
    if (newEvidence) {
      setEvidences((prev) => [newEvidence, ...prev]);
      // Atualizar contagem de evidências na tarefa
      const task = tasks.find((t) => t.id === evidenceData.task_id);
      if (task) {
        await storage.updateTask(task.id, {
          evidence_count: (task.evidence_count || 0) + 1,
          status: "aguardando_evidencia",
        });
        setTasks((prev) =>
          prev.map((t) =>
            t.id === task.id
              ? { ...t, evidence_count: (t.evidence_count || 0) + 1, status: "aguardando_evidencia" }
              : t
          )
        );
      }
    }
    return newEvidence;
  }, [tasks]);

  const approveEvidence = useCallback(async (evidenceId, taskId) => {
    const updated = await storage.updateEvidence(evidenceId, { status: "aprovada" });
    if (updated) {
      setEvidences((prev) => prev.map((e) => (e.id === evidenceId ? { ...e, status: "aprovada" } : e)));
      // Verificar se todas as evidências da tarefa foram aprovadas
      const taskEvidences = evidences.filter((e) => e.task_id === taskId);
      const allApproved = taskEvidences.every((e) => e.id === evidenceId ? true : e.status === "aprovada");
      if (allApproved) {
        await updateTask(taskId, { status: "concluida" });
      }
    }
    return updated;
  }, [evidences, updateTask]);

  const rejectEvidence = useCallback(async (evidenceId, taskId, reason) => {
    const updated = await storage.updateEvidence(evidenceId, { status: "rejeitada", rejection_reason: reason });
    if (updated) {
      setEvidences((prev) => prev.map((e) => (e.id === evidenceId ? { ...e, status: "rejeitada", rejection_reason: reason } : e)));
      await updateTask(taskId, { status: "rejeitada" });
    }
    return updated;
  }, [updateTask]);

  const deleteEvidence = useCallback(async (evidenceId, taskId) => {
    const success = await storage.deleteEvidence(evidenceId);
    if (success) {
      setEvidences((prev) => {
        const nextEvidences = prev.filter((e) => e.id !== evidenceId);
        
        // Update task evidence count and status dynamically
        const task = tasks.find((t) => t.id === taskId);
        if (task) {
          const taskEvidences = nextEvidences.filter((e) => e.task_id === taskId);
          const count = taskEvidences.length;
          
          let newStatus = task.status;
          if (count === 0) {
            newStatus = "em_andamento";
          }
          
          storage.updateTask(task.id, { evidence_count: count, status: newStatus }).then(() => {
            setTasks((prevTasks) =>
              prevTasks.map((t) => (t.id === task.id ? { ...t, evidence_count: count, status: newStatus } : t))
            );
          });
        }
        
        return nextEvidences;
      });
    }
    return success;
  }, [tasks]);

  // Upload de imagem para evidência
  const uploadEvidenceImage = useCallback(async (file, taskId) => {
    return await storage.uploadImage(file, taskId);
  }, []);

  // ── Helpers / Computed ──

  const getTaskById = useCallback((id) => {
    return tasks.find((t) => t.id === id);
  }, [tasks]);

  const getEvidencesByTask = useCallback((taskId) => {
    return evidences.filter((e) => e.task_id === taskId);
  }, [evidences]);

  const stats = {
    total: tasks.length,
    pendentes: tasks.filter((t) => t.status === "pendente").length,
    emAndamento: tasks.filter((t) => t.status === "em_andamento").length,
    aguardando: tasks.filter((t) => t.status === "aguardando_evidencia").length,
    concluidas: tasks.filter((t) => t.status === "concluida").length,
    rejeitadas: tasks.filter((t) => t.status === "rejeitada").length,
    taxaConclusao: tasks.length > 0
      ? Math.round((tasks.filter((t) => t.status === "concluida").length / tasks.length) * 100)
      : 0,
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        evidences,
        loading,
        stats,
        createTask,
        updateTask,
        deleteTask,
        addEvidence,
        approveEvidence,
        rejectEvidence,
        deleteEvidence,
        uploadEvidenceImage,
        getTaskById,
        getEvidencesByTask,
        loadData,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error("useTasks deve ser usado dentro de TaskProvider");
  return ctx;
}
