import type { NavItem, QuickAction } from "@/types";

export const navItems: NavItem[] = [
  { label: "Dashboard", icon: "grid", path: "/dashboard" },
  { label: "Pacientes", icon: "users", path: "/pacientes" },
  { label: "Cirugías", icon: "activity", path: "/cirugias" },
  { label: "Quirófanos", icon: "calendar", path: "/quirofanos" },
  { label: "Seguimiento", icon: "heart", path: "/seguimiento/internados" },
  { label: "Consultas", icon: "search", path: "/consultas" },
  { label: "Administración", icon: "settings", path: "/administracion" },
];

export const quickActions: QuickAction[] = [
  ["plus", "Nuevo paciente", "Registrar datos personales", "/pacientes/nuevo"],
  ["search", "Buscar paciente", "Consultar ficha e historia", "/pacientes"],
  ["activity", "Lista de espera", "24 pacientes pendientes", "/pacientes/lista-espera"],
  ["calendar", "Reservar quirófano", "Consultar disponibilidad", "/quirofanos/reservar"],
  ["clipboard", "Registrar evolución", "Pacientes internados", "/seguimiento/internados"],
  ["clock", "Ver cronograma", "Agenda quirúrgica semanal", "/quirofanos/cronograma"],
];
