import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Crumb } from "@/components/ui/Crumb";
import { DetailRows } from "@/components/ui/DetailRows";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PageHeader } from "@/components/ui/PageHeader";
import { navigate } from "@/router/useLocation";

export function SurgeryWizard() {
  const [step, setStep] = useState(1);
  const labels = ["Paciente", "Procedimiento", "Prequirúrgicos", "Programación", "Confirmación"];
  return <><Crumb items={["Cirugías", "Nueva cirugía"]} /><PageHeader title="Programar nueva cirugía" subtitle="Completá los pasos para crear una nueva programación." /><div className="stepper">{labels.map((l, i) => <div className={`step ${step >= i + 1 ? "active" : ""}`} key={l}><span>{step > i + 1 ? <Icon name="check" size={15} /> : i + 1}</span><small>{l}</small></div>)}</div>
    <Card className="wizard-card">
      {step === 1 && <><SectionTitle title="Seleccionar paciente" subtitle="Buscá por nombre, apellido o DNI." /><div className="search-large"><Icon name="search" /><Input placeholder="Buscar paciente..." /></div><div className="selected-patient"><span className="patient-avatar blue">MG</span><div><strong>María González</strong><small>DNI 28.456.789 · 42 años · OSDE</small></div><Badge tone="success">Seleccionada</Badge></div></>}
      {step === 2 && <><SectionTitle title="Datos del procedimiento" /><div className="form-grid"><Input label="Procedimiento" value="Colecistectomía laparoscópica" /><Select label="Servicio"><option>Cirugía General</option></Select><Select label="Cirujano"><option>Dr. Martín Pérez</option></Select><Select label="Tipo de cirugía"><option>Con internación</option><option>Ambulatoria</option></Select></div></>}
      {step === 3 && <><SectionTitle title="Verificación prequirúrgica" /><div className="readiness compact"><div className="readiness-icon"><Icon name="check" /></div><div><div className="section-heading">Estudios completos</div><p>4 de 4 estudios requeridos fueron validados.</p></div><Button variant="secondary" onClick={() => navigate("/pacientes/1/prequirurgicos")}>Ver detalle</Button></div></>}
      {step === 4 && <><SectionTitle title="Fecha y quirófano" /><div className="form-grid"><Input label="Fecha" type="date" /><Select label="Quirófano"><option>Quirófano 1</option><option>Quirófano 2</option></Select><Select label="Horario"><option>08:00 – 10:00</option><option>12:00 – 14:00</option></Select></div></>}
      {step === 5 && <><SectionTitle title="Revisar y confirmar" /><div className="summary-box"><DetailRows rows={[["Paciente", "María González"], ["Procedimiento", "Colecistectomía laparoscópica"], ["Cirujano", "Dr. Martín Pérez"], ["Fecha", "30/09/2025 · 08:00"], ["Quirófano", "Quirófano 1"]]} /></div></>}
      <div className="wizard-actions"><Button variant="secondary" onClick={() => step === 1 ? navigate("/cirugias") : setStep(step - 1)}>{step === 1 ? "Cancelar" : "Volver"}</Button><Button onClick={() => step === 5 ? navigate("/cirugias/1") : setStep(step + 1)}>{step === 5 ? "Confirmar programación" : "Continuar"}</Button></div>
    </Card>
  </>;
}
