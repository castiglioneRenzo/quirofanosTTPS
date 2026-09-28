import { Icon } from "@/components/ui/Icon";
import { timelineEntries } from "@/data/followUp";

export function Timeline({ compact = false }: { compact?: boolean }) {
  return <div className={`timeline ${compact ? "compact" : ""}`}>{timelineEntries.map((e, i) => <div className="timeline-entry" key={e[0]}><div className="timeline-marker"><span>{i === 0 ? <Icon name="activity" size={14} /> : ""}</span></div><div className="timeline-content"><span className="eyebrow">{e[0]}</span><div className="section-heading">{e[1]}</div><small>{e[2]}</small><p>{e[3]}</p><div className="treatment"><strong>Tratamiento</strong><span>{e[4]}</span></div></div></div>)}</div>;
}
