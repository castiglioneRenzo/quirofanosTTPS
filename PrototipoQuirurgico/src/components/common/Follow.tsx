import { Button } from "@/components/ui/Button";
import { navigate } from "@/router/useLocation";

export function Follow({ initials, name, room, time, tone }: { initials: string; name: string; room: string; time: string; tone: string }) {
  return <div className="follow"><span className={`patient-avatar ${tone}`}>{initials}</span><div><strong>{name}</strong><small>{room} · Última evolución {time}</small></div><Button variant="soft" onClick={() => navigate("/cirugias/1/evolucion")}>Evolución</Button></div>;
}
