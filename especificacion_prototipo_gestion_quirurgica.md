# Especificación de prototipo navegable — Sistema de Gestión Quirúrgica

## 1. Objetivo del prototipo

Diseñar un prototipo web **exclusivamente navegable**, sin implementar lógica de negocio, persistencia, autenticación real, generación de documentos, IA ni operaciones CRUD reales.

El objetivo es representar:

- La estructura general del sistema.
- Las pantallas principales.
- La navegación entre pantallas.
- La jerarquía visual de la información.
- Los formularios y acciones que existirían en el sistema.
- Los estados visuales necesarios para comprender el flujo.
- Una interfaz médica profesional, limpia y de rápida utilización.

Todas las acciones pueden utilizar datos ficticios/mock y deben limitarse a navegar entre pantallas, abrir formularios, mostrar modales o cambiar estados visuales.

---

# 2. Concepto general

El sistema permite gestionar el circuito quirúrgico de un hospital:

1. Registro y administración de pacientes.
2. Gestión de pacientes en espera de cirugía.
3. Seguimiento de estudios prequirúrgicos.
4. Programación y reserva de quirófanos.
5. Organización del cronograma quirúrgico.
6. Seguimiento postoperatorio durante internación.
7. Registro del alta y epicrisis.
8. Seguimiento ambulatorio.
9. Administración de usuarios, servicios, especialidades y entidades básicas.
10. Consultas y búsqueda de información.
11. Generación asistida de epicrisis mediante IA.

El prototipo debe transmitir que se trata de un sistema hospitalario de uso cotidiano, donde las tareas frecuentes deben poder realizarse rápidamente.

---

# 3. Principios de UX

## 3.1. Navegación

La navegación debe ser simple y consistente.

Se propone:

- Barra lateral izquierda fija.
- Barra superior con búsqueda, notificaciones y usuario actual.
- Área central de contenido.
- Breadcrumbs cuando la navegación tenga más de un nivel.
- Botones de acción primaria visibles.
- Acciones frecuentes accesibles desde el dashboard.
- Botones "Volver" y "Cancelar" consistentes.
- Formularios divididos en secciones para evitar pantallas excesivamente largas.

## 3.2. Acciones frecuentes

Desde el dashboard debe existir acceso rápido a:

- Nuevo paciente.
- Buscar paciente.
- Lista de espera quirúrgica.
- Cronograma quirúrgico.
- Nueva reserva de quirófano.
- Pacientes internados.
- Seguimientos pendientes.

## 3.3. Densidad de información

Como se trata de un sistema médico, debe poder mostrar bastante información sin resultar visualmente cargado.

Utilizar:

- Cards.
- Tablas.
- Badges.
- Tabs.
- Acordeones.
- Paneles laterales.
- Modales para acciones secundarias.

Evitar grandes bloques de texto.

---

# 4. Identidad visual

## 4.1. Estilo

La interfaz debe ser:

- Limpia.
- Profesional.
- Moderna.
- Clínica pero amigable.
- Minimalista.
- De baja saturación.
- Con predominio de blancos, celestes y azules suaves.
- Con jerarquía visual clara.

No utilizar una estética hospitalaria excesivamente fría o tecnológica.

## 4.2. Fondo

El fondo general debe ser blanco.

Puede utilizarse un degradado muy sutil:

- Blanco como color dominante.
- Celeste/azul muy desaturado en zonas puntuales.
- Nunca utilizar degradados fuertes.

Ejemplo conceptual:

`#FFFFFF → #F4F9FC`

## 4.3. Paleta sugerida

Color principal:

- Azul suave: `#5B8FA8`

Color principal oscuro:

- Azul petróleo suave: `#315B70`

Color secundario:

- Celeste: `#8FBFD1`

Fondos:

- Celeste muy claro: `#EEF6F9`
- Gris azulado muy claro: `#F5F8FA`
- Blanco: `#FFFFFF`

Texto:

- Principal: `#263842`
- Secundario: `#687982`

