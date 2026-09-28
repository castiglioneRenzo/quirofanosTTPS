import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Crumb } from "@/components/ui/Crumb";
import { FormCard } from "@/components/ui/FormCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { navigate } from "@/router/useLocation";

export function Discharge() {
  return <><Crumb items={["Cirugías", "Colecistectomía", "Alta médica"]} /><PageHeader title="Alta médica" subtitle="María González · Colecistectomía laparoscópica" /><FormCard title="Datos del alta" number="01"><div className="form-grid"><Input label="Fecha de alta" type="date" /><Select label="Médico que otorga el alta"><option>Dr. Martín Pérez</option></Select></div></FormCard><FormCard title="Epicrisis" number="02"><div className="ai-panel"><span className="ai-icon"><Icon name="sparkles" /></span><div><strong>Generar epicrisis con IA</strong><p>Creá un borrador a partir del diagnóstico, procedimiento y evoluciones registradas.</p></div><Button icon="sparkles" onClick={() => navigate("/cirugias/1/epicrisis")}>Generar borrador</Button></div><Textarea label="Epicrisis" placeholder="Ingresá o generá el resumen de alta..." /></FormCard><FormCard title="Indicaciones al alta" number="03"><div className="form-grid"><Textarea label="Medicación" /><Textarea label="Cuidados" /><Textarea label="Controles" /><Textarea label="Signos de alarma" /><Textarea label="Recomendaciones" /></div></FormCard><div className="form-actions"><Button variant="secondary">Guardar borrador</Button><Button onClick={() => navigate("/seguimiento/ambulatorio")}>Finalizar alta</Button></div></>;
}
