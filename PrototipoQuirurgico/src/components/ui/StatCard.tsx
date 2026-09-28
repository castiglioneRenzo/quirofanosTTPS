import { Icon, type IconName } from "./Icon";
import { Card } from "./Card";

export function StatCard({ icon, value, label, meta, tone = "blue" }: { icon: IconName; value: string; label: string; meta: string; tone?: string }) {
  return <Card className="stat-card"><div className={`stat-icon ${tone}`}><Icon name={icon} /></div><div className="stat-body"><span>{label}</span><strong>{value}</strong><small>{meta}</small></div></Card>;
}