Estados:

- Éxito: verde suave y desaturado.
- Advertencia: amarillo/beige suave.
- Error: rojo/coral suave.
- Información: celeste/azul suave.

Los colores de estado deben ser discretos y no dominar la interfaz.

## 4.4. Bordes y sombras

- Border radius moderado: aproximadamente 8–10 px.
- Evitar botones excesivamente redondeados o estilo "pill" salvo badges.
- Sombras muy suaves.
- Bordes finos en cards y tablas.
- No utilizar sombras fuertes.

## 4.5. Tipografía

Utilizar una tipografía sans-serif moderna y legible.

Preferentemente:

- Inter
- Manrope
- Nunito Sans

La tipografía debe priorizar legibilidad sobre estética.

---

# 5. Estructura general de la aplicación

## Layout principal

```text
┌─────────────────────────────────────────────────────────────────┐
│ Logo / nombre │ Buscar...             │ Notificaciones │ Usuario│
├───────────────┼─────────────────────────────────────────────────┤
│               │                                                 │
│ Dashboard     │                                                 │
│ Pacientes     │              CONTENIDO PRINCIPAL                │
│ Cirugías      │                                                 │
│ Quirófanos    │                                                 │
│ Seguimiento   │                                                 │
│ Consultas     │                                                 │
│ Administración│                                                 │
│               │                                                 │
│               │                                                 │
└───────────────┴─────────────────────────────────────────────────┘
```

La barra lateral puede colapsarse.

---

# 6. Menú principal

## Dashboard

Ruta conceptual:

`/dashboard`

Subsecciones:

- Resumen.
- Acciones rápidas.
- Próximas cirugías.
- Pacientes pendientes.
- Seguimientos.

## Pacientes

Ruta conceptual:

`/pacientes`

Subsecciones:

- Todos los pacientes.
- Lista de espera quirúrgica.
- Pacientes internados.
- Seguimiento ambulatorio.

## Cirugías

Ruta conceptual:

`/cirugias`

Subsecciones:

- Historia quirúrgica.
- Cirugías programadas.
- Nueva cirugía.
- Epicrisis.

## Quirófanos

Ruta conceptual:

`/quirofanos`

Subsecciones:

- Cronograma.
- Reservas.
- Disponibilidad.
- Asignación por servicio.

## Seguimiento

Ruta conceptual:

`/seguimiento`

Subsecciones:

- Internación.
- Evolución diaria.
- Altas.
- Seguimiento ambulatorio.

## Consultas

Ruta conceptual:

`/consultas`

Subsecciones:

- Buscar pacientes.
- Buscar cirugías.
- Buscar profesionales.
- Consultas avanzadas.

## Administración

Ruta conceptual:

`/administracion`

Subsecciones:

- Usuarios.
- Roles y permisos.
- Servicios.
- Especialidades.
- Quirófanos.
- Obras sociales.
- Diagnósticos.
- Estudios prequirúrgicos.
- Grados de urgencia.
- Configuración de asignaciones.

---

# 7. Pantalla de Login

Ruta:

`/login`

Contenido:

- Logo/nombre del sistema.
- Título: "Gestión Quirúrgica".
- Campo Email.
- Campo Contraseña.
- Checkbox "Recordarme".
- Botón "Ingresar".
- Link "¿Olvidaste tu contraseña?".

El prototipo puede permitir ingresar mediante un botón sin validar credenciales.

Debe existir un estado visual de error de login aunque no tenga funcionalidad real.

---

# 8. Dashboard

Ruta:

`/dashboard`

Debe ser la pantalla principal después del login.

## Encabezado

Título:

"Buenos días, Dr. García"

Subtítulo:

"Resumen de actividad quirúrgica"

## Cards de resumen

Mostrar:

- Cirugías programadas hoy.
- Pacientes en lista de espera.
- Pacientes internados.
- Seguimientos pendientes.
- Quirófanos ocupados.

## Acciones rápidas

Cards o botones:

