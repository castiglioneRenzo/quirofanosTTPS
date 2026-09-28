import { Icon, type IconName } from "@/components/ui/Icon";
import { Card } from "@/components/ui/Card";
import { Crumb } from "@/components/ui/Crumb";
import { PageHeader } from "@/components/ui/PageHeader";
import { adminOptions } from "@/data/admin";
import { navigate } from "@/router/useLocation";

export function AdminHome() {
  return <><Crumb items={["Administración"]} /><PageHeader title="Administración" subtitle="Configuración de usuarios y entidades básicas del sistema." /><div className="admin-grid">{adminOptions.map(([title, sub, path, icon]) => <Card className="admin-option" key={title}><div onClick={() => navigate(path)} role="button" tabIndex={0}><span className="quick-icon"><Icon name={icon as IconName} /></span><div><div className="section-heading">{title}</div><p>{sub}</p></div><Icon name="arrow" /></div></Card>)}</div></>;
}
