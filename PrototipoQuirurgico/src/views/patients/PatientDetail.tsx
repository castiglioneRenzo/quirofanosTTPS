import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Tabs } from "@/components/ui/Tabs";
import { Crumb } from "@/components/ui/Crumb";
import { DetailRows } from "@/components/ui/DetailRows";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Timeline } from "@/components/common/Timeline";
import { patientTabs } from "@/data/patients";
import { PreopStudies } from "./PreopStudies";
import { SurgeryHistory } from "./SurgeryHistory";
import { navigate } from "@/router/useLocation";

export function PatientDetail() {
  const [tab, setTab] = useState("Información personal");
  return <>
    <Crumb items={["Pacientes", "María González"]} />
    <Card className="patient-hero">
      <div className="patient-main"><span className="large-avatar">MG</span><div><div className="patient-name">María González</div><div className="patient-meta"><span>DNI 28.456.789</span><span>42 años</span><span>Femenino</span><span>OSDE 210</span></div></div><Badge tone="info">En preparación</Badge></div>
      <div className="header-actions"><Button variant="secondary">Editar paciente</Button><Button onClick={() => navigate("/cirugias/nueva")}>Programar cirugía</Button></div>
    </Card>
    <Tabs items={patientTabs} active={tab} onChange={setTab} />
    {tab === "Información personal" && <div className="detail-grid"><Card><SectionTitle title="Datos personales" /><DetailRows rows={[["Nombre completo", "María Elena González"], ["DNI", "28.456.789"], ["Fecha de nacimiento", "12 de marzo de 1983"], ["Género", "Femenino"], ["Localidad", "La Plata, Buenos Aires"]]} /></Card><Card><SectionTitle title="Contacto y cobertura" /><DetailRows rows={[["Teléfono", "+54 221 555-0184"], ["Email", "maria.gonzalez@email.com"], ["Contacto familiar", "Pablo González · +54 221 555-0162"], ["Obra social", "OSDE 210"], ["N.º afiliado", "28-456789-01"]]} /></Card></div>}
    {tab === "Antecedentes" && <div className="detail-grid"><Card><SectionTitle title="Antecedentes patológicos" /><p>Hipertensión arterial controlada. Sin antecedentes quirúrgicos de relevancia.</p></Card><Card><SectionTitle title="Medicación y alergias" /><DetailRows rows={[["Medicación habitual", "Losartán 50 mg / día"], ["Alergias", "Niega alergias conocidas"], ["Tabaquismo", "No"]]} /></Card></div>}
    {tab === "Cirugías" && <SurgeryHistory embedded />}
    {tab === "Estudios" && <PreopStudies embedded />}
    {tab === "Seguimiento" && <Card><SectionTitle title="Historial de seguimiento" /><Timeline compact /></Card>}
    <Card className="active-surgery"><div><span className="eyebrow">ATENCIÓN QUIRÚRGICA ACTIVA</span><div className="section-heading">Colecistectomía laparoscópica</div><p>Colelitiasis sintomática · Cirugía General</p></div><div className="active-status"><Badge tone="success">Prequirúrgicos completos</Badge><Button onClick={() => navigate("/cirugias/1")}>Ver cirugía <Icon name="arrow" size={15} /></Button></div></Card>
  </>;
}
