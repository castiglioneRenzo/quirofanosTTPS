import { Button } from "./Button";

export function Pagination() {
  return <div className="pagination"><span>Mostrando 1–5 de 128</span><div><Button variant="secondary">Anterior</Button><span className="page active">1</span><span className="page">2</span><span className="page">3</span><Button variant="secondary">Siguiente</Button></div></div>;
}
