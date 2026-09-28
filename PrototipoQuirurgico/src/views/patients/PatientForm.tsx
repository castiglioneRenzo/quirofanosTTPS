import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Crumb } from "@/components/ui/Crumb";
import { FormCard } from "@/components/ui/FormCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { navigate } from "@/router/useLocation";

export function PatientForm() {
  return <>
    <Crumb items={["Pacientes", "Nuevo paciente"]} />
    <PageHeader title="Nuevo paciente" subtitle="Completá los datos para registrar un paciente en el sistema." />
    <FormCard title="Datos personales" number="01"><div className="form-grid"><Input label="Apellido" placeholder="Ej. González" /><Input label="Nombres" placeholder="Ej. María Elena" /><Input label="DNI" placeholder="00.000.000" /><Select label="Género"><option>Seleccionar</option><option>Femenino</option><option>Masculino</option><option>Otro</option></Select><Input label="Fecha de nacimiento" type="date" /><Input label="Edad" value="42 años" /><Input label="Localidad" placeholder="Seleccionar localidad" /></div></FormCard>
    <FormCard title="Información de contacto" number="02"><div className="form-grid"><Input label="Teléfono" placeholder="+54 11 0000 0000" /><Input label="Email" placeholder="paciente@email.com" type="email" /><Input label="Contacto alternativo / familiar" placeholder="Nombre y teléfono" /></div></FormCard>
    <FormCard title="Cobertura médica" number="03"><div className="form-grid"><Select label="Obra social"><option>Seleccionar cobertura</option><option>OSDE</option><option>IOMA</option><option>PAMI</option></Select><Input label="Número de afiliado" placeholder="Número de credencial" /></div></FormCard>
    <FormCard title="Información médica inicial" number="04"><div className="form-grid"><Textarea label="Antecedentes patológicos" placeholder="Ingresar antecedentes relevantes..." /><Textarea label="Medicación habitual" placeholder="Ingresar medicación habitual..." /><Textarea label="Comentarios" placeholder="Observaciones adicionales..." /></div></FormCard>
    <div className="form-actions"><Button variant="secondary" onClick={() => navigate("/pacientes")}>Cancelar</Button><Button onClick={() => navigate("/pacientes/1")}>Guardar paciente</Button></div>
  </>;
}
