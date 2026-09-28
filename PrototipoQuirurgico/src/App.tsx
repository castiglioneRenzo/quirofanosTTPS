import { Shell } from "@/components/layout/Shell";
import { useLocation } from "@/router/useLocation";
import { resolveRoute } from "@/router/routes";
import { Login } from "@/views/auth/Login";
import { NotFound } from "@/views/NotFound";

export default function App() {
  const path = useLocation();
  if (path === "/login") return <Login />;
  return <Shell>{resolveRoute(path) ?? <NotFound />}</Shell>;
}
