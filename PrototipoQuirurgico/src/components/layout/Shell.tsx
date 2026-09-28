import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function Shell({ children }: { children: React.ReactNode }) {
  const [menu, setMenu] = useState(false);
  return <div className="app"><Sidebar open={menu} close={() => setMenu(false)} /><div className="main"><Topbar menu={() => setMenu(true)} /><main className="content">{children}</main></div></div>;
}
