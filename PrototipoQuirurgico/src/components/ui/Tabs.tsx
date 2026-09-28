export function Tabs({ items, active, onChange }: { items: string[]; active: string; onChange: (x: string) => void }) {
  return <div className="tabs">{items.map((item) => <div key={item} className={`tab ${active === item ? "active" : ""}`} onClick={() => onChange(item)} role="button" tabIndex={0}>{item}</div>)}</div>;
}
