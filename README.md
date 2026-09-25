# Prototipo de Gestión Quirúrgica

Prototipo web **navegable** del sistema de gestión quirúrgica de un hospital. Recorre el circuito completo: registro de pacientes, lista de espera, estudios prequirúrgicos, programación de cirugías, reserva y cronograma de quirófanos, seguimiento postoperatorio e internación, alta con epicrisis, seguimiento ambulatorio y módulo de administración.

Es exclusivamente visual: **no incluye backend, base de datos, autenticación, persistencia ni IA real**. Toda la información es ficticia y las acciones se limitan a navegar entre pantallas, abrir formularios, modales y cambiar estados visuales.

Especificación funcional y visual: [`especificacion_prototipo_gestion_quirurgica.md`](./especificacion_prototipo_gestion_quirurgica.md)

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Cómo levantarlo

El proyecto está en `PrototipoQuirurgico/`:

```bash
cd PrototipoQuirurgico
npm install
npm run dev
```

Luego abrir <http://localhost:5173>. La pantalla inicial es el login; el botón **Ingresar** lleva al dashboard sin validar credenciales.

Otros comandos: `npm run build` (compila TypeScript y genera el build en `dist/`), `npm run preview` (sirve localmente ese build) y `npm run typecheck` (verifica tipos sin emitir archivos).
