import { Button } from "@/components/ui/Button";
import { Check } from "@/components/ui/Check";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Crumb } from "@/components/ui/Crumb";
import { FormCard } from "@/components/ui/FormCard";
import { PageHeader } from "@/components/ui/PageHeader";
import { permissions } from "@/data/admin";
import { navigate } from "@/router/useLocation";

export function NewUser() {
  return <><Crumb items={["Administración", "Usuarios", "Nuevo usuario"]} /><PageHeader title="Nuevo usuario" subtitle="Creá un perfil y asignale los permisos necesarios." /><FormCard title="Información personal" number="01"><div className="form-grid"><Input label="Apellido" /><Input label="Nombres" /><Input label="Email" type="email" /><Select label="Especialidad"><option>Cirugía General</option><option>Anestesiología</option></Select><Select label="Servicio"><option>Cirugía General</option></Select><Select label="Cargo"><option>R1</option><option>R2</option><option>R3</option><option>R4</option><option>Cirujano</option><option>Jefe</option><option>Administrativo</option></Select></div></FormCard><FormCard title="Roles y permisos" number="02"><div className="permissions">{permissions.map((p, i) => <Check label={p} checked={i % 2 === 0} key={p} />)}</div></FormCard><div className="form-actions"><Button variant="secondary" onClick={() => navigate("/administracion/usuarios")}>Cancelar</Button><Button onClick={() => navigate("/administracion/usuarios")}>Crear usuario</Button></div></>;
}
