import React from "react";
import { Icon } from "./Icon";
import { navigate } from "@/router/useLocation";

export function Crumb({ items }: { items: string[] }) {
  return <div className="breadcrumbs"><span onClick={() => navigate("/dashboard")}>Inicio</span>{items.map((item, i) => <React.Fragment key={item}><Icon name="arrow" size={13} /><span className={i === items.length - 1 ? "current" : ""}>{item}</span></React.Fragment>)}</div>;
}
