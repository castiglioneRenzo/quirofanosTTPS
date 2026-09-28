import React from "react";
import { Card } from "./Card";
import { SectionTitle } from "./SectionTitle";

export function FormCard({ title, number, children }: { title: string; number: string; children: React.ReactNode }) {
  return <Card className="form-card"><SectionTitle title={title} action={<span className="section-number">{number}</span>} />{children}</Card>;
}
