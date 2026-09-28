import React from "react";

export function SectionTitle({ title, subtitle, action }: { title: string; subtitle?: string; action?: React.ReactNode }) {
  return <div className="section-title"><div><div className="section-heading">{title}</div>{subtitle && <p>{subtitle}</p>}</div>{action}</div>;
}
