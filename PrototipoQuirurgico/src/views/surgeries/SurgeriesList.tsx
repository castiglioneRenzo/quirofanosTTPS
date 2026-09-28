import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Table } from "@/components/ui/Table";
import { Crumb } from "@/components/ui/Crumb";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PageHeader } from "@/components/ui/PageHeader";
import { PatientLink } from "@/components/common/PatientLink";
import { Filters } from "@/components/common/Filters";
import { patients } from "@/data/patients";
import { navigate } from "@/router/useLocation";

export function SurgeriesList() {
  return <><Crumb items={["Cirugías"]} /><PageHeader title="Cirugías" subtitle="Consultá y gestioná las atenciones quirúrgicas." actions={<Button icon="plus" onClick={() => navigate("/cirugias/nueva")}>Nueva cirugía</Button>} /><Filters /><Card><SectionTitle title="Cirugías programadas" /><Table headers={["Fecha", "Paciente", "Procedimiento", "Servicio", "Cirujano", "Quirófano", "Estado", ""]} rows={patients.slice(0, 4).map((p, i) => [`${30 + i}/09 · ${8 + i * 2}:00`, <PatientLink name={p.name} />, ["Colecistectomía laparoscópica", "Artroscopia", "Histerectomía", "Ureteroscopía"][i], p.service, i % 2 ? "Dra. Lucía Ruiz" : "Dr. Martín Pérez", `Q${i + 1}`, <Badge tone={i === 0 ? "success" : "info"}>{i === 0 ? "Confirmada" : "Programada"}</Badge>, <Button variant="ghost" onClick={() => navigate("/cirugias/1")}>Ver detalle</Button>])} /></Card></>;
}
