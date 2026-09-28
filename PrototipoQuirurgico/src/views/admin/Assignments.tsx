import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Modal } from "@/components/ui/Modal";
import { Select } from "@/components/ui/Select";
import { Crumb } from "@/components/ui/Crumb";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PageHeader } from "@/components/ui/PageHeader";

export function Assignments() {
  const [modal, setModal] = useState(false);
  return <><Crumb items={["Administración", "Quirófanos", "Asignaciones"]} /><PageHeader title="Asignación de quirófanos" subtitle="Bloques semanales por servicio y especialidad." actions={<Button onClick={() => setModal(true)}>Editar asignación</Button>} /><div className="assignment-grid">{["Quirófano 1", "Quirófano 2", "Quirófano 3", "Quirófano 4"].map((room, idx) => <Card key={room}><SectionTitle title={room} subtitle={idx === 0 ? "Cirugía general" : "Uso multidisciplinario"} />{["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"].map((day, i) => <div className="assignment" key={day}><strong>{day}</strong><div><span>08:00 – {i % 2 ? "14:00" : "12:00"}</span><small>{idx % 2 ? "Traumatología" : "Cirugía General"}</small></div>{i % 2 === 0 && <div><span>12:00 – 18:00</span><small>Oftalmología</small></div>}</div>)}</Card>)}</div>{modal && <Modal title="Editar asignación" onClose={() => setModal(false)}><div className="form-grid"><Select label="Quirófano"><option>Quirófano 1</option></Select><Select label="Día"><option>Lunes</option></Select><Input label="Hora inicio" type="time" /><Input label="Hora fin" type="time" /><Select label="Servicio"><option>Cirugía General</option></Select><Select label="Especialidad"><option>Cirugía General</option></Select></div><div className="modal-actions"><Button variant="secondary" onClick={() => setModal(false)}>Cancelar</Button><Button onClick={() => setModal(false)}>Guardar</Button></div></Modal>}</>;
}