- `+ Nuevo paciente`
- `Buscar paciente`
- `Programar cirugía`
- `Reservar quirófano`
- `Registrar evolución`
- `Ver cronograma`

## Próximas cirugías

Tabla compacta:

| Hora | Paciente | Cirugía | Quirófano | Cirujano | Estado |
|---|---|---|---|---|---|

## Seguimientos pendientes

Lista de pacientes con:

- Paciente.
- Habitación.
- Última evolución.
- Próxima acción.

---

# 9. Listado de pacientes

Ruta:

`/pacientes`

## Encabezado

Título:

"Pacientes"

Botones:

- `+ Nuevo paciente`
- `Buscar`

## Buscador

Campo:

"Buscar por nombre, apellido o DNI"

Filtros:

- Servicio.
- Obra social.
- Estado.
- Localidad.
- Riesgo quirúrgico.
- Prioridad.

## Tabla

Columnas:

- Paciente.
- DNI.
- Fecha de nacimiento.
- Edad.
- Obra social.
- Servicio.
- Diagnóstico.
- Prioridad.
- Estado.
- Acciones.

Acciones visuales:

- Ver.
- Editar.
- Ver historia quirúrgica.

La paginación debe ser visual.

---

# 10. Alta de paciente

Ruta:

`/pacientes/nuevo`

Formulario dividido en secciones.

## Datos personales

- Apellido.
- Nombres.
- DNI.
- Género.
- Fecha de nacimiento.
- Edad calculada visualmente.
- Localidad.

## Contacto

- Teléfono.
- Email.
- Contacto alternativo/familiar.

## Cobertura

- Obra social.

## Información médica inicial

- Antecedentes patológicos.
- Medicación habitual.
- Comentarios.

Botones:

- `Cancelar`
- `Guardar paciente`

Como el prototipo no tiene funcionalidad, "Guardar" puede navegar hacia el detalle del paciente.

---

# 11. Detalle del paciente

Ruta:

`/pacientes/:id`

Debe funcionar como ficha central del paciente.

## Encabezado

Mostrar:

- Nombre completo.
- DNI.
- Edad.
- Género.
- Obra social.
- Estado actual.

Acciones:

- `Editar paciente`
- `Nueva cirugía`
- `Programar cirugía`
- `Registrar seguimiento`

## Tabs

### Información personal

Mostrar datos personales y contacto.

### Antecedentes

- Antecedentes patológicos.
- Medicación.
- Alergias.
- Comentarios.

### Cirugías

Lista de todas las atenciones quirúrgicas históricas.

### Estudios

Lista de estudios prequirúrgicos.

### Seguimiento

Historial de seguimientos.

---

# 12. Lista de espera quirúrgica

Ruta:

`/pacientes/lista-espera`

Esta pantalla debe ser una de las más importantes del sistema.

## Encabezado

Título:

"Lista de espera quirúrgica"

Mostrar botón:

`+ Agregar paciente a lista`

## Filtros

- Servicio.
- Especialidad.
- Cirujano.
- Prioridad.
- Riesgo quirúrgico.
- Grado de urgencia.
- Estado de prequirúrgicos.
- Obra social.

## Tabla

Columnas:

- Fecha de registro.
- Paciente.
- Diagnóstico.
- Cirugía.
- Servicio.
- Cirujano tratante.
- Riesgo.
- Prioridad.
- Prequirúrgicos.
- Estado.

Cada fila permite abrir el detalle.

---

# 13. Detalle prequirúrgico

Ruta:

`/pacientes/:id/prequirurgicos`

Mostrar:

## Estudios requeridos

Lista con estados:

- Pendiente.
- Solicitado.
- Realizado.
- Validado.

Ejemplo:

| Estudio | Estado | Fecha | Resultado |
|---|---|---|---|

## Resumen de preparación

Card destacada:

"Paciente listo para programación"

o

"Estudios pendientes"

Debe existir visualmente la posibilidad de revisar qué estudios faltan.

---

# 14. Historia quirúrgica

Ruta:

