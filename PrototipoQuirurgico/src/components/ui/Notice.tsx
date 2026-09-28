export function Notice({ time, text }: { time: string; text: string }) {
  return <div className="notice"><span className="notice-mark" /><div><strong>{text}</strong><small>{time}</small></div></div>;
}
