import React from "react";

export function Select({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <label className="field">
      {label && <span className="field-label">{label}</span>}
      {React.createElement("select", { className: "input select" }, children)}
    </label>
  );
}