`/pacientes/:id/cirugias`

Mostrar todas las atenciones quirúrgicas del paciente.

Cada cirugía como card o fila:

- Fecha.
- Diagnóstico.
- Procedimiento.
- Servicio.
- Cirujano.
- Tipo: internación / ambulatoria.
- Estado.

Al seleccionar una cirugía:

`/cirugias/:id`

---

# 15. Detalle de cirugía

Ruta:

`/cirugias/:id`

Encabezado:

- Nombre del paciente.
- Procedimiento.
- Fecha.
- Servicio.
- Cirujano.

Tabs:

### Resumen

- Diagnóstico.
- Descripción.
- Riesgo quirúrgico.
- Prioridad.
- Tipo de cirugía.

### Prequirúrgicos

Lista de estudios.

### Programación

- Quirófano.
- Fecha.
- Hora.
- Cirujano/s.

### Evolución

Historial postoperatorio.

### Epicrisis

Documento de alta.

### Seguimiento ambulatorio

Visitas posteriores.

---

# 16. Programación de cirugía

Ruta:

`/cirugias/nueva`

Flujo visual:

1. Seleccionar paciente.
2. Seleccionar procedimiento.
3. Seleccionar servicio.
4. Seleccionar cirujano.
5. Verificar prequirúrgicos.
6. Seleccionar fecha.
7. Seleccionar quirófano.
8. Seleccionar horario.
9. Revisar resumen.
10. Confirmar.

El prototipo puede representar estos pasos mediante un wizard.

---

# 17. Reserva de quirófano

Ruta:

`/quirofanos/reservar`

## Selector

- Paciente.
- Cirugía.
- Servicio.
- Especialidad.
- Cirujano.

## Calendario

Mostrar calendario semanal.

Ejemplo:

```text
              LUN    MAR    MIÉ    JUE    VIE
08:00         Cirugía
09:00         Cirugía
10:00         Cirugía
11:00
12:00
13:00
14:00                  Cirugía
15:00                  Cirugía
```

Las franjas disponibles deben verse diferentes de las ocupadas.

## Datos de reserva

- Quirófano.
- Fecha.
- Hora inicio.
- Hora fin.
- Cirujano/s.

Botones:

`Cancelar`

`Continuar`

`Confirmar reserva`

También mostrar una opción visual:

"Agregar a mi calendario"

Sin implementar integración real.

---

# 18. Vista de quirófanos

Ruta:

`/quirofanos`

Mostrar 4 quirófanos administrados por el sistema.

Importante: el quinto quirófano debe aparecer únicamente como referencia:

"Quirófano 5 — Reservado para emergencias"

No debe permitir reservarlo desde el prototipo.

## Cards

Para cada quirófano:

- Nombre.
- Tipo.
- Estado.
- Próxima cirugía.
- Servicio asignado.

---

# 19. Asignación de quirófanos

Ruta:

`/administracion/quirofanos/asignaciones`

Mostrar una matriz semanal:

```text
Quirófano 1

Lunes
08:00 - 12:00    Cirugía General
12:00 - 18:00    Oftalmología

Martes
08:00 - 14:00    Cirugía General
...
```

Acción:

`Editar asignación`

Modal:

- Quirófano.
- Día.
- Hora inicio.
- Hora fin.
- Servicio.
- Especialidad.

---

# 20. Cronograma quirúrgico

Ruta:

`/quirofanos/cronograma`

Esta debe ser una pantalla central del sistema.

## Encabezado

"Cronograma quirúrgico"

Selector:

- Día.
- Semana.

Indicadores:

- Quirófanos ocupados.
- Cirugías programadas.
- Cirugías pendientes de confirmación.

## Vista

Utilizar un calendario tipo agenda.

Cada cirugía debe mostrar:

- Hora.
- Paciente.
- Procedimiento.
- Cirujano.
- Quirófano.
- Servicio.
- Estado.

Estados:

- Pendiente.
- En revisión.
- Confirmada.
- Realizada.
- Cancelada.

