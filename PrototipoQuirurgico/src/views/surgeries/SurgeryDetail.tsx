import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Tabs } from "@/components/ui/Tabs";
import { Crumb } from "@/components/ui/Crumb";
import { DetailRows } from "@/components/ui/DetailRows";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PreopStudies } from "@/views/patients/PreopStudies";
import { Ambulatory } from "@/views/followUp/Ambulatory";
import { navigate } from "@/router/useLocation";

export function SurgeryDetail() {
  const [tab, setTab] = useState("Resumen");
  const tabs = ["Resumen", "Prequirúrgicos", "Programación", "Evolución", "Epicrisis", "Seguimiento ambulatorio"];
  return <>
    <Crumb items={["Cirugías", "Colecistectomía laparoscópica"]} />
    <div className="surgery-header"><div><Badge tone="success">Confirmada</Badge><PageHeader title="Colecistectomía laparoscópica" subtitle="María González · DNI 28.456.789" /></div><div className="header-actions"><Button variant="secondary" onClick={() => navigate("/cirugias/1/evolucion")}>Ver evolución</Button><Button onClick={() => navigate("/cirugias/1/alta")}>Registrar alta</Button></div></div>
    <div className="mini-stats"><div><span>Fecha y hora</span><strong>30 sep · 08:00</strong></div><div><span>Quirófano</span><strong>Quirófano 1</strong></div><div><span>Servicio</span><strong>Cirugía General</strong></div><div><span>Cirujano</span><strong>Dr. Martín Pérez</strong></div></div>
    <Tabs items={tabs} active={tab} onChange={(x) => { setTab(x); if (x === "Evolución") navigate("/cirugias/1/evolucion"); if (x === "Epicrisis") navigate("/cirugias/1/epicrisis"); }} />
    {tab === "Resumen" && <div className="detail-grid"><Card><SectionTitle title="Información clínica" /><DetailRows rows={[["Diagnóstico", "Colelitiasis sintomática"], ["Procedimiento", "Colecistectomía laparoscópica"], ["Tipo de cirugía", "Con internación"], ["Riesgo quirúrgico", "ASA II"], ["Prioridad", "Alta"]]} /></Card><Card><SectionTitle title="Equipo quirúrgico" /><DetailRows rows={[["Cirujano principal", "Dr. Martín Pérez"], ["Ayudante", "Dra. Lucía Ruiz"], ["Anestesiólogo", "Dr. Pablo Romero"], ["Instrumentador", "Marcos Díaz"]]} /></Card></div>}
    {tab === "Prequirúrgicos" && <PreopStudies embedded />}
    {tab === "Programación" && <Card><SectionTitle title="Programación" /><DetailRows rows={[["Quirófano", "Quirófano 1"], ["Fecha", "30 de septiembre de 2025"], ["Horario", "08:00 – 10:00"], ["Duración estimada", "2 horas"], ["Estado", "Confirmada"]]} /></Card>}
    {tab === "Seguimiento ambulatorio" && <Ambulatory embedded />}
  </>;
}
