import { Icon, type IconName } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Table } from "@/components/ui/Table";
import { StatCard } from "@/components/ui/StatCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PageHeader } from "@/components/ui/PageHeader";
import { PatientLink } from "@/components/common/PatientLink";
import { Follow } from "@/components/common/Follow";
import { quickActions } from "@/data/navigation";
import { navigate } from "@/router/useLocation";

export function Dashboard() {
  return (
    <>
      <PageHeader eyebrow="LUNES, 30 DE SEPTIEMBRE" title="Buenos días, Dr. García" subtitle="Este es el resumen de la actividad quirúrgica de hoy." actions={<Button icon="plus" onClick={() => navigate("/cirugias/nueva")}>Programar cirugía</Button>} />
      <div className="stats-grid">
        <StatCard icon="calendar" value="8" label="Cirugías programadas" meta="2 pendientes de confirmar" />
        <StatCard icon="clock" value="24" label="En lista de espera" meta="5 con prioridad alta" tone="cyan" />
        <StatCard icon="bed" value="12" label="Pacientes internados" meta="3 altas previstas hoy" tone="green" />
        <StatCard icon="clipboard" value="7" label="Seguimientos pendientes" meta="Requieren atención" tone="amber" />
        <StatCard icon="activity" value="3 / 4" label="Quirófanos ocupados" meta="75% de ocupación" tone="purple" />
      </div>
      <SectionTitle title="Acciones rápidas" subtitle="Accesos directos a las tareas más frecuentes" />
      <div className="quick-grid">
        {quickActions.map(([icon, title, sub, path]) => <Card key={title} className="quick-card" ><div className="quick-click" onClick={() => navigate(path)} role="button" tabIndex={0}><span className="quick-icon"><Icon name={icon as IconName} /></span><div><strong>{title}</strong><small>{sub}</small></div><Icon name="arrow" size={16} /></div></Card>)}
      </div>
      <div className="dashboard-columns">
        <Card>
          <SectionTitle title="Próximas cirugías" subtitle="Cronograma de hoy" action={<Button variant="ghost" onClick={() => navigate("/quirofanos/cronograma")}>Ver cronograma <Icon name="arrow" size={15} /></Button>} />
          <Table headers={["Hora", "Paciente", "Procedimiento", "Quirófano", "Estado"]} rows={[
            ["08:00", <PatientLink name="María González" />, "Colecistectomía laparoscópica", "Q1", <Badge tone="success">Confirmada</Badge>],
            ["10:30", <PatientLink name="Carlos Fernández" />, "Artroscopia de rodilla", "Q2", <Badge tone="warning">En revisión</Badge>],
            ["12:00", <PatientLink name="Laura Rodríguez" />, "Histerectomía", "Q3", <Badge tone="info">Preparación</Badge>],
            ["15:30", <PatientLink name="Ana Martínez" />, "Hernioplastia inguinal", "Q1", <Badge tone="neutral">Pendiente</Badge>],
          ]} />
        </Card>
        <Card>
          <SectionTitle title="Seguimientos pendientes" action={<Button variant="ghost" onClick={() => navigate("/seguimiento/internados")}>Ver todos</Button>} />
          <div className="follow-list">
            <Follow initials="MG" name="María González" room="Hab. 302" time="Hace 18 h" tone="blue" />
            <Follow initials="JL" name="Jorge López" room="Hab. 218" time="Ayer, 14:30" tone="green" />
            <Follow initials="MS" name="Miguel Sánchez" room="Hab. 405" time="Ayer, 10:15" tone="purple" />
            <Follow initials="AR" name="Ana Ruiz" room="Hab. 310" time="Hace 24 h" tone="amber" />
          </div>
        </Card>
      </div>
    </>
  );
}