Debe existir una representación visual del cierre del cronograma del día siguiente.

---

# 21. Pacientes internados

Ruta:

`/seguimiento/internados`

Mostrar lista de pacientes actualmente internados después de una cirugía.

Columnas:

- Paciente.
- Cirugía.
- Fecha cirugía.
- Habitación.
- Días internado.
- Última evolución.
- Médico.
- Estado.

Acción principal:

`Registrar evolución`

---

# 22. Evolución diaria

Ruta:

`/cirugias/:id/evolucion`

Mostrar timeline vertical.

Ejemplo:

```text
25/09
Habitación 302
Dr. Pérez

Paciente afebril.
Evolución favorable.

Tratamiento:
- Analgésicos
- Hidratación
- Control de herida
```

Botón:

`+ Registrar evolución`

Formulario:

- Día.
- Habitación.
- Médico.
- Evolución.
- Tratamiento postquirúrgico.
- Tratamiento de base.

---

# 23. Alta médica

Ruta:

`/cirugias/:id/alta`

Formulario:

## Datos de alta

- Fecha.
- Médico que da el alta.

## Epicrisis

Área de texto grande.

Sección:

"Generar epicrisis con IA"

Botón:

`Generar borrador con IA`

En el prototipo, este botón puede llevar a una pantalla simulada donde se muestre un borrador ficticio.

## Indicaciones

- Medicación.
- Cuidados.
- Controles.
- Signos de alarma.
- Recomendaciones.

Botones:

`Guardar borrador`

`Finalizar alta`

---

# 24. Epicrisis con IA

Ruta:

`/cirugias/:id/epicrisis`

Pantalla dividida:

```text
┌──────────────────────────┬───────────────────────────┐
│ Información disponible   │ Borrador de epicrisis     │
│                          │                           │
│ Diagnóstico              │ Motivo de ingreso         │
│ Cirugía                  │ Diagnósticos              │
│ Evoluciones              │ Procedimiento             │
│ Tratamientos             │ Evolución                 │
│ Estudios                 │ Indicaciones              │
└──────────────────────────┴───────────────────────────┘
```

Botones:

- `Regenerar borrador`
- `Editar`
- `Aceptar borrador`
- `Volver`

Debe quedar claro visualmente que la IA genera un borrador y que el profesional puede revisarlo y editarlo.

No implementar IA real.

---

# 25. Seguimiento ambulatorio

Ruta:

`/seguimiento/ambulatorio`

Mostrar historial de visitas.

Tabla:

- Fecha.
- Paciente.
- Médico.
- Comentario.
- Tratamiento.
- Próximo control.

Botón:

`+ Nueva visita`

---

# 26. Nueva visita ambulatoria

Ruta:

`/pacientes/:id/seguimiento/nuevo`

Formulario:

- Fecha.
- Médico.
- Comentario.
- Tratamiento posible.
- Próximo control.

Botones:

`Cancelar`

`Registrar visita`

---

# 27. Sistema de consultas

Ruta:

`/consultas`

La pantalla debe funcionar como un buscador general.

## Buscador principal

Placeholder:

"Buscar paciente, DNI, cirugía, médico..."

## Filtros avanzados

- Paciente.
- Servicio.
- Especialidad.
- Cirujano.
- Obra social.
- Diagnóstico.
- Fecha.
- Estado.
- Riesgo quirúrgico.
- Prioridad.

Resultados en tabla.

Cada resultado debe poder abrir su detalle.

---

# 28. Administración de usuarios

Ruta:

`/administracion/usuarios`

Tabla:

- Apellido.
- Nombre.
- Email.
- Especialidad.
- Servicio.
- Cargo.
- Estado.

Acciones:

- Ver.
- Editar.
- Permisos.

Botón:

`+ Nuevo usuario`

---

# 29. Alta de usuario

Ruta:

`/administracion/usuarios/nuevo`

Campos:

- Apellido.
- Nombres.
- Email.
- Especialidad.
- Servicio.
- Cargo.
- Roles/permisos.

