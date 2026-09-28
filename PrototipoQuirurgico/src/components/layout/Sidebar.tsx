import { Icon } from "@/components/ui/Icon";
import { navItems } from "@/data/navigation";
import { Logo } from "./Logo";
import { navigate } from "@/router/useLocation";

export function Sidebar({ open, close }: { open: boolean; close: () => void }) {
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
      </aside>
    </>
  );
}
