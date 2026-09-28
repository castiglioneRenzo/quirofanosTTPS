import type { OperatingRoom } from "@/types";

export const times = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];

export const rooms: OperatingRoom[] = [
  ["Quirófano 1", "Cirugía general", "Ocupado", "María González · 08:00–10:00", "Cirugía General"],
  ["Quirófano 2", "Traumatología", "Disponible", "Carlos Fernández · 10:30", "Traumatología"],
  ["Quirófano 3", "Multidisciplinario", "Ocupado", "Laura Rodríguez · 12:00", "Ginecología"],
  ["Quirófano 4", "Cirugía ambulatoria", "Limpieza", "Disponible desde 11:30", "Uso compartido"],
];
