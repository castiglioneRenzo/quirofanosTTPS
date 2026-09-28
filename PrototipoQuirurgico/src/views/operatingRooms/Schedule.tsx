import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Check } from "@/components/ui/Check";
import { Modal } from "@/components/ui/Modal";
import { Select } from "@/components/ui/Select";
import { Crumb } from "@/components/ui/Crumb";
import { PageHeader } from "@/components/ui/PageHeader";
import { times } from "@/data/operatingRooms";
import { navigate } from "@/router/useLocation";

export function Schedule({ reserve = false }: { reserve?: boolean }) {
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState("");
  return <><Crumb items={["Quirófanos", reserve ? "Nueva reserva" : "Cronograma"]} /><PageHeader title={reserve ? "Reservar quirófano" : "Cronograma quirúrgico"} subtitle={reserve ? "Seleccioná paciente, sala y franja horaria." : "Agenda semanal del 30 de septiembre al 4 de octubre."} actions={!reserve ? <><Button variant="secondary">Día</Button><Button variant="soft">Semana</Button><Button icon="plus" onClick={() => navigate("/quirofanos/reservar")}>Nueva reserva</Button></> : undefined} />
    {!reserve && <div className="schedule-metrics"><span><i className="dot blue" />3 quirófanos ocupados</span><span><i className="dot green" />8 cirugías programadas</span><span><i className="dot amber" />2 pendientes de confirmar</span><Badge tone="warning">Cierre de agenda mañana · 18:00</Badge></div>}
    {reserve && <Card className="reserve-fields"><Select label="Paciente"><option>María González</option><option>Carlos Fernández</option></Select><Select label="Cirugía"><option>Colecistectomía laparoscópica</option></Select><Select label="Servicio"><option>Cirugía General</option></Select><Select label="Quirófano"><option>Quirófano 1</option><option>Quirófano 2</option></Select></Card>}
    <Card className="calendar-card"><div className="calendar-head"><span>Horario</span>{["Lun 30", "Mar 1", "Mié 2", "Jue 3", "Vie 4"].map((d, i) => <strong key={d} className={i === 0 ? "today" : ""}>{d}</strong>)}</div>{times.map((time, row) => <div className="calendar-row" key={time}><span>{time}</span>{[0, 1, 2, 3, 4].map((day) => {
      const occupied = (day === 0 && [0, 1, 4, 7].includes(row)) || (day === 1 && [2, 5].includes(row)) || (day === 2 && [0, 4].includes(row)) || (day === 3 && [1, 6].includes(row));
      return <div key={day} className={`calendar-cell ${occupied ? "occupied" : "available"} ${selected === `${day}-${row}` ? "selected" : ""}`} onClick={() => !occupied && setSelected(`${day}-${row}`)} role="button" tabIndex={0}>{occupied && <><strong>{row % 2 ? "Artroscopia" : "Colecistectomía"}</strong><small>{row % 2 ? "C. Fernández · Q2" : "M. González · Q1"}</small></>}{!occupied && reserve && <small>Disponible</small>}</div>;
    })}</div>)}</Card>
    {reserve && <Card className="reservation-summary"><div><span className="eyebrow">RESUMEN DE RESERVA</span><div className="section-heading">{selected ? "Lunes 30 · 11:00–13:00" : "Seleccioná una franja disponible"}</div><p>Quirófano 1 · María González · Dr. Martín Pérez</p><Check label="Agregar a mi calendario" /></div><div className="header-actions"><Button variant="secondary" onClick={() => navigate("/quirofanos/cronograma")}>Cancelar</Button><Button onClick={() => setModal(true)}>Confirmar reserva</Button></div></Card>}
    {modal && <Modal title="¿Desea confirmar esta reserva?" onClose={() => setModal(false)}><p>Se reservará el Quirófano 1 el lunes 30 de septiembre de 11:00 a 13:00.</p><div className="modal-actions"><Button variant="secondary" onClick={() => setModal(false)}>Cancelar</Button><Button onClick={() => { setModal(false); navigate("/quirofanos/cronograma"); }}>Confirmar</Button></div></Modal>}
  </>;
}
