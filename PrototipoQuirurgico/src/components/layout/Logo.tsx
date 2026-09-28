import { Icon } from "@/components/ui/Icon";
import { navigate } from "@/router/useLocation";

export function Logo({ compact = false }: { compact?: boolean }) {
  return <div className="logo" onClick={() => navigate("/dashboard")} role="button" tabIndex={0}><span className="logo-mark"><Icon name="activity" size={22} /></span>{!compact && <span><strong>Rossi</strong><small>Gestión quirúrgica</small></span>}</div>;
}
