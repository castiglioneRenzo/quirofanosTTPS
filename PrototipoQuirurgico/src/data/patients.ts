import type { Patient } from "@/types";

export const patients: Patient[] = [
  { name: "María González", dni: "28.456.789", age: "42", insurance: "OSDE", service: "Cirugía General", diagnosis: "Colelitiasis sintomática", priority: "Alta", status: "En preparación" },
  { name: "Carlos Fernández", dni: "31.284.651", age: "37", insurance: "Swiss Medical", service: "Traumatología", diagnosis: "Hernia discal lumbar", priority: "Media", status: "En espera" },
  { name: "Laura Rodríguez", dni: "24.981.230", age: "51", insurance: "IOMA", service: "Ginecología", diagnosis: "Miomatosis uterina", priority: "Media", status: "Programada" },
  { name: "Miguel Sánchez", dni: "36.742.098", age: "30", insurance: "PAMI", service: "Urología", diagnosis: "Litiasis renal", priority: "Baja", status: "Estudios pendientes" },
  { name: "Ana Martínez", dni: "29.106.422", age: "44", insurance: "Galeno", service: "Cirugía General", diagnosis: "Hernia inguinal", priority: "Alta", status: "Validada" },
];

export const patientTabs = ["Información personal", "Antecedentes", "Cirugías", "Estudios", "Seguimiento"];