Cargos:

- R1
- R2
- R3
- R4
- Cirujano
- Jefe
- Administrativo

Permisos mediante checkboxes:

- Lectura usuarios.
- Escritura usuarios.
- Lectura pacientes.
- Escritura pacientes.
- Lectura cirugías.
- Escritura cirugías.
- Lectura quirófanos.
- Escritura quirófanos.
- Lectura seguimientos.
- Escritura seguimientos.

---

# 30. Administración de entidades básicas

Crear una sección común para:

- Quirófanos.
- Obras sociales.
- Diagnósticos.
- Estudios prequirúrgicos.
- Grados de urgencia.
- Servicios.
- Especialidades.

Cada pantalla debe tener el mismo patrón:

```text
Título
Descripción

[ + Nuevo ]

Buscador / filtros

┌─────────────────────────────┐
│ Tabla                       │
│                             │
│ Registro   Estado  Acciones │
└─────────────────────────────┘
```

---

# 31. Pantallas de estados

El prototipo debe representar visualmente estados importantes.

## Empty state

Cuando no hay resultados:

" No encontramos pacientes que coincidan con los filtros."

Botón:

"Limpiar filtros"

## Loading

Skeletons para:

- Tablas.
- Cards.
- Detalle de paciente.

## Error

Mensaje discreto:

"No fue posible cargar la información."

Botón:

"Reintentar"

## Confirmación

Modal:

"¿Desea confirmar esta reserva?"

Botones:

"Cancelar"

"Confirmar"

---

# 32. Componentes reutilizables

El prototipo debería mantener consistencia mediante componentes reutilizables:

- `AppSidebar`
- `Topbar`
- `Breadcrumb`
- `PageHeader`
- `PrimaryButton`
- `SecondaryButton`
- `SearchBar`
- `FilterPanel`
- `DataTable`
- `StatusBadge`
- `PriorityBadge`
- `PatientCard`
- `PatientHeader`
- `InfoCard`
- `DetailRow`
- `Tabs`
- `Modal`
- `FormSection`
- `Timeline`
- `Calendar`
- `EmptyState`
- `LoadingState`
- `ConfirmationModal`

---

# 33. Datos ficticios para el prototipo

Utilizar datos claramente ficticios pero realistas.

Ejemplos:

### Paciente

"María González"

DNI:

"28.456.789"

Diagnóstico:

"Colelitiasis sintomática"

Cirugía:

"Colecistectomía laparoscópica"

Servicio:

"Cirugía General"

Cirujano:

"Dr. Martín Pérez"

### Otros pacientes

- Carlos Fernández
- Laura Rodríguez
- Miguel Sánchez
- Ana Martínez
- Jorge López

No utilizar datos reales de personas.

---

# 34. Navegación mínima requerida

El prototipo debe permitir recorrer como mínimo estos flujos:

## Flujo A — Paciente

```text
Dashboard
  ↓
Pacientes
  ↓
Lista de pacientes
  ↓
Detalle del paciente
  ↓
Historia quirúrgica
  ↓
Detalle de cirugía
```

## Flujo B — Lista de espera

```text
Dashboard
  ↓
Lista de espera
  ↓
Paciente
  ↓
Prequirúrgicos
  ↓
Programar cirugía
```

## Flujo C — Reserva

```text
Dashboard
  ↓
Quirófanos
  ↓
Cronograma
  ↓
Reservar quirófano
  ↓
Seleccionar paciente
  ↓
Seleccionar horario
  ↓
Confirmación
```

## Flujo D — Seguimiento

```text
Paciente
  ↓
Cirugía
  ↓
Seguimiento
  ↓
Evolución diaria
  ↓
Alta
  ↓
Epicrisis
  ↓
Seguimiento ambulatorio
```

## Flujo E — Administración

```text
Administración
  ↓
Usuarios
  ↓
Nuevo usuario

Administración
  ↓
Quirófanos
  ↓
Asignaciones

Administración
  ↓
Obras sociales / Diagnósticos / Estudios
```

