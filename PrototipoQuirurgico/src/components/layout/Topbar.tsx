import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Notice } from "@/components/ui/Notice";
import { navigate } from "@/router/useLocation";

export function Topbar({ menu }: { menu: () => void }) {
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
