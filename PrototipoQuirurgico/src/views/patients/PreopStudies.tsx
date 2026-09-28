import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Table } from "@/components/ui/Table";
import { Crumb } from "@/components/ui/Crumb";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PageHeader } from "@/components/ui/PageHeader";
import { navigate } from "@/router/useLocation";

export function PreopStudies({ embedded = false }: { embedded?: boolean }) {
  return <>
    {!embedded && <><Crumb items={["Pacientes", "María González", "Prequirúrgicos"]} /><PageHeader title="Estudios prequirúrgicos" subtitle="María González · Colecistectomía laparoscópica" actions={<Button onClick={() => navigate("/cirugias/nueva")}>Programar cirugía</Button>} /></>}
    <Card className="readiness"><div className="readiness-icon"><Icon name="check" /></div><div><span className="eyebrow">PREPARACIÓN COMPLETA</span><div className="section-heading">Paciente listo para programación</div><p>Todos los estudios requeridos fueron realizados y validados.</p></div><strong>4 de 4</strong></Card>
    <Card><SectionTitle title="Estudios requeridos" subtitle="Última actualización: hoy, 09:20" /><Table headers={["Estudio", "Estado", "Fecha", "Resultado", "Validado por"]} rows={[
      ["Laboratorio completo", <Badge tone="success">Validado</Badge>, "26/09/2025", "Sin hallazgos relevantes", "Dra. Fernández"],
      ["Electrocardiograma", <Badge tone="success">Validado</Badge>, "27/09/2025", "Ritmo sinusal normal", "Dr. Molina"],
      ["Radiografía de tórax", <Badge tone="success">Validado</Badge>, "27/09/2025", "Sin particularidades", "Dra. Silva"],
      ["Evaluación anestésica", <Badge tone="success">Validado</Badge>, "29/09/2025", "ASA II", "Dr. Romero"],
    ]} /></Card>
  </>;
}
