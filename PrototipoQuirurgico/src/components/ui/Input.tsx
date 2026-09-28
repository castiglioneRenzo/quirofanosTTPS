import React from "react";

export function Input({ placeholder, label, type = "text", value, onChange }: { placeholder?: string; label?: string; type?: string; value?: string; onChange?: (v: string) => void }) {
  return (
    <label className="field">
      {label && <span className="field-label">{label}</span>}
      {React.createElement("input", { className: "input", placeholder, type, value, onChange: (e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value) })}
    </label>
  );
}
