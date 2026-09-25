import React, { useEffect, useState } from "react";

type IconName =
  | "grid"
  | "users"
  | "activity"
  | "calendar"
  | "heart"
  | "search"
  | "settings"
  | "bell"
  | "plus"
  | "arrow"
  | "chevron"
  | "menu"
  | "clock"
  | "bed"
  | "clipboard"
  | "sparkles"
  | "close"
  | "check"
  | "user";

const iconPaths: Record<IconName, React.ReactNode> = {
  grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  activity: <><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></>,
  calendar: <><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>,
  heart: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21H9.6v-.09A1.7 1.7 0 0 0 8.5 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.5-1H3v-4h.09A1.7 1.7 0 0 0 4.6 8.5a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.5V3h4v.09A1.7 1.7 0 0 0 15.5 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.18.64.76 1.05 1.42 1.05H21v4h-.09A1.7 1.7 0 0 0 19.4 15Z" /></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M13.7 21h-3.4" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  arrow: <><path d="m9 18 6-6-6-6" /></>,
  chevron: <><path d="m6 9 6 6 6-6" /></>,
  menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  bed: <><path d="M3 19v-8M21 19v-6a2 2 0 0 0-2-2H9v6M3 15h18M7 11V7H3v8" /></>,
  clipboard: <><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V2h6v2M9 10h6M9 14h6M9 18h4" /></>,
  sparkles: <><path d="m12 3 1.4 4.1L17.5 8l-4.1 1.4L12 13.5l-1.4-4.1L6.5 8l4.1-1.4L12 3ZM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14ZM5 13l.7 1.8 1.8.7-1.8.7L5 18l-.7-1.8-1.8-.7 1.8-.7L5 13Z" /></>,
  close: <><path d="M6 6l12 12M18 6 6 18" /></>,
  check: <><path d="m5 12 4 4L19 6" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
};

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {iconPaths[name]}
    </svg>
  );
}

function Button({ children, variant = "primary", icon, onClick, className = "", type = "button" }: {
  children: React.ReactNode; variant?: "primary" | "secondary" | "ghost" | "soft"; icon?: IconName; onClick?: () => void; className?: string; type?: "button" | "submit";
}) {
  return React.createElement("button", { className: `btn btn-${variant} ${className}`, onClick, type }, icon && <Icon name={icon} />, <span>{children}</span>);
}

function Input({ placeholder, label, type = "text", value, onChange }: { placeholder?: string; label?: string; type?: string; value?: string; onChange?: (v: string) => void }) {
  return (
    <label className="field">
      {label && <span className="field-label">{label}</span>}
      {React.createElement("input", { className: "input", placeholder, type, value, onChange: (e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value) })}
    </label>
  );
}

function Select({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <label className="field">
      {label && <span className="field-label">{label}</span>}
      {React.createElement("select", { className: "input select" }, children)}
    </label>
  );
}

function Textarea({ label, placeholder }: { label: string; placeholder?: string }) {
  return <label className="field"><span className="field-label">{label}</span>{React.createElement("textarea", { className: "input textarea", placeholder })}</label>;
}

function Check({ label, checked = false }: { label: string; checked?: boolean }) {
  return <label className="check">{React.createElement("input", { type: "checkbox", defaultChecked: checked })}<span>{label}</span></label>;
}

function navigate(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Badge({ children, tone = "info" }: { children: React.ReactNode; tone?: "info" | "success" | "warning" | "danger" | "neutral" }) {
  return <span className={`badge badge-${tone}`}><span className="badge-dot" />{children}</span>;
}

const patients = [
  { name: "María González", dni: "28.456.789", age: "42", insurance: "OSDE", service: "Cirugía General", diagnosis: "Colelitiasis sintomática", priority: "Alta", status: "En preparación" },
  { name: "Carlos Fernández", dni: "31.284.651", age: "37", insurance: "Swiss Medical", service: "Traumatología", diagnosis: "Hernia discal lumbar", priority: "Media", status: "En espera" },
  { name: "Laura Rodríguez", dni: "24.981.230", age: "51", insurance: "IOMA", service: "Ginecología", diagnosis: "Miomatosis uterina", priority: "Media", status: "Programada" },
  { name: "Miguel Sánchez", dni: "36.742.098", age: "30", insurance: "PAMI", service: "Urología", diagnosis: "Litiasis renal", priority: "Baja", status: "Estudios pendientes" },
  { name: "Ana Martínez", dni: "29.106.422", age: "44", insurance: "Galeno", service: "Cirugía General", diagnosis: "Hernia inguinal", priority: "Alta", status: "Validada" },
];

const navItems: { label: string; icon: IconName; path: string }[] = [
  { label: "Dashboard", icon: "grid", path: "/dashboard" },
  { label: "Pacientes", icon: "users", path: "/pacientes" },
  { label: "Cirugías", icon: "activity", path: "/cirugias" },
  { label: "Quirófanos", icon: "calendar", path: "/quirofanos" },
  { label: "Seguimiento", icon: "heart", path: "/seguimiento/internados" },
  { label: "Consultas", icon: "search", path: "/consultas" },
  { label: "Administración", icon: "settings", path: "/administracion" },
];

function Logo({ compact = false }: { compact?: boolean }) {
  return <div className="logo" onClick={() => navigate("/dashboard")} role="button" tabIndex={0}><span className="logo-mark"><Icon name="activity" size={22} /></span>{!compact && <span><strong>Quiró</strong><small>Gestión quirúrgica</small></span>}</div>;
}

function Sidebar({ open, close }: { open: boolean; close: () => void }) {
  const path = window.location.pathname;
  return (
    <>
      {open && <div className="sidebar-overlay" onClick={close} />}
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <Logo />
        <nav className="nav">
          <span className="nav-label">MENÚ PRINCIPAL</span>
          {navItems.map((item) => (
            <div key={item.path} className={`nav-item ${path.startsWith(item.path.split("/").slice(0, 2).join("/")) ? "active" : ""}`} onClick={() => { navigate(item.path); close(); }} role="button" tabIndex={0}>
              <Icon name={item.icon} /><span>{item.label}</span>{item.label === "Pacientes" && <span className="nav-count">24</span>}
            </div>
          ))}
        </nav>
        <div className="sidebar-help">
          <span className="help-icon">?</span>
          <div><strong>¿Necesitás ayuda?</strong><small>Centro de soporte</small></div>
          <Icon name="arrow" size={16} />
        </div>
        <div className="hospital"><span className="hospital-logo">HS</span><div><strong>Hospital San Martín</strong><small>Red asistencial</small></div></div>
      </aside>
    </>
  );
}

function Topbar({ menu }: { menu: () => void }) {
  const [notifications, setNotifications] = useState(false);
  const [profile, setProfile] = useState(false);
  return (
    <header className="topbar">
      <Button variant="ghost" icon="menu" onClick={menu} className="mobile-menu">Menú</Button>
      <div className="top-search"><Icon name="search" /><Input placeholder="Buscar paciente, DNI, cirugía..." /><kbd>⌘ K</kbd></div>
      <div className="top-actions">
        <div className="icon-button" onClick={() => setNotifications(!notifications)} role="button" tabIndex={0}><Icon name="bell" /><span className="notification-dot" /></div>
        <div className="user-menu" onClick={() => setProfile(!profile)} role="button" tabIndex={0}>
          <span className="avatar">MG</span><div><strong>Dr. Martín García</strong><small>Cirugía General</small></div><Icon name="chevron" size={15} />
        </div>
      </div>
      {notifications && <div className="popover notifications"><div className="popover-title">Notificaciones <Badge tone="info">3 nuevas</Badge></div><Notice time="Hace 8 min" text="Estudios validados — María González" /><Notice time="Hace 25 min" text="Cambio de horario — Quirófano 2" /><Notice time="Hoy, 08:15" text="Evolución pendiente — Hab. 302" /></div>}
      {profile && <div className="popover profile-pop"><div className="profile-summary"><span className="avatar">MG</span><div><strong>Dr. Martín García</strong><small>martin.garcia@hospital.ar</small></div></div><div className="popover-link">Mi perfil</div><div className="popover-link">Preferencias</div><div className="popover-link" onClick={() => navigate("/login")}>Cerrar sesión</div></div>}
    </header>
  );
}

function Notice({ time, text }: { time: string; text: string }) {
  return <div className="notice"><span className="notice-mark" /><div><strong>{text}</strong><small>{time}</small></div></div>;
}

function Shell({ children }: { children: React.ReactNode }) {
  const [menu, setMenu] = useState(false);
  return <div className="app"><Sidebar open={menu} close={() => setMenu(false)} /><div className="main"><Topbar menu={() => setMenu(true)} /><main className="content">{children}</main></div></div>;
}

function Crumb({ items }: { items: string[] }) {
  return <div className="breadcrumbs"><span onClick={() => navigate("/dashboard")}>Inicio</span>{items.map((item, i) => <React.Fragment key={item}><Icon name="arrow" size={13} /><span className={i === items.length - 1 ? "current" : ""}>{item}</span></React.Fragment>)}</div>;
}

function PageHeader({ title, subtitle, actions, eyebrow }: { title: string; subtitle?: string; actions?: React.ReactNode; eyebrow?: string }) {
  return <div className="page-header"><div>{eyebrow && <span className="eyebrow">{eyebrow}</span>}<div className="page-title">{title}</div>{subtitle && <p>{subtitle}</p>}</div>{actions && <div className="header-actions">{actions}</div>}</div>;
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`card ${className}`}>{children}</section>;
}