---

# 35. Navegación global

Las siguientes acciones deben funcionar siempre visualmente:

- Logo → Dashboard.
- Dashboard → secciones principales.
- Sidebar → cualquier módulo.
- Breadcrumb → navegación hacia atrás.
- Nombre del paciente → detalle.
- Cirugía → detalle de cirugía.
- Avatar → menú de usuario.
- Buscar → resultados.
- Notificaciones → panel de notificaciones.

---

# 36. Responsive

El prototipo debe contemplar:

## Desktop

Layout completo:

- Sidebar.
- Topbar.
- Contenido amplio.

## Tablet

- Sidebar colapsada.
- Tablas adaptadas.

## Mobile

- Menú lateral convertido en menú desplegable.
- Cards en una columna.
- Tablas convertidas en cards cuando sea necesario.
- Acciones principales accesibles mediante botones visibles.

La prioridad del sistema es desktop, dado que será utilizado principalmente dentro del hospital.

---

# 37. Reglas importantes del prototipo

No implementar:

- Base de datos.
- Login real.
- Autorización real.
- CRUD real.
- Validaciones de negocio reales.
- IA real.
- Integración con calendarios.
- Envío de emails.
- Persistencia.
- Integración con sistemas hospitalarios.

Sí implementar visualmente:

- Navegación.
- Formularios.
- Modales.
- Tabs.
- Calendarios.
- Tablas.
- Filtros visuales.
- Estados.
- Datos mock.
- Mensajes de confirmación.
- Flujo completo entre pantallas.

---

# 38. Prioridad de las pantallas

## Prioridad alta

1. Login.
2. Dashboard.
3. Pacientes.
4. Detalle de paciente.
5. Lista de espera.
6. Historia quirúrgica.
7. Detalle de cirugía.
8. Cronograma de quirófanos.
9. Reserva de quirófano.
10. Seguimiento de internación.
11. Evolución diaria.
12. Alta / Epicrisis.
13. Seguimiento ambulatorio.

## Prioridad media

14. Consultas.
15. Usuarios.
16. Quirófanos.
17. Asignación de quirófanos.
18. Obras sociales.
19. Diagnósticos.
20. Estudios prequirúrgicos.
21. Servicios.
22. Especialidades.
23. Grados de urgencia.

---

# 39. Resultado esperado

El resultado final debe sentirse como un **sistema hospitalario real de gestión quirúrgica**, pero sin implementar todavía la lógica del sistema.

La persona que pruebe el prototipo debe poder entender:

- Qué pacientes están esperando cirugía.
- Qué pacientes están internados.
- Qué cirugías están programadas.
- Qué quirófanos están disponibles.
- Qué médico sigue a cada paciente.
- Qué estudios prequirúrgicos están completos.
- Cómo se registra una evolución.
- Cómo se registra un alta.
- Cómo se consulta una epicrisis.
- Cómo se continúa el seguimiento ambulatorio.
- Cómo se administran usuarios y entidades básicas.

La navegación debe ser el eje principal del prototipo: cada botón y enlace importante debe llevar a una pantalla existente, incluso si la operación subyacente todavía no está implementada.

---

# 40. Dirección visual resumida

**Estética:** médica, profesional, moderna y minimalista.

**Fondo:** blanco con degradados celestes muy sutiles.

**Paleta:** azules, celestes y grises azulados de baja saturación.

**Botones:** rectangulares con esquinas moderadamente redondeadas.

**Cards:** blancas, bordes suaves, sombras muy ligeras.

**Estados:** badges discretos.

**Tipografía:** sans-serif moderna y altamente legible.

**Layout:** sidebar + topbar + contenido.

**Sensación buscada:** claridad, tranquilidad, orden y rapidez de uso.

**Evitar:** colores saturados, exceso de sombras, glassmorphism exagerado, botones completamente redondos, gradientes fuertes, interfaces recargadas y estética futurista.
