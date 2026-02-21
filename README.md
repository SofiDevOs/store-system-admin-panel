## Resumen de cambios

- **Proyecto:** Aplicación Next.js (app router) con TypeScript y pnpm.
- **Estructura principal creada:** `src/app/` con `layout.tsx`, `page.tsx` y estilos globales.
- **Dashboard:** añadidos `src/app/dashboard/layout.tsx`, `src/app/dashboard/page.tsx`, `src/app/dashboard/components/Sidebar.tsx`, `src/app/dashboard/employees/page.tsx` y `src/app/dashboard/styles/dashboard.css`.
- **Estado actual:** fase inicial; la UI y rutas principales están implementadas, no hay integraciones API ni persistencia configuradas.
- **Notas técnicas:** usa el enrutador `app/` de Next.js y separación de estilos globales/específicos.
- **Recomendaciones siguientes:** crear `CHANGELOG.md` o `docs/CHANGES.md`, añadir pruebas unitarias/integ., configurar CI (lint/build/tests) e implementar endpoints o mocks para la página de empleados.