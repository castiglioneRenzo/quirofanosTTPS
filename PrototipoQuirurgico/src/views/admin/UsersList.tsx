import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Table } from "@/components/ui/Table";
import { Crumb } from "@/components/ui/Crumb";
import { PageHeader } from "@/components/ui/PageHeader";
import { Filters } from "@/components/common/Filters";
import { navigate } from "@/router/useLocation";

export function UsersList() {
  return <><Crumb items={["Administración", "Usuarios"]} /><PageHeader title="Usuarios" subtitle="Administrá el equipo, sus roles y permisos." actions={<Button icon="plus" onClick={() => navigate("/administracion/usuarios/nuevo")}>Nuevo usuario</Button>} /><Filters /><Card><Table headers={["Apellido", "Nombre", "Email", "Especialidad", "Servicio", "Cargo", "Estado", "Acciones"]} rows={[
    ["Pérez", "Martín", "martin.perez@hospital.ar", "Cirugía General", "Cirugía General", "Cirujano", <Badge tone="success">Activo</Badge>, <Button variant="ghost">Ver · Editar · Permisos</Button>],
    ["Ruiz", "Lucía", "lucia.ruiz@hospital.ar", "Cirugía General", "Cirugía General", "R4", <Badge tone="success">Activo</Badge>, <Button variant="ghost">Ver · Editar · Permisos</Button>],
    ["Romero", "Pablo", "pablo.romero@hospital.ar", "Anestesiología", "Anestesia", "Jefe", <Badge tone="success">Activo</Badge>, <Button variant="ghost">Ver · Editar · Permisos</Button>],
  ]} /></Card></>;
}
