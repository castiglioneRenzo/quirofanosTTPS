import { Icon } from "@/components/ui/Icon";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

export function Filters({ wait = false }: { wait?: boolean }) {
  return <Card className="filters"><div className="filter-search"><Icon name="search" /><Input placeholder="Buscar por nombre, apellido o DNI" /></div><Select><option>Todos los servicios</option><option>Cirugía General</option></Select><Select><option>{wait ? "Todas las prioridades" : "Todos los estados"}</option><option>Alta</option><option>Media</option></Select><Select><option>{wait ? "Prequirúrgicos" : "Obra social"}</option><option>Completos</option><option>Pendientes</option></Select><Button variant="secondary">Más filtros</Button></Card>;
}
