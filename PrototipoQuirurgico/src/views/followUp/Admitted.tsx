import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Table } from "@/components/ui/Table";
import { Crumb } from "@/components/ui/Crumb";
import { PageHeader } from "@/components/ui/PageHeader";
import { PatientLink } from "@/components/common/PatientLink";
import { Filters } from "@/components/common/Filters";
import { navigate } from "@/router/useLocation";

export function Admitted() {
  return <><Crumb items={["Seguimiento", "Pacientes internados"]} /><PageHeader title="Pacientes internados" subtitle="Seguimiento postoperatorio durante la internación." /><Filters /><Card><Table headers={["Paciente", "Cirugía", "Fecha cirugía", "Habitación", "Días", "Última evolución", "Médico", "Estado", ""]} rows={[
    [<PatientLink />, "Colecistectomía", "30/09/2025", "302", "1", "Hoy · 08:15", "Dr. Martín Pérez", <Badge tone="success">Favorable</Badge>, <Button onClick={() => navigate("/cirugias/1/evolucion")}>Registrar evolución</Button>],
    [<PatientLink name="Jorge López" />, "Colectomía", "28/09/2025", "218", "3", "Ayer · 14:30", "Dra. Lucía Ruiz", <Badge tone="warning">En observación</Badge>, <Button variant="secondary" onClick={() => navigate("/cirugias/1/evolucion")}>Registrar evolución</Button>],
    [<PatientLink name="Miguel Sánchez" />, "Ureteroscopía", "29/09/2025", "405", "2", "Ayer · 10:15", "Dr. Javier Mora", <Badge tone="success">Favorable</Badge>, <Button variant="secondary" onClick={() => navigate("/cirugias/1/evolucion")}>Registrar evolución</Button>],
  ]} /></Card></>;
}
