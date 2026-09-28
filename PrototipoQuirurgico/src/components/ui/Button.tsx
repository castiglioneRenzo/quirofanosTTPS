import React from "react";
import { Icon, type IconName } from "./Icon";

export function Button({ children, variant = "primary", icon, onClick, className = "", type = "button" }: {
  children: React.ReactNode; variant?: "primary" | "secondary" | "ghost" | "soft"; icon?: IconName; onClick?: () => void; className?: string; type?: "button" | "submit";
}) {
  return React.createElement("button", { className: `btn btn-${variant} ${className}`, onClick, type }, icon && <Icon name={icon} />, <span>{children}</span>);
}
