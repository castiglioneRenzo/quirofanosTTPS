import type { ReactNode } from "react";
import { Dashboard } from "@/views/dashboard/Dashboard";
import { PatientsList } from "@/views/patients/PatientsList";
import { PatientForm } from "@/views/patients/PatientForm";
import { PatientDetail } from "@/views/patients/PatientDetail";
import { PreopStudies } from "@/views/patients/PreopStudies";
import { SurgeryHistory } from "@/views/patients/SurgeryHistory";
import { NewVisit } from "@/views/followUp/NewVisit";
import { SurgeriesList } from "@/views/surgeries/SurgeriesList";
import { SurgeryDetail } from "@/views/surgeries/SurgeryDetail";
import { SurgeryWizard } from "@/views/surgeries/SurgeryWizard";
import { Evolution } from "@/views/surgeries/Evolution";
import { Discharge } from "@/views/surgeries/Discharge";
import { Epicrisis } from "@/views/surgeries/Epicrisis";
import { OperatingRooms } from "@/views/operatingRooms/OperatingRooms";
import { Schedule } from "@/views/operatingRooms/Schedule";
import { Admitted } from "@/views/followUp/Admitted";
import { Ambulatory } from "@/views/followUp/Ambulatory";
import { Consultations } from "@/views/search/Consultations";
import { AdminHome } from "@/views/admin/AdminHome";
import { UsersList } from "@/views/admin/UsersList";
import { NewUser } from "@/views/admin/NewUser";
import { Assignments } from "@/views/admin/Assignments";
import { EntityCatalog } from "@/views/admin/EntityCatalog";

export interface AppRoute {
  path: string | RegExp;
  render: (path: string) => ReactNode;
}

export const routes: AppRoute[] = [
  { path: "/", render: () => <Dashboard /> },
  { path: "/dashboard", render: () => <Dashboard /> },
  { path: "/pacientes", render: () => <PatientsList /> },
  { path: "/pacientes/nuevo", render: () => <PatientForm /> },
  { path: "/pacientes/lista-espera", render: () => <PatientsList waiting /> },
  { path: /^\/pacientes\/\d+\/prequirurgicos$/, render: () => <PreopStudies /> },
  { path: /^\/pacientes\/\d+\/cirugias$/, render: () => <SurgeryHistory /> },
  { path: /^\/pacientes\/\d+\/seguimiento\/nuevo$/, render: () => <NewVisit /> },
  { path: /^\/pacientes\/\d+$/, render: () => <PatientDetail /> },
  { path: "/cirugias", render: () => <SurgeriesList /> },
  { path: "/cirugias/nueva", render: () => <SurgeryWizard /> },
  { path: /^\/cirugias\/\d+\/evolucion$/, render: () => <Evolution /> },
  { path: /^\/cirugias\/\d+\/alta$/, render: () => <Discharge /> },
  { path: /^\/cirugias\/\d+\/epicrisis$/, render: () => <Epicrisis /> },
  { path: /^\/cirugias\/\d+$/, render: () => <SurgeryDetail /> },
  { path: "/quirofanos", render: () => <OperatingRooms /> },
  { path: "/quirofanos/cronograma", render: () => <Schedule /> },
  { path: "/quirofanos/reservar", render: () => <Schedule reserve /> },
  { path: "/seguimiento", render: () => <Admitted /> },
  { path: "/seguimiento/internados", render: () => <Admitted /> },
  { path: "/seguimiento/ambulatorio", render: () => <Ambulatory /> },
  { path: "/consultas", render: () => <Consultations /> },
  { path: "/administracion", render: () => <AdminHome /> },
  { path: "/administracion/usuarios", render: () => <UsersList /> },
  { path: "/administracion/usuarios/nuevo", render: () => <NewUser /> },
  { path: "/administracion/quirofanos/asignaciones", render: () => <Assignments /> },
  {
    path: /^\/administracion\/.+/,
    render: (path) => <EntityCatalog entity={path.split("/").pop() || "entidades"} />,
  },
];

export function resolveRoute(path: string): ReactNode | null {
  const route = routes.find((r) =>
    typeof r.path === "string" ? r.path === path : r.path.test(path)
  );
  return route ? route.render(path) : null;
}
