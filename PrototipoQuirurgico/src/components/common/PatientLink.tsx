import { navigate } from "@/router/useLocation";

export function PatientLink({ name = "María González" }: { name?: string }) {
  return <span className="link" onClick={() => navigate("/pacientes/1")}>{name}</span>;
}
