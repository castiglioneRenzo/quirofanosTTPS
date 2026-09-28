import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Crumb } from "@/components/ui/Crumb";
import { FormCard } from "@/components/ui/FormCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PageHeader } from "@/components/ui/PageHeader";
import { Timeline } from "@/components/common/Timeline";
import { navigate } from "@/router/useLocation";

export function Evolution() {
  const [form, setForm] = useState(false);
  return <><Crumb items={["Cirugías", "Colecistectomía", "Evolución"]} /><PageHeader title="Evolución postoperatoria" subtitle="María González · Habitación 302" actions={<><Button variant="secondary" onClick={() => navigate("/cirugias/1/alta")}>Registrar alta</Button><Button icon="plus" onClick={() => setForm(!form)}>Registrar evolución</Button></>} />
    {form && <FormCard title="Nueva evolución" number="HOY"><div className="form-grid"><Input label="Día" type="date" /><Input label="Habitación" value="302" /><Select label="Médico"><option>Dr. Martín Pérez</option></Select><Textarea label="Evolución" placeholder="Describa el estado y evolución del paciente..." /><Textarea label="Tratamiento postquirúrgico" placeholder="Indicaciones y tratamiento..." /><Textarea label="Tratamiento de base" placeholder="Medicación habitual..." /></div><div className="form-actions"><Button variant="secondary" onClick={() => setForm(false)}>Cancelar</Button><Button onClick={() => setForm(false)}>Guardar evolución</Button></div></FormCard>}
    <Card><SectionTitle title="Historial de evolución" subtitle="Registro clínico durante la internación" /><Timeline /></Card>
  </>;
}
