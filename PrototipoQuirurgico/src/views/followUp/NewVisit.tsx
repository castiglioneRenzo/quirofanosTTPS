import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Crumb } from "@/components/ui/Crumb";
import { FormCard } from "@/components/ui/FormCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { navigate } from "@/router/useLocation";

export function NewVisit() {
  return <><Crumb items={["Pacientes", "María González", "Nueva visita"]} /><PageHeader title="Nueva visita ambulatoria" subtitle="Registrá el control posterior al alta." /><FormCard title="Datos de la visita" number="01"><div className="form-grid"><Input label="Fecha" type="date" /><Select label="Médico"><option>Dr. Martín Pérez</option></Select><Textarea label="Comentario" placeholder="Evolución y hallazgos del control..." /><Textarea label="Tratamiento posible" placeholder="Indicaciones o cambios..." /><Input label="Próximo control" type="date" /></div></FormCard><div className="form-actions"><Button variant="secondary" onClick={() => navigate("/seguimiento/ambulatorio")}>Cancelar</Button><Button onClick={() => navigate("/seguimiento/ambulatorio")}>Registrar visita</Button></div></>;
}
