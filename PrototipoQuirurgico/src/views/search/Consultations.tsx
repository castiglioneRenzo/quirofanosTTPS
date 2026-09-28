import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Table } from "@/components/ui/Table";
import { Crumb } from "@/components/ui/Crumb";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PageHeader } from "@/components/ui/PageHeader";
import { PatientLink } from "@/components/common/PatientLink";
import { navigate } from "@/router/useLocation";

export function Consultations() {
  return <><Crumb items={["Consultas"]} /><PageHeader title="Consultas" subtitle="Buscá información clínica y administrativa en todo el sistema." /><Card className="search-hero"><span className="search-hero-icon"><Icon name="search" size={24} /></span><Input placeholder="Buscar paciente, DNI, cirugía, médico..." /><Button>Buscar</Button></Card><Card className="advanced"><SectionTitle title="Filtros avanzados" /><div className="form-grid"><Select label="Servicio"><option>Todos</option></Select><Select label="Especialidad"><option>Todas</option></Select><Select label="Cirujano"><option>Todos</option></Select><Select label="Obra social"><option>Todas</option></Select><Input label="Diagnóstico" placeholder="Buscar diagnóstico" /><Input label="Fecha" type="date" /><Select label="Estado"><option>Todos</option></Select><Select label="Prioridad"><option>Todas</option></Select></div></Card><Card><SectionTitle title="Resultados recientes" /><Table headers={["Tipo", "Resultado", "Información", "Estado", ""]} rows={[
    ["Paciente", <PatientLink />, "DNI 28.456.789 · OSDE", <Badge tone="info">En preparación</Badge>, <Button variant="ghost" onClick={() => navigate("/pacientes/1")}>Abrir</Button>],
    ["Cirugía", "Colecistectomía laparoscópica", "María González · 30/09/2025", <Badge tone="success">Confirmada</Badge>, <Button variant="ghost" onClick={() => navigate("/cirugias/1")}>Abrir</Button>],
    ["Profesional", "Dr. Martín Pérez", "Cirugía General · Cirujano", <Badge tone="success">Activo</Badge>, <Button variant="ghost">Abrir</Button>],
  ]} /></Card></>;
}
