import React from "react";

export function Check({ label, checked = false }: { label: string; checked?: boolean }) {
  return <label className="check">{React.createElement("input", { type: "checkbox", defaultChecked: checked })}<span>{label}</span></label>;
}
