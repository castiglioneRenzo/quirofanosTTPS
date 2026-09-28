import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Check } from "@/components/ui/Check";
import { Input } from "@/components/ui/Input";
import { Logo } from "@/components/layout/Logo";
import { navigate } from "@/router/useLocation";

export function Login() {
  const [error, setError] = useState(false);
  return <div className="login-page"><div className="login-brand"><Logo /><div className="login-message"><span className="login-kicker">CUIDADO QUE CONECTA</span><div className="login-display">Cada decisión clínica,<br />más clara y a tiempo.</div><p>Una plataforma diseñada para acompañar a los equipos de salud en todo el circuito quirúrgico.</p><div className="login-stat"><span><strong>24</strong><small>Pacientes en espera</small></span><span><strong>8</strong><small>Cirugías hoy</small></span><span><strong>4</strong><small>Quirófanos activos</small></span></div></div><small className="login-footer">Hospital Rossi · Red asistencial</small></div><div className="login-form-wrap"><div className="login-form"><span className="mobile-logo"><Logo /></span><span className="eyebrow">BIENVENIDO</span><div className="login-title">Gestión Quirúrgica</div><p>Ingresá con tus credenciales institucionales.</p>{error && <div className="login-error">No pudimos iniciar sesión. Revisá tus datos e intentá nuevamente.</div>}<Input label="Email institucional" placeholder="nombre@hospital.ar" type="email" /><Input label="Contraseña" placeholder="Ingresá tu contraseña" type="password" /><div className="login-options"><Check label="Recordarme" /><span className="link">¿Olvidaste tu contraseña?</span></div><Button className="login-button" onClick={() => navigate("/dashboard")}>Ingresar <Icon name="arrow" /></Button><Button variant="ghost" className="error-demo" onClick={() => setError(!error)}>Ver estado de error</Button><small>Al ingresar aceptás las políticas de seguridad y privacidad institucional.</small></div></div></div>;
}
