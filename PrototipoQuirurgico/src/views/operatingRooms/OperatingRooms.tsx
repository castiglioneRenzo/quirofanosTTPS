import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Crumb } from "@/components/ui/Crumb";
import { PageHeader } from "@/components/ui/PageHeader";
import { rooms } from "@/data/operatingRooms";
import { navigate } from "@/router/useLocation";

export function OperatingRooms() {
  return <><Crumb items={["Quirófanos"]} /><PageHeader title="Quirófanos" subtitle="Estado actual y próxima actividad de las salas." actions={<><Button variant="secondary" onClick={() => navigate("/quirofanos/cronograma")}>Ver cronograma</Button><Button icon="plus" onClick={() => navigate("/quirofanos/reservar")}>Nueva reserva</Button></>} /><div className="room-grid">{rooms.map((r, i) => <Card className="room-card" key={r[0]}><div className="room-top"><span className="room-number">Q{i + 1}</span><Badge tone={r[2] === "Disponible" ? "success" : r[2] === "Limpieza" ? "warning" : "info"}>{r[2]}</Badge></div><div className="section-heading">{r[0]}</div><p>{r[1]}</p><div className="room-details"><span>Próxima cirugía</span><strong>{r[3]}</strong><span>Servicio asignado</span><strong>{r[4]}</strong></div><Button variant="secondary" onClick={() => navigate("/quirofanos/cronograma")}>Ver agenda</Button></Card>)}</div><Card className="emergency-room"><span className="room-number disabled">Q5</span><div><div className="section-heading">Quirófano 5 — Reservado para emergencias</div><p>Solo visible como referencia. No admite reservas desde el sistema.</p></div><Badge tone="danger">Solo emergencias</Badge></Card></>;
}
