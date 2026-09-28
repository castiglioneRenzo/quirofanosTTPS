export function DetailRows({ rows }: { rows: string[][] }) {
  return <div className="detail-rows">{rows.map(([label, value]) => <div className="detail-row" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>;
}
