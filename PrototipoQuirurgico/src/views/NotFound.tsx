import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { navigate } from "@/router/useLocation";

export function NotFound() {
  return <Card className="empty-state"><span className="empty-icon"><Icon name="search" size={28} /></span><div className="page-title">No encontramos esta pantalla</div><p>La ruta solicitada no existe en el prototipo.</p><Button onClick={() => navigate("/dashboard")}>Volver al dashboard</Button></Card>;
}
