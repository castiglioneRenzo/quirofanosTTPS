import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Crumb } from "@/components/ui/Crumb";
import { PageHeader } from "@/components/ui/PageHeader";
import { navigate } from "@/router/useLocation";

export function SurgeryHistory({ embedded = false }: { embedded?: boolean }) {
  return <>
    {!embedded && <><Crumb items={["Pacientes", "María González", "Historia quirúrgica"]} /><PageHeader title="Historia quirúrgica" subtitle="Atenciones y procedimientos de María González" /></>}
    <div className="surgery-list">
      <Card className="surgery-item"><span className="surgery-date">30<span>SEP<br />2025</span></span><div className="surgery-info"><div><Badge tone="info">Programada</Badge><Badge tone="neutral">Internación</Badge></div><div className="section-heading">Colecistectomía laparoscópica</div><p>Colelitiasis sintomática</p><small>Cirugía General · Dr. Martín Pérez · Quirófano 1</small></div><Button variant="secondary" onClick={() => navigate("/cirugias/1")}>Ver detalle <Icon name="arrow" size={14} /></Button></Card>
      <Card className="surgery-item"><span className="surgery-date muted">12<span>JUN<br />2019</span></span><div className="surgery-info"><div><Badge tone="success">Realizada</Badge><Badge tone="neutral">Ambulatoria</Badge></div><div className="section-heading">Resección de lesión cutánea</div><p>Nevus melanocítico benigno</p><small>Dermatología · Dra. Sofía Costa</small></div><Button variant="secondary">Ver detalle <Icon name="arrow" size={14} /></Button></Card>
    </div>
  </>;
}
