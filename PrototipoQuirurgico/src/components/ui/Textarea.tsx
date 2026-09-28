import React from "react";

export function Textarea({ label, placeholder }: { label: string; placeholder?: string }) {
  return <label className="field"><span className="field-label">{label}</span>{React.createElement("textarea", { className: "input textarea", placeholder })}</label>;
}
