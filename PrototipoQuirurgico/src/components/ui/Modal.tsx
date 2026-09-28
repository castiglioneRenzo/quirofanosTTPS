import React from "react";
import { Icon } from "./Icon";

export function Modal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return <div className="modal-backdrop"><div className="modal"><div className="modal-header"><div className="section-heading">{title}</div><div className="icon-button" onClick={onClose}><Icon name="close" /></div></div>{children}</div></div>;
}