function SectionTitle({ title, subtitle, action }: { title: string; subtitle?: string; action?: React.ReactNode }) {
  return <div className="section-title"><div><div className="section-heading">{title}</div>{subtitle && <p>{subtitle}</p>}</div>{action}</div>;
}

function StatCard({ icon, value, label, meta, tone = "blue" }: { icon: IconName; value: string; label: string; meta: string; tone?: string }) {
  return <Card className="stat-card"><div className={`stat-icon ${tone}`}><Icon name={icon} /></div><div className="stat-body"><span>{label}</span><strong>{value}</strong><small>{meta}</small></div></Card>;
}

function Table({ headers, rows }: { headers: string[]; rows: React.ReactNode[][] }) {
  return <div className="table-wrap"><table><thead><tr>{headers.map((h) => <th key={h}>{h}</th>)}</tr></thead><tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody></table></div>;
}

function Dashboard() {
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
        {[
          ["plus", "Nuevo paciente", "Registrar datos personales", "/pacientes/nuevo"],
          ["search", "Buscar paciente", "Consultar ficha e historia", "/pacientes"],
          ["activity", "Lista de espera", "24 pacientes pendientes", "/pacientes/lista-espera"],
          ["calendar", "Reservar quirófano", "Consultar disponibilidad", "/quirofanos/reservar"],
          ["clipboard", "Registrar evolución", "Pacientes internados", "/seguimiento/internados"],
          ["clock", "Ver cronograma", "Agenda quirúrgica semanal", "/quirofanos/cronograma"],
        ].map(([icon, title, sub, path]) => <Card key={title} className="quick-card" ><div className="quick-click" onClick={() => navigate(path)} role="button" tabIndex={0}><span className="quick-icon"><Icon name={icon as IconName} /></span><div><strong>{title}</strong><small>{sub}</small></div><Icon name="arrow" size={16} /></div></Card>)}
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

function PatientLink({ name = "María González" }: { name?: string }) {
  return <span className="link" onClick={() => navigate("/pacientes/1")}>{name}</span>;
}

function Follow({ initials, name, room, time, tone }: { initials: string; name: string; room: string; time: string; tone: string }) {
  return <div className="follow"><span className={`patient-avatar ${tone}`}>{initials}</span><div><strong>{name}</strong><small>{room} · Última evolución {time}</small></div><Button variant="soft" onClick={() => navigate("/cirugias/1/evolucion")}>Evolucionar</Button></div>;
}

function Filters({ wait = false }: { wait?: boolean }) {
  return <Card className="filters"><div className="filter-search"><Icon name="search" /><Input placeholder="Buscar por nombre, apellido o DNI" /></div><Select><option>Todos los servicios</option><option>Cirugía General</option></Select><Select><option>{wait ? "Todas las prioridades" : "Todos los estados"}</option><option>Alta</option><option>Media</option></Select><Select><option>{wait ? "Prequirúrgicos" : "Obra social"}</option><option>Completos</option><option>Pendientes</option></Select><Button variant="secondary">Más filtros</Button></Card>;
}

function PatientsPage({ waiting = false }: { waiting?: boolean }) {
  const tableRows = patients.map((p, i) => waiting ? [
    i === 0 ? "18/09/2025" : `${20 + i}/09/2025`, <PatientLink name={p.name} />, p.diagnosis, i === 0 ? "Colecistectomía laparoscópica" : ["Artroscopia", "Histerectomía", "Ureteroscopía", "Hernioplastia"][i - 1], p.service, i % 2 ? "Dra. Lucía Ruiz" : "Dr. Martín Pérez", <Badge tone={p.priority === "Alta" ? "danger" : "warning"}>{p.priority}</Badge>, <Badge tone={i === 0 || i === 4 ? "success" : "warning"}>{i === 0 || i === 4 ? "Completos" : "Pendientes"}</Badge>, <Badge tone="info">{p.status}</Badge>
  ] : [
    <PatientLink name={p.name} />, p.dni, `${p.age} años`, p.insurance, p.service, p.diagnosis, <Badge tone={p.priority === "Alta" ? "danger" : p.priority === "Media" ? "warning" : "neutral"}>{p.priority}</Badge>, <Badge tone="info">{p.status}</Badge>, <Button variant="ghost" onClick={() => navigate("/pacientes/1")}>Ver detalle <Icon name="arrow" size={14} /></Button>
  ]);
  return <>
    <Crumb items={waiting ? ["Pacientes", "Lista de espera"] : ["Pacientes"]} />
    <PageHeader title={waiting ? "Lista de espera quirúrgica" : "Pacientes"} subtitle={waiting ? "Pacientes pendientes de programación y estado de preparación." : "Administrá pacientes y consultá su información clínica."} actions={<><Button variant="secondary" icon="search">Buscar</Button><Button icon="plus" onClick={() => navigate(waiting ? "/cirugias/nueva" : "/pacientes/nuevo")}>{waiting ? "Agregar a lista" : "Nuevo paciente"}</Button></>} />
    <Filters wait={waiting} />
    <Card><div className="results-bar"><span><strong>{waiting ? "24" : "128"} pacientes</strong> encontrados</span><span>Ordenar por: <strong>{waiting ? "Prioridad" : "Apellido"}</strong></span></div><Table headers={waiting ? ["Registro", "Paciente", "Diagnóstico", "Cirugía", "Servicio", "Cirujano", "Prioridad", "Prequirúrgicos", "Estado"] : ["Paciente", "DNI", "Edad", "Obra social", "Servicio", "Diagnóstico", "Prioridad", "Estado", ""]} rows={tableRows} /><Pagination /></Card>
  </>;
}

function Pagination() {
  return <div className="pagination"><span>Mostrando 1–5 de 128</span><div><Button variant="secondary">Anterior</Button><span className="page active">1</span><span className="page">2</span><span className="page">3</span><Button variant="secondary">Siguiente</Button></div></div>;
}

function PatientForm() {
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

function FormCard({ title, number, children }: { title: string; number: string; children: React.ReactNode }) {
  return <Card className="form-card"><SectionTitle title={title} action={<span className="section-number">{number}</span>} />{children}</Card>;
}

const patientTabs = ["Información personal", "Antecedentes", "Cirugías", "Estudios", "Seguimiento"];
function PatientDetail() {
  const [tab, setTab] = useState("Información personal");
  return <>
    <Crumb items={["Pacientes", "María González"]} />
    <Card className="patient-hero">
      <div className="patient-main"><span className="large-avatar">MG</span><div><div className="patient-name">María González</div><div className="patient-meta"><span>DNI 28.456.789</span><span>42 años</span><span>Femenino</span><span>OSDE 210</span></div></div><Badge tone="info">En preparación</Badge></div>
      <div className="header-actions"><Button variant="secondary">Editar paciente</Button><Button variant="secondary" onClick={() => navigate("/cirugias/nueva")}>Nueva cirugía</Button><Button onClick={() => navigate("/cirugias/nueva")}>Programar cirugía</Button></div>
    </Card>
    <Tabs items={patientTabs} active={tab} onChange={setTab} />
    {tab === "Información personal" && <div className="detail-grid"><Card><SectionTitle title="Datos personales" /><DetailRows rows={[["Nombre completo", "María Elena González"], ["DNI", "28.456.789"], ["Fecha de nacimiento", "12 de marzo de 1983"], ["Género", "Femenino"], ["Localidad", "La Plata, Buenos Aires"]]} /></Card><Card><SectionTitle title="Contacto y cobertura" /><DetailRows rows={[["Teléfono", "+54 221 555-0184"], ["Email", "maria.gonzalez@email.com"], ["Contacto familiar", "Pablo González · +54 221 555-0162"], ["Obra social", "OSDE 210"], ["N.º afiliado", "28-456789-01"]]} /></Card></div>}
    {tab === "Antecedentes" && <div className="detail-grid"><Card><SectionTitle title="Antecedentes patológicos" /><p>Hipertensión arterial controlada. Sin antecedentes quirúrgicos de relevancia.</p></Card><Card><SectionTitle title="Medicación y alergias" /><DetailRows rows={[["Medicación habitual", "Losartán 50 mg / día"], ["Alergias", "Niega alergias conocidas"], ["Tabaquismo", "No"]]} /></Card></div>}
    {tab === "Cirugías" && <SurgeryHistory embedded />}
    {tab === "Estudios" && <Preop embedded />}
    {tab === "Seguimiento" && <Card><SectionTitle title="Historial de seguimiento" /><Timeline compact /></Card>}
    <Card className="active-surgery"><div><span className="eyebrow">ATENCIÓN QUIRÚRGICA ACTIVA</span><div className="section-heading">Colecistectomía laparoscópica</div><p>Colelitiasis sintomática · Cirugía General</p></div><div className="active-status"><Badge tone="success">Prequirúrgicos completos</Badge><Button onClick={() => navigate("/cirugias/1")}>Ver cirugía <Icon name="arrow" size={15} /></Button></div></Card>
  </>;
}

function Tabs({ items, active, onChange }: { items: string[]; active: string; onChange: (x: string) => void }) {
  return <div className="tabs">{items.map((item) => <div key={item} className={`tab ${active === item ? "active" : ""}`} onClick={() => onChange(item)} role="button" tabIndex={0}>{item}</div>)}</div>;
}

function DetailRows({ rows }: { rows: string[][] }) {
  return <div className="detail-rows">{rows.map(([label, value]) => <div className="detail-row" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>;
}

function Preop({ embedded = false }: { embedded?: boolean }) {
  const content = <>
    {!embedded && <><Crumb items={["Pacientes", "María González", "Prequirúrgicos"]} /><PageHeader title="Estudios prequirúrgicos" subtitle="María González · Colecistectomía laparoscópica" actions={<Button onClick={() => navigate("/cirugias/nueva")}>Programar cirugía</Button>} /></>}
    <Card className="readiness"><div className="readiness-icon"><Icon name="check" /></div><div><span className="eyebrow">PREPARACIÓN COMPLETA</span><div className="section-heading">Paciente listo para programación</div><p>Todos los estudios requeridos fueron realizados y validados.</p></div><strong>4 de 4</strong></Card>
    <Card><SectionTitle title="Estudios requeridos" subtitle="Última actualización: hoy, 09:20" /><Table headers={["Estudio", "Estado", "Fecha", "Resultado", "Validado por"]} rows={[
      ["Laboratorio completo", <Badge tone="success">Validado</Badge>, "26/09/2025", "Sin hallazgos relevantes", "Dra. Fernández"],
      ["Electrocardiograma", <Badge tone="success">Validado</Badge>, "27/09/2025", "Ritmo sinusal normal", "Dr. Molina"],
      ["Radiografía de tórax", <Badge tone="success">Validado</Badge>, "27/09/2025", "Sin particularidades", "Dra. Silva"],
      ["Evaluación anestésica", <Badge tone="success">Validado</Badge>, "29/09/2025", "ASA II", "Dr. Romero"],
    ]} /></Card>
  </>;
  return content;
}

function SurgeryHistory({ embedded = false }: { embedded?: boolean }) {
  return <>
    {!embedded && <><Crumb items={["Pacientes", "María González", "Historia quirúrgica"]} /><PageHeader title="Historia quirúrgica" subtitle="Atenciones y procedimientos de María González" /></>}
    <div className="surgery-list">
      <Card className="surgery-item"><span className="surgery-date">30<span>SEP<br />2025</span></span><div className="surgery-info"><div><Badge tone="info">Programada</Badge><Badge tone="neutral">Internación</Badge></div><div className="section-heading">Colecistectomía laparoscópica</div><p>Colelitiasis sintomática</p><small>Cirugía General · Dr. Martín Pérez · Quirófano 1</small></div><Button variant="secondary" onClick={() => navigate("/cirugias/1")}>Ver detalle <Icon name="arrow" size={14} /></Button></Card>
      <Card className="surgery-item"><span className="surgery-date muted">12<span>JUN<br />2019</span></span><div className="surgery-info"><div><Badge tone="success">Realizada</Badge><Badge tone="neutral">Ambulatoria</Badge></div><div className="section-heading">Resección de lesión cutánea</div><p>Nevus melanocítico benigno</p><small>Dermatología · Dra. Sofía Costa</small></div><Button variant="secondary">Ver detalle <Icon name="arrow" size={14} /></Button></Card>
    </div>
  </>;
}

function SurgeriesPage() {
  return <><Crumb items={["Cirugías"]} /><PageHeader title="Cirugías" subtitle="Consultá y gestioná las atenciones quirúrgicas." actions={<Button icon="plus" onClick={() => navigate("/cirugias/nueva")}>Nueva cirugía</Button>} /><Filters /><Card><SectionTitle title="Cirugías programadas" /><Table headers={["Fecha", "Paciente", "Procedimiento", "Servicio", "Cirujano", "Quirófano", "Estado", ""]} rows={patients.slice(0, 4).map((p, i) => [`${30 + i}/09 · ${8 + i * 2}:00`, <PatientLink name={p.name} />, ["Colecistectomía laparoscópica", "Artroscopia", "Histerectomía", "Ureteroscopía"][i], p.service, i % 2 ? "Dra. Lucía Ruiz" : "Dr. Martín Pérez", `Q${i + 1}`, <Badge tone={i === 0 ? "success" : "info"}>{i === 0 ? "Confirmada" : "Programada"}</Badge>, <Button variant="ghost" onClick={() => navigate("/cirugias/1")}>Ver detalle</Button>])} /></Card></>;
}

function SurgeryDetail() {
  const [tab, setTab] = useState("Resumen");
  const tabs = ["Resumen", "Prequirúrgicos", "Programación", "Evolución", "Epicrisis", "Seguimiento ambulatorio"];
  return <>
    <Crumb items={["Cirugías", "Colecistectomía laparoscópica"]} />
    <div className="surgery-header"><div><Badge tone="success">Confirmada</Badge><PageHeader title="Colecistectomía laparoscópica" subtitle="María González · DNI 28.456.789" /></div><div className="header-actions"><Button variant="secondary" onClick={() => navigate("/cirugias/1/evolucion")}>Ver evolución</Button><Button onClick={() => navigate("/cirugias/1/alta")}>Registrar alta</Button></div></div>
    <div className="mini-stats"><div><span>Fecha y hora</span><strong>30 sep · 08:00</strong></div><div><span>Quirófano</span><strong>Quirófano 1</strong></div><div><span>Servicio</span><strong>Cirugía General</strong></div><div><span>Cirujano</span><strong>Dr. Martín Pérez</strong></div></div>
    <Tabs items={tabs} active={tab} onChange={(x) => { setTab(x); if (x === "Evolución") navigate("/cirugias/1/evolucion"); if (x === "Epicrisis") navigate("/cirugias/1/epicrisis"); }} />
    {tab === "Resumen" && <div className="detail-grid"><Card><SectionTitle title="Información clínica" /><DetailRows rows={[["Diagnóstico", "Colelitiasis sintomática"], ["Procedimiento", "Colecistectomía laparoscópica"], ["Tipo de cirugía", "Con internación"], ["Riesgo quirúrgico", "ASA II"], ["Prioridad", "Alta"]]} /></Card><Card><SectionTitle title="Equipo quirúrgico" /><DetailRows rows={[["Cirujano principal", "Dr. Martín Pérez"], ["Ayudante", "Dra. Lucía Ruiz"], ["Anestesiólogo", "Dr. Pablo Romero"], ["Instrumentador", "Marcos Díaz"]]} /></Card></div>}
    {tab === "Prequirúrgicos" && <Preop embedded />}
    {tab === "Programación" && <Card><SectionTitle title="Programación" /><DetailRows rows={[["Quirófano", "Quirófano 1"], ["Fecha", "30 de septiembre de 2025"], ["Horario", "08:00 – 10:00"], ["Duración estimada", "2 horas"], ["Estado", "Confirmada"]]} /></Card>}
    {tab === "Seguimiento ambulatorio" && <Ambulatory embedded />}
  </>;
}

function Wizard() {
  const [step, setStep] = useState(1);
  const labels = ["Paciente", "Procedimiento", "Prequirúrgicos", "Programación", "Confirmación"];
  return <><Crumb items={["Cirugías", "Nueva cirugía"]} /><PageHeader title="Programar nueva cirugía" subtitle="Completá los pasos para crear una nueva programación." /><div className="stepper">{labels.map((l, i) => <div className={`step ${step >= i + 1 ? "active" : ""}`} key={l}><span>{step > i + 1 ? <Icon name="check" size={15} /> : i + 1}</span><small>{l}</small></div>)}</div>
    <Card className="wizard-card">
      {step === 1 && <><SectionTitle title="Seleccionar paciente" subtitle="Buscá por nombre, apellido o DNI." /><div className="search-large"><Icon name="search" /><Input placeholder="Buscar paciente..." /></div><div className="selected-patient"><span className="patient-avatar blue">MG</span><div><strong>María González</strong><small>DNI 28.456.789 · 42 años · OSDE</small></div><Badge tone="success">Seleccionada</Badge></div></>}
      {step === 2 && <><SectionTitle title="Datos del procedimiento" /><div className="form-grid"><Input label="Procedimiento" value="Colecistectomía laparoscópica" /><Select label="Servicio"><option>Cirugía General</option></Select><Select label="Cirujano"><option>Dr. Martín Pérez</option></Select><Select label="Tipo de cirugía"><option>Con internación</option><option>Ambulatoria</option></Select></div></>}
      {step === 3 && <><SectionTitle title="Verificación prequirúrgica" /><div className="readiness compact"><div className="readiness-icon"><Icon name="check" /></div><div><div className="section-heading">Estudios completos</div><p>4 de 4 estudios requeridos fueron validados.</p></div><Button variant="secondary" onClick={() => navigate("/pacientes/1/prequirurgicos")}>Ver detalle</Button></div></>}
      {step === 4 && <><SectionTitle title="Fecha y quirófano" /><div className="form-grid"><Input label="Fecha" type="date" /><Select label="Quirófano"><option>Quirófano 1</option><option>Quirófano 2</option></Select><Select label="Horario"><option>08:00 – 10:00</option><option>12:00 – 14:00</option></Select></div></>}
      {step === 5 && <><SectionTitle title="Revisar y confirmar" /><div className="summary-box"><DetailRows rows={[["Paciente", "María González"], ["Procedimiento", "Colecistectomía laparoscópica"], ["Cirujano", "Dr. Martín Pérez"], ["Fecha", "30/09/2025 · 08:00"], ["Quirófano", "Quirófano 1"]]} /></div></>}
      <div className="wizard-actions"><Button variant="secondary" onClick={() => step === 1 ? navigate("/cirugias") : setStep(step - 1)}>{step === 1 ? "Cancelar" : "Volver"}</Button><Button onClick={() => step === 5 ? navigate("/cirugias/1") : setStep(step + 1)}>{step === 5 ? "Confirmar programación" : "Continuar"}</Button></div>
    </Card>
  </>;
}

function OperatingRooms() {
  const rooms = [
    ["Quirófano 1", "Cirugía general", "Ocupado", "María González · 08:00–10:00", "Cirugía General"],
    ["Quirófano 2", "Traumatología", "Disponible", "Carlos Fernández · 10:30", "Traumatología"],
    ["Quirófano 3", "Multidisciplinario", "Ocupado", "Laura Rodríguez · 12:00", "Ginecología"],
    ["Quirófano 4", "Cirugía ambulatoria", "Limpieza", "Disponible desde 11:30", "Uso compartido"],
  ];
  return <><Crumb items={["Quirófanos"]} /><PageHeader title="Quirófanos" subtitle="Estado actual y próxima actividad de las salas." actions={<><Button variant="secondary" onClick={() => navigate("/quirofanos/cronograma")}>Ver cronograma</Button><Button icon="plus" onClick={() => navigate("/quirofanos/reservar")}>Nueva reserva</Button></>} /><div className="room-grid">{rooms.map((r, i) => <Card className="room-card" key={r[0]}><div className="room-top"><span className="room-number">Q{i + 1}</span><Badge tone={r[2] === "Disponible" ? "success" : r[2] === "Limpieza" ? "warning" : "info"}>{r[2]}</Badge></div><div className="section-heading">{r[0]}</div><p>{r[1]}</p><div className="room-details"><span>Próxima cirugía</span><strong>{r[3]}</strong><span>Servicio asignado</span><strong>{r[4]}</strong></div><Button variant="secondary" onClick={() => navigate("/quirofanos/cronograma")}>Ver agenda</Button></Card>)}</div><Card className="emergency-room"><span className="room-number disabled">Q5</span><div><div className="section-heading">Quirófano 5 — Reservado para emergencias</div><p>Solo visible como referencia. No admite reservas desde el sistema.</p></div><Badge tone="danger">Solo emergencias</Badge></Card></>;
}

const times = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];
function Schedule({ reserve = false }: { reserve?: boolean }) {
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState("");
  return <><Crumb items={["Quirófanos", reserve ? "Nueva reserva" : "Cronograma"]} /><PageHeader title={reserve ? "Reservar quirófano" : "Cronograma quirúrgico"} subtitle={reserve ? "Seleccioná paciente, sala y franja horaria." : "Agenda semanal del 30 de septiembre al 4 de octubre."} actions={!reserve ? <><Button variant="secondary">Día</Button><Button variant="soft">Semana</Button><Button icon="plus" onClick={() => navigate("/quirofanos/reservar")}>Nueva reserva</Button></> : undefined} />
    {!reserve && <div className="schedule-metrics"><span><i className="dot blue" />3 quirófanos ocupados</span><span><i className="dot green" />8 cirugías programadas</span><span><i className="dot amber" />2 pendientes de confirmar</span><Badge tone="warning">Cierre de agenda mañana · 18:00</Badge></div>}
    {reserve && <Card className="reserve-fields"><Select label="Paciente"><option>María González</option><option>Carlos Fernández</option></Select><Select label="Cirugía"><option>Colecistectomía laparoscópica</option></Select><Select label="Servicio"><option>Cirugía General</option></Select><Select label="Quirófano"><option>Quirófano 1</option><option>Quirófano 2</option></Select></Card>}
    <Card className="calendar-card"><div className="calendar-head"><span>Horario</span>{["Lun 30", "Mar 1", "Mié 2", "Jue 3", "Vie 4"].map((d, i) => <strong key={d} className={i === 0 ? "today" : ""}>{d}</strong>)}</div>{times.map((time, row) => <div className="calendar-row" key={time}><span>{time}</span>{[0, 1, 2, 3, 4].map((day) => {
      const occupied = (day === 0 && [0, 1, 4, 7].includes(row)) || (day === 1 && [2, 5].includes(row)) || (day === 2 && [0, 4].includes(row)) || (day === 3 && [1, 6].includes(row));
      return <div key={day} className={`calendar-cell ${occupied ? "occupied" : "available"} ${selected === `${day}-${row}` ? "selected" : ""}`} onClick={() => !occupied && setSelected(`${day}-${row}`)} role="button" tabIndex={0}>{occupied && <><strong>{row % 2 ? "Artroscopia" : "Colecistectomía"}</strong><small>{row % 2 ? "C. Fernández · Q2" : "M. González · Q1"}</small></>}{!occupied && reserve && <small>Disponible</small>}</div>;
    })}</div>)}</Card>
    {reserve && <Card className="reservation-summary"><div><span className="eyebrow">RESUMEN DE RESERVA</span><div className="section-heading">{selected ? "Lunes 30 · 11:00–13:00" : "Seleccioná una franja disponible"}</div><p>Quirófano 1 · María González · Dr. Martín Pérez</p><Check label="Agregar a mi calendario" /></div><div className="header-actions"><Button variant="secondary" onClick={() => navigate("/quirofanos/cronograma")}>Cancelar</Button><Button onClick={() => setModal(true)}>Confirmar reserva</Button></div></Card>}
    {modal && <Modal title="¿Desea confirmar esta reserva?" onClose={() => setModal(false)}><p>Se reservará el Quirófano 1 el lunes 30 de septiembre de 11:00 a 13:00.</p><div className="modal-actions"><Button variant="secondary" onClick={() => setModal(false)}>Cancelar</Button><Button onClick={() => { setModal(false); navigate("/quirofanos/cronograma"); }}>Confirmar</Button></div></Modal>}
  </>;
}

function Modal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return <div className="modal-backdrop"><div className="modal"><div className="modal-header"><div className="section-heading">{title}</div><div className="icon-button" onClick={onClose}><Icon name="close" /></div></div>{children}</div></div>;
}

function Admitted() {
  return <><Crumb items={["Seguimiento", "Pacientes internados"]} /><PageHeader title="Pacientes internados" subtitle="Seguimiento postoperatorio durante la internación." /><Filters /><Card><Table headers={["Paciente", "Cirugía", "Fecha cirugía", "Habitación", "Días", "Última evolución", "Médico", "Estado", ""]} rows={[
    [<PatientLink />, "Colecistectomía", "30/09/2025", "302", "1", "Hoy · 08:15", "Dr. Martín Pérez", <Badge tone="success">Favorable</Badge>, <Button onClick={() => navigate("/cirugias/1/evolucion")}>Registrar evolución</Button>],
    [<PatientLink name="Jorge López" />, "Colectomía", "28/09/2025", "218", "3", "Ayer · 14:30", "Dra. Lucía Ruiz", <Badge tone="warning">En observación</Badge>, <Button variant="secondary" onClick={() => navigate("/cirugias/1/evolucion")}>Registrar evolución</Button>],
    [<PatientLink name="Miguel Sánchez" />, "Ureteroscopía", "29/09/2025", "405", "2", "Ayer · 10:15", "Dr. Javier Mora", <Badge tone="success">Favorable</Badge>, <Button variant="secondary" onClick={() => navigate("/cirugias/1/evolucion")}>Registrar evolución</Button>],
  ]} /></Card></>;
}

function Evolution() {
  const [form, setForm] = useState(false);
  return <><Crumb items={["Cirugías", "Colecistectomía", "Evolución"]} /><PageHeader title="Evolución postoperatoria" subtitle="María González · Habitación 302" actions={<><Button variant="secondary" onClick={() => navigate("/cirugias/1/alta")}>Registrar alta</Button><Button icon="plus" onClick={() => setForm(!form)}>Registrar evolución</Button></>} />
    {form && <FormCard title="Nueva evolución" number="HOY"><div className="form-grid"><Input label="Día" type="date" /><Input label="Habitación" value="302" /><Select label="Médico"><option>Dr. Martín Pérez</option></Select><Textarea label="Evolución" placeholder="Describa el estado y evolución del paciente..." /><Textarea label="Tratamiento postquirúrgico" placeholder="Indicaciones y tratamiento..." /><Textarea label="Tratamiento de base" placeholder="Medicación habitual..." /></div><div className="form-actions"><Button variant="secondary" onClick={() => setForm(false)}>Cancelar</Button><Button onClick={() => setForm(false)}>Guardar evolución</Button></div></FormCard>}
    <Card><SectionTitle title="Historial de evolución" subtitle="Registro clínico durante la internación" /><Timeline /></Card>
  </>;
}

function Timeline({ compact = false }: { compact?: boolean }) {
  const entries = [
    ["30 SEP · 08:15", "Día 1 · Habitación 302", "Dr. Martín Pérez", "Paciente afebril, lúcida y hemodinámicamente estable. Buena tolerancia oral. Heridas quirúrgicas limpias y secas.", "Analgésicos · Hidratación · Control de herida"],
    ["29 SEP · 18:40", "Postoperatorio inmediato · Recuperación", "Dra. Lucía Ruiz", "Evolución favorable en recuperación anestésica. Sin náuseas ni dolor significativo.", "Plan analgésico · Control de signos vitales"],
  ];
  return <div className={`timeline ${compact ? "compact" : ""}`}>{entries.map((e, i) => <div className="timeline-entry" key={e[0]}><div className="timeline-marker"><span>{i === 0 ? <Icon name="activity" size={14} /> : ""}</span></div><div className="timeline-content"><span className="eyebrow">{e[0]}</span><div className="section-heading">{e[1]}</div><small>{e[2]}</small><p>{e[3]}</p><div className="treatment"><strong>Tratamiento</strong><span>{e[4]}</span></div></div></div>)}</div>;
}

function Discharge() {
  return <><Crumb items={["Cirugías", "Colecistectomía", "Alta médica"]} /><PageHeader title="Alta médica" subtitle="María González · Colecistectomía laparoscópica" /><FormCard title="Datos del alta" number="01"><div className="form-grid"><Input label="Fecha de alta" type="date" /><Select label="Médico que otorga el alta"><option>Dr. Martín Pérez</option></Select></div></FormCard><FormCard title="Epicrisis" number="02"><div className="ai-panel"><span className="ai-icon"><Icon name="sparkles" /></span><div><strong>Generar epicrisis con IA</strong><p>Creá un borrador a partir del diagnóstico, procedimiento y evoluciones registradas.</p></div><Button icon="sparkles" onClick={() => navigate("/cirugias/1/epicrisis")}>Generar borrador</Button></div><Textarea label="Epicrisis" placeholder="Ingresá o generá el resumen de alta..." /></FormCard><FormCard title="Indicaciones al alta" number="03"><div className="form-grid"><Textarea label="Medicación" /><Textarea label="Cuidados" /><Textarea label="Controles" /><Textarea label="Signos de alarma" /><Textarea label="Recomendaciones" /></div></FormCard><div className="form-actions"><Button variant="secondary">Guardar borrador</Button><Button onClick={() => navigate("/seguimiento/ambulatorio")}>Finalizar alta</Button></div></>;
}

function Epicrisis() {
  return <><Crumb items={["Cirugías", "Alta", "Epicrisis asistida"]} /><PageHeader title="Borrador de epicrisis" subtitle="Revisá cuidadosamente el contenido antes de aceptarlo." actions={<Badge tone="info">Borrador generado por IA</Badge>} /><div className="ai-warning"><Icon name="sparkles" /><div><strong>Contenido asistido</strong><p>La IA genera únicamente un borrador. La revisión y validación final corresponde al profesional tratante.</p></div></div><div className="epicrisis-grid"><Card><SectionTitle title="Información disponible" /><DetailRows rows={[["Diagnóstico", "Colelitiasis sintomática"], ["Procedimiento", "Colecistectomía laparoscópica"], ["Fecha", "30/09/2025"], ["Evoluciones", "2 registros"], ["Estudios", "4 validados"]]} /><div className="source-block"><strong>Tratamientos registrados</strong><p>Analgesia, hidratación, control de herida y progresión de dieta.</p></div></Card><Card className="draft"><SectionTitle title="Borrador de epicrisis" action={<Badge tone="warning">Sin validar</Badge>} /><div className="draft-section"><strong>Motivo de ingreso</strong><p>Paciente de 42 años que ingresa para resolución quirúrgica programada de colelitiasis sintomática.</p></div><div className="draft-section"><strong>Procedimiento</strong><p>Se realiza colecistectomía laparoscópica sin complicaciones intraoperatorias.</p></div><div className="draft-section"><strong>Evolución</strong><p>Presenta evolución postoperatoria favorable, afebril, hemodinámicamente estable y con buena tolerancia oral.</p></div><div className="draft-section"><strong>Indicaciones</strong><p>Continuar analgesia según pauta, cuidados de heridas y control por consultorio externo en 7 días.</p></div></Card></div><div className="form-actions spaced"><Button variant="secondary" onClick={() => navigate("/cirugias/1/alta")}>Volver</Button><div><Button variant="secondary" icon="sparkles">Regenerar borrador</Button><Button variant="secondary">Editar</Button><Button onClick={() => navigate("/cirugias/1/alta")}>Aceptar borrador</Button></div></div></>;
}

function Ambulatory({ embedded = false }: { embedded?: boolean }) {
  return <>{!embedded && <><Crumb items={["Seguimiento", "Ambulatorio"]} /><PageHeader title="Seguimiento ambulatorio" subtitle="Visitas posteriores al alta y próximos controles." actions={<Button icon="plus" onClick={() => navigate("/pacientes/1/seguimiento/nuevo")}>Nueva visita</Button>} /></>}<Card><Table headers={["Fecha", "Paciente", "Médico", "Comentario", "Tratamiento", "Próximo control"]} rows={[
    ["14/10/2025", <PatientLink />, "Dr. Martín Pérez", "Control posoperatorio favorable.", "Continuar cuidados", "En 30 días"],
    ["10/10/2025", <PatientLink name="Carlos Fernández" />, "Dra. Lucía Ruiz", "Buena movilidad articular.", "Kinesiología", "24/10/2025"],
    ["08/10/2025", <PatientLink name="Ana Martínez" />, "Dr. Martín Pérez", "Herida en buen estado.", "Alta de curaciones", "Sin control"],
  ]} /></Card></>;
}

function NewVisit() {
  return <><Crumb items={["Pacientes", "María González", "Nueva visita"]} /><PageHeader title="Nueva visita ambulatoria" subtitle="Registrá el control posterior al alta." /><FormCard title="Datos de la visita" number="01"><div className="form-grid"><Input label="Fecha" type="date" /><Select label="Médico"><option>Dr. Martín Pérez</option></Select><Textarea label="Comentario" placeholder="Evolución y hallazgos del control..." /><Textarea label="Tratamiento posible" placeholder="Indicaciones o cambios..." /><Input label="Próximo control" type="date" /></div></FormCard><div className="form-actions"><Button variant="secondary" onClick={() => navigate("/seguimiento/ambulatorio")}>Cancelar</Button><Button onClick={() => navigate("/seguimiento/ambulatorio")}>Registrar visita</Button></div></>;
}

function Consultations() {
  return <><Crumb items={["Consultas"]} /><PageHeader title="Consultas" subtitle="Buscá información clínica y administrativa en todo el sistema." /><Card className="search-hero"><span className="search-hero-icon"><Icon name="search" size={24} /></span><Input placeholder="Buscar paciente, DNI, cirugía, médico..." /><Button>Buscar</Button></Card><Card className="advanced"><SectionTitle title="Filtros avanzados" /><div className="form-grid"><Select label="Servicio"><option>Todos</option></Select><Select label="Especialidad"><option>Todas</option></Select><Select label="Cirujano"><option>Todos</option></Select><Select label="Obra social"><option>Todas</option></Select><Input label="Diagnóstico" placeholder="Buscar diagnóstico" /><Input label="Fecha" type="date" /><Select label="Estado"><option>Todos</option></Select><Select label="Prioridad"><option>Todas</option></Select></div></Card><Card><SectionTitle title="Resultados recientes" /><Table headers={["Tipo", "Resultado", "Información", "Estado", ""]} rows={[
    ["Paciente", <PatientLink />, "DNI 28.456.789 · OSDE", <Badge tone="info">En preparación</Badge>, <Button variant="ghost" onClick={() => navigate("/pacientes/1")}>Abrir</Button>],
    ["Cirugía", "Colecistectomía laparoscópica", "María González · 30/09/2025", <Badge tone="success">Confirmada</Badge>, <Button variant="ghost" onClick={() => navigate("/cirugias/1")}>Abrir</Button>],
    ["Profesional", "Dr. Martín Pérez", "Cirugía General · Cirujano", <Badge tone="success">Activo</Badge>, <Button variant="ghost">Abrir</Button>],
  ]} /></Card></>;
}

function AdminHome() {
  const options = [["Usuarios", "Equipo, roles y permisos", "/administracion/usuarios", "users"], ["Asignaciones", "Bloques semanales de quirófanos", "/administracion/quirofanos/asignaciones", "calendar"], ["Obras sociales", "Coberturas médicas", "/administracion/obras-sociales", "clipboard"], ["Diagnósticos", "Catálogo de diagnósticos", "/administracion/diagnosticos", "activity"], ["Estudios", "Estudios prequirúrgicos", "/administracion/estudios", "heart"], ["Servicios", "Servicios hospitalarios", "/administracion/servicios", "grid"], ["Especialidades", "Especialidades médicas", "/administracion/especialidades", "user"], ["Grados de urgencia", "Prioridades quirúrgicas", "/administracion/urgencias", "clock"]];
  return <><Crumb items={["Administración"]} /><PageHeader title="Administración" subtitle="Configuración de usuarios y entidades básicas del sistema." /><div className="admin-grid">{options.map(([title, sub, path, icon]) => <Card className="admin-option" key={title}><div onClick={() => navigate(path)} role="button" tabIndex={0}><span className="quick-icon"><Icon name={icon as IconName} /></span><div><div className="section-heading">{title}</div><p>{sub}</p></div><Icon name="arrow" /></div></Card>)}</div></>;
}

function UsersPage() {
  return <><Crumb items={["Administración", "Usuarios"]} /><PageHeader title="Usuarios" subtitle="Administrá el equipo, sus roles y permisos." actions={<Button icon="plus" onClick={() => navigate("/administracion/usuarios/nuevo")}>Nuevo usuario</Button>} /><Filters /><Card><Table headers={["Apellido", "Nombre", "Email", "Especialidad", "Servicio", "Cargo", "Estado", "Acciones"]} rows={[
    ["Pérez", "Martín", "martin.perez@hospital.ar", "Cirugía General", "Cirugía General", "Cirujano", <Badge tone="success">Activo</Badge>, <Button variant="ghost">Ver · Editar · Permisos</Button>],
    ["Ruiz", "Lucía", "lucia.ruiz@hospital.ar", "Cirugía General", "Cirugía General", "R4", <Badge tone="success">Activo</Badge>, <Button variant="ghost">Ver · Editar · Permisos</Button>],
    ["Romero", "Pablo", "pablo.romero@hospital.ar", "Anestesiología", "Anestesia", "Jefe", <Badge tone="success">Activo</Badge>, <Button variant="ghost">Ver · Editar · Permisos</Button>],
  ]} /></Card></>;
}

function NewUser() {
  const permissions = ["Lectura usuarios", "Escritura usuarios", "Lectura pacientes", "Escritura pacientes", "Lectura cirugías", "Escritura cirugías", "Lectura quirófanos", "Escritura quirófanos", "Lectura seguimientos", "Escritura seguimientos"];
  return <><Crumb items={["Administración", "Usuarios", "Nuevo usuario"]} /><PageHeader title="Nuevo usuario" subtitle="Creá un perfil y asignale los permisos necesarios." /><FormCard title="Información personal" number="01"><div className="form-grid"><Input label="Apellido" /><Input label="Nombres" /><Input label="Email" type="email" /><Select label="Especialidad"><option>Cirugía General</option><option>Anestesiología</option></Select><Select label="Servicio"><option>Cirugía General</option></Select><Select label="Cargo"><option>R1</option><option>R2</option><option>R3</option><option>R4</option><option>Cirujano</option><option>Jefe</option><option>Administrativo</option></Select></div></FormCard><FormCard title="Roles y permisos" number="02"><div className="permissions">{permissions.map((p, i) => <Check label={p} checked={i % 2 === 0} key={p} />)}</div></FormCard><div className="form-actions"><Button variant="secondary" onClick={() => navigate("/administracion/usuarios")}>Cancelar</Button><Button onClick={() => navigate("/administracion/usuarios")}>Crear usuario</Button></div></>;
}

function Assignments() {
  const [modal, setModal] = useState(false);
  return <><Crumb items={["Administración", "Quirófanos", "Asignaciones"]} /><PageHeader title="Asignación de quirófanos" subtitle="Bloques semanales por servicio y especialidad." actions={<Button onClick={() => setModal(true)}>Editar asignación</Button>} /><div className="assignment-grid">{["Quirófano 1", "Quirófano 2", "Quirófano 3", "Quirófano 4"].map((room, idx) => <Card key={room}><SectionTitle title={room} subtitle={idx === 0 ? "Cirugía general" : "Uso multidisciplinario"} />{["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"].map((day, i) => <div className="assignment" key={day}><strong>{day}</strong><div><span>08:00 – {i % 2 ? "14:00" : "12:00"}</span><small>{idx % 2 ? "Traumatología" : "Cirugía General"}</small></div>{i % 2 === 0 && <div><span>12:00 – 18:00</span><small>Oftalmología</small></div>}</div>)}</Card>)}</div>{modal && <Modal title="Editar asignación" onClose={() => setModal(false)}><div className="form-grid"><Select label="Quirófano"><option>Quirófano 1</option></Select><Select label="Día"><option>Lunes</option></Select><Input label="Hora inicio" type="time" /><Input label="Hora fin" type="time" /><Select label="Servicio"><option>Cirugía General</option></Select><Select label="Especialidad"><option>Cirugía General</option></Select></div><div className="modal-actions"><Button variant="secondary" onClick={() => setModal(false)}>Cancelar</Button><Button onClick={() => setModal(false)}>Guardar</Button></div></Modal>}</>;
}

function EntityPage({ entity }: { entity: string }) {
  const title = entity.replace(/-/g, " ").replace(/\b\w/g, (x) => x.toUpperCase());
  return <><Crumb items={["Administración", title]} /><PageHeader title={title} subtitle={`Administrá el catálogo de ${title.toLowerCase()} del sistema.`} actions={<Button icon="plus">Nuevo registro</Button>} /><Filters /><Card><Table headers={["Registro", "Descripción", "Estado", "Última actualización", "Acciones"]} rows={[
    [`${title} principal`, "Registro predeterminado del sistema", <Badge tone="success">Activo</Badge>, "28/09/2025", <Button variant="ghost">Editar</Button>],
    [`${title} secundario`, "Configuración para uso general", <Badge tone="success">Activo</Badge>, "15/09/2025", <Button variant="ghost">Editar</Button>],
    [`${title} histórico`, "Registro conservado como referencia", <Badge tone="neutral">Inactivo</Badge>, "02/08/2025", <Button variant="ghost">Editar</Button>],
  ]} /></Card></>;
}

function Login() {
  const [error, setError] = useState(false);
  return <div className="login-page"><div className="login-brand"><Logo /><div className="login-message"><span className="login-kicker">CUIDADO QUE CONECTA</span><div className="login-display">Cada decisión clínica,<br />más clara y a tiempo.</div><p>Una plataforma diseñada para acompañar a los equipos de salud en todo el circuito quirúrgico.</p><div className="login-stat"><span><strong>24</strong><small>Pacientes en espera</small></span><span><strong>8</strong><small>Cirugías hoy</small></span><span><strong>4</strong><small>Quirófanos activos</small></span></div></div><small className="login-footer">Hospital San Martín · Red asistencial</small></div><div className="login-form-wrap"><div className="login-form"><span className="mobile-logo"><Logo /></span><span className="eyebrow">BIENVENIDO</span><div className="login-title">Gestión Quirúrgica</div><p>Ingresá con tus credenciales institucionales.</p>{error && <div className="login-error">No pudimos iniciar sesión. Revisá tus datos e intentá nuevamente.</div>}<Input label="Email institucional" placeholder="nombre@hospital.ar" type="email" /><Input label="Contraseña" placeholder="Ingresá tu contraseña" type="password" /><div className="login-options"><Check label="Recordarme" /><span className="link">¿Olvidaste tu contraseña?</span></div><Button className="login-button" onClick={() => navigate("/dashboard")}>Ingresar <Icon name="arrow" /></Button><Button variant="ghost" className="error-demo" onClick={() => setError(!error)}>Ver estado de error</Button><small>Al ingresar aceptás las políticas de seguridad y privacidad institucional.</small></div></div></div>;
}

function NotFound() {
  return <Card className="empty-state"><span className="empty-icon"><Icon name="search" size={28} /></span><div className="page-title">No encontramos esta pantalla</div><p>La ruta solicitada no existe en el prototipo.</p><Button onClick={() => navigate("/dashboard")}>Volver al dashboard</Button></Card>;
}

function RouteContent({ path }: { path: string }) {
  if (path === "/dashboard" || path === "/") return <Dashboard />;
  if (path === "/pacientes") return <PatientsPage />;
  if (path === "/pacientes/nuevo") return <PatientForm />;
  if (path === "/pacientes/lista-espera") return <PatientsPage waiting />;
  if (/^\/pacientes\/\d+\/prequirurgicos$/.test(path)) return <Preop />;
  if (/^\/pacientes\/\d+\/cirugias$/.test(path)) return <SurgeryHistory />;
  if (/^\/pacientes\/\d+\/seguimiento\/nuevo$/.test(path)) return <NewVisit />;
  if (/^\/pacientes\/\d+$/.test(path)) return <PatientDetail />;
  if (path === "/cirugias") return <SurgeriesPage />;
  if (path === "/cirugias/nueva") return <Wizard />;
  if (/^\/cirugias\/\d+\/evolucion$/.test(path)) return <Evolution />;
  if (/^\/cirugias\/\d+\/alta$/.test(path)) return <Discharge />;
  if (/^\/cirugias\/\d+\/epicrisis$/.test(path)) return <Epicrisis />;
  if (/^\/cirugias\/\d+$/.test(path)) return <SurgeryDetail />;
  if (path === "/quirofanos") return <OperatingRooms />;
  if (path === "/quirofanos/cronograma") return <Schedule />;
  if (path === "/quirofanos/reservar") return <Schedule reserve />;
  if (path === "/seguimiento" || path === "/seguimiento/internados") return <Admitted />;
  if (path === "/seguimiento/ambulatorio") return <Ambulatory />;
  if (path === "/consultas") return <Consultations />;
  if (path === "/administracion") return <AdminHome />;
  if (path === "/administracion/usuarios") return <UsersPage />;
  if (path === "/administracion/usuarios/nuevo") return <NewUser />;
  if (path === "/administracion/quirofanos/asignaciones") return <Assignments />;
  if (path.startsWith("/administracion/")) return <EntityPage entity={path.split("/").pop() || "entidades"} />;
  return <NotFound />;
}

export default function App() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const update = () => setPath(window.location.pathname);
    window.addEventListener("popstate", update);
    return () => window.removeEventListener("popstate", update);
  }, []);
  if (path === "/login") return <Login />;
  return <Shell><RouteContent path={path} /></Shell>;
}
