import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Table } from "@/components/ui/Table";
import { Crumb } from "@/components/ui/Crumb";
import { PageHeader } from "@/components/ui/PageHeader";
import { PatientLink } from "@/components/common/PatientLink";
import { navigate } from "@/router/useLocation";

export function Ambulatory({ embedded = false }: { embedded?: boolean }) {
  return <>{!embedded && <><Crumb items={["Seguimiento", "Ambulatorio"]} /><PageHeader title="Seguimiento ambulatorio" subtitle="Visitas posteriores al alta y próximos controles." actions={<Button icon="plus" onClick={() => navigate("/pacientes/1/seguimiento/nuevo")}>Nueva visita</Button>} /></>}<Card><Table headers={["Fecha", "Paciente", "Médico", "Comentario", "Tratamiento", "Próximo control"]} rows={[
    ["14/10/2025", <PatientLink />, "Dr. Martín Pérez", "Control posoperatorio favorable.", "Continuar cuidados", "En 30 días"],
    ["10/10/2025", <PatientLink name="Carlos Fernández" />, "Dra. Lucía Ruiz", "Buena movilidad articular.", "Kinesiología", "24/10/2025"],
    ["08/10/2025", <PatientLink name="Ana Martínez" />, "Dr. Martín Pérez", "Herida en buen estado.", "Alta de curaciones", "Sin control"],
  ]} /></Card></>;
}
