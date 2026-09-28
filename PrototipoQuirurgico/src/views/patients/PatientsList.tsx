import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Table } from "@/components/ui/Table";
import { Crumb } from "@/components/ui/Crumb";
import { PageHeader } from "@/components/ui/PageHeader";
import { Pagination } from "@/components/ui/Pagination";
import { PatientLink } from "@/components/common/PatientLink";
import { Filters } from "@/components/common/Filters";
import { patients } from "@/data/patients";
import { navigate } from "@/router/useLocation";

export function PatientsList({ waiting = false }: { waiting?: boolean }) {
  const tableRows = patients.map((p, i) => waiting ? [
    i === 0 ? "18/09/2025" : `${20 + i}/09/2025`, <PatientLink name={p.name} />, p.diagnosis, i === 0 ? "Colecistectomía laparoscópica" : ["Artroscopia", "Histerectomía", "Ureteroscopía", "Hernioplastia"][i - 1], p.service, i % 2 ? "Dra. Lucía Ruiz" : "Dr. Martín Pérez", <Badge tone={p.priority === "Alta" ? "danger" : "warning"}>{p.priority}</Badge>, <Badge tone={i === 0 || i === 4 ? "success" : "warning"}>{i === 0 || i === 4 ? "Completos" : "Pendientes"}</Badge>, <Badge tone="info">{p.status}</Badge>
  ] : [
    <PatientLink name={p.name} />, p.dni, `${p.age} años`, p.insurance, p.service, p.diagnosis, <Badge tone={p.priority === "Alta" ? "danger" : p.priority === "Media" ? "warning" : "neutral"}>{p.priority}</Badge>, <Badge tone="info">{p.status}</Badge>, <Button variant="ghost" onClick={() => navigate("/pacientes/1")}>Ver detalle <Icon name="arrow" size={14} /></Button>
  ]);
  return <>
    <Crumb items={waiting ? ["Pacientes", "Lista de espera"] : ["Pacientes"]} />
    <PageHeader title={waiting ? "Lista de espera quirúrgica" : "Pacientes"} subtitle={waiting ? "Pacientes pendientes de programación y estado de preparación." : "Administrá pacientes y consultá su información clínica."} actions={<><Button variant="secondary" icon="search">Buscar</Button><Button icon="plus" onClick={() => navigate(waiting ? "/cirugias/nueva" : "/pacientes/nuevo")}>{waiting ? "Agregar a lista" : "Nuevo paciente"}</Button></>} />
    <Filters wait={waiting} />
    <Card><div className="results-bar"><span><strong>{waiting ? "24" : "128"} pacientes</strong> encontrados</span><span>Ordenar por: <strong>{waiting ? "Prioridad" : "Apellido"}</strong></span></div><Table headers={waiting ? ["Registro", "Paciente", "Diagnóstico", "Cirugía", "Servicio", "Cirujano", "Prioridad", "Prequirúrgicos", "Estado"] : ["Paciente", "DNI", "Edad", "Obra social", "Servicio", "Diagnóstico", "Prioridad", "Estado", ""]} rows={tableRows} /><Pagination /></Card>
  </>;
}
