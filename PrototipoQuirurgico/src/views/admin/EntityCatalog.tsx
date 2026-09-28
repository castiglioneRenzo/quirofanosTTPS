import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Table } from "@/components/ui/Table";
import { Crumb } from "@/components/ui/Crumb";
import { PageHeader } from "@/components/ui/PageHeader";
import { Filters } from "@/components/common/Filters";

export function EntityCatalog({ entity }: { entity: string }) {
  const title = entity.replace(/-/g, " ").replace(/\b\w/g, (x) => x.toUpperCase());
  return <><Crumb items={["Administración", title]} /><PageHeader title={title} subtitle={`Administrá el catálogo de ${title.toLowerCase()} del sistema.`} actions={<Button icon="plus">Nuevo registro</Button>} /><Filters /><Card><Table headers={["Registro", "Descripción", "Estado", "Última actualización", "Acciones"]} rows={[
    [`${title} principal`, "Registro predeterminado del sistema", <Badge tone="success">Activo</Badge>, "28/09/2025", <Button variant="ghost">Editar</Button>],
    [`${title} secundario`, "Configuración para uso general", <Badge tone="success">Activo</Badge>, "15/09/2025", <Button variant="ghost">Editar</Button>],
    [`${title} histórico`, "Registro conservado como referencia", <Badge tone="neutral">Inactivo</Badge>, "02/08/2025", <Button variant="ghost">Editar</Button>],
  ]} /></Card></>;
}
