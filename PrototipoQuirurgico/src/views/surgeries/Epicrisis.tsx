import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Crumb } from "@/components/ui/Crumb";
import { DetailRows } from "@/components/ui/DetailRows";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PageHeader } from "@/components/ui/PageHeader";
import { navigate } from "@/router/useLocation";

export function Epicrisis() {
  return <><Crumb items={["Cirugías", "Alta", "Epicrisis asistida"]} /><PageHeader title="Borrador de epicrisis" subtitle="Revisá cuidadosamente el contenido antes de aceptarlo." actions={<Badge tone="info">Borrador generado por IA</Badge>} /><div className="ai-warning"><Icon name="sparkles" /><div><strong>Contenido asistido</strong><p>La IA genera únicamente un borrador. La revisión y validación final corresponde al profesional tratante.</p></div></div><div className="epicrisis-grid"><Card><SectionTitle title="Información disponible" /><DetailRows rows={[["Diagnóstico", "Colelitiasis sintomática"], ["Procedimiento", "Colecistectomía laparoscópica"], ["Fecha", "30/09/2025"], ["Evoluciones", "2 registros"], ["Estudios", "4 validados"]]} /><div className="source-block"><strong>Tratamientos registrados</strong><p>Analgesia, hidratación, control de herida y progresión de dieta.</p></div></Card><Card className="draft"><SectionTitle title="Borrador de epicrisis" action={<Badge tone="warning">Sin validar</Badge>} /><div className="draft-section"><strong>Motivo de ingreso</strong><p>Paciente de 42 años que ingresa para resolución quirúrgica programada de colelitiasis sintomática.</p></div><div className="draft-section"><strong>Procedimiento</strong><p>Se realiza colecistectomía laparoscópica sin complicaciones intraoperatorias.</p></div><div className="draft-section"><strong>Evolución</strong><p>Presenta evolución postoperatoria favorable, afebril, hemodinámicamente estable y con buena tolerancia oral.</p></div><div className="draft-section"><strong>Indicaciones</strong><p>Continuar analgesia según pauta, cuidados de heridas y control por consultorio externo en 7 días.</p></div></Card></div><div className="form-actions spaced"><Button variant="secondary" onClick={() => navigate("/cirugias/1/alta")}>Volver</Button><div><Button variant="secondary" icon="sparkles">Regenerar borrador</Button><Button variant="secondary">Editar</Button><Button onClick={() => navigate("/cirugias/1/alta")}>Aceptar borrador</Button></div></div></>;
}
